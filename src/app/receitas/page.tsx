"use client"

import DeleteConfirmationModal from "@/Components/DeleteConfirmationModal";
import RecipeCard from "@/Components/RecipeCards";
import RecipeFormModal from "@/Components/RecipeFormModal";
import api from "@/lib/api";
import type { Recipe } from "@/lib/data";
import { Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { toast } from "sonner";

export default function ReceitasPage() {
const[isRecipeFormModalOpen, setIsRecipeFormModalOpen] = useState(false)
const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false)
const [recipes, setRecipes] = useState<Recipe[]>([])
const[modalMode, setModalMode] = useState<'create' | 'edit'>('create')
const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>(undefined)

const [search, setSearch] = useState('')

useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const response = await api.get('/recipes')
       setRecipes(response.data)

        } catch (error) {
            console.error('Erro ao buscar receitas', error)
            toast.error(`Erro ao buscar as receitas. Tente novamente mais tarde!`)
        }
    }

    fetchRecipes()
}, [])

const handleOpenCreateModal = () => {
    setModalMode('create')
    setSelectedRecipe(undefined)
    setIsRecipeFormModalOpen(true)
}

const handleOpenEditModal = (recipe: Recipe) => {
    setModalMode('edit')
    setSelectedRecipe(recipe)
    setIsRecipeFormModalOpen(true)
}

const handleCloseModal = () => {
    setIsRecipeFormModalOpen(false)
}

const handleSaveRecipe = async (recipeData: Omit<Recipe, "id"> | Recipe) => { 
try {
    if(modalMode === 'create') {
const response = await api.post('/recipes', recipeData)
const newRecipe = response.data
setRecipes((prev) => [...prev, newRecipe])
toast.success(`Receita "${recipeData.title}" criada com sucesso!`)
    } 
 else { // edit mode 
const updateRecipe = recipeData as Recipe
const response = await api.put(`/recipes/${updateRecipe.id}`, updateRecipe)
setRecipes((prev) => prev.map((recipe) => recipe.id === updateRecipe.id ? response.data : recipe))
toast.success(`Receita "${recipeData.title}" editada com sucesso!`)
}
handleCloseModal()


} catch (error) {
    console.error(`Erro ao ${modalMode === "create" ? "criar" : "editar"} a receita`, error)
    toast.error(`Erro ao ${modalMode === "create" ? "criar" : "editar"} a receita`)
}


}

const handleOpenDeleteConfirmationModal = (recipe: Recipe) => {
setSelectedRecipe(recipe)
setIsDeleteConfirmationModalOpen(true)
}

const handleDeleteRecipe = async () => {
    try {
        if(selectedRecipe) {
            await api.delete(`/recipes/${selectedRecipe.id}`)

        setRecipes((prev) => prev.filter((recipe) => recipe.id !== selectedRecipe.id))
        setIsDeleteConfirmationModalOpen(false)
        setSelectedRecipe(undefined)
        toast.success(`Receita excluída com sucesso!`)
    }
    } catch (error) {
        console.error('Erro ao deletar receita', error)
        toast.error(`Erro ao deletar a receita!`)
    }
}

const filterRecipes = recipes.filter((recipe) => { 
     const lowerCaseSearch = search.toLowerCase().replace(/\s/g, '')
 return ( 
      recipe.title.toLowerCase().replace(/\s/g, '').includes(lowerCaseSearch) ||
      recipe.description.toLowerCase().replace(/\s/g, '').includes(lowerCaseSearch) ||
      recipe.category.toLowerCase().replace(/\s/g, '').includes(lowerCaseSearch) ||
      recipe.ingredients.some(ingredient =>
        ingredient.value.toLowerCase().includes(lowerCaseSearch))

      )
})


    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto max-w-[80%]">
                
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-3xl font-bold">Todas as receitas</h1>

                    <button onClick={handleOpenCreateModal} className="flex gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors bg-black text-white items-center">
                        <Plus size={16} />
                        Nova receita</button>
                </div>

                <div className="p-[.2rem] outline-3 outline-transparent focus-within:outline-gray-400 mt-8 rounded-lg">
                    <div className="flex p-2 items-center gap-2 w-full outline  rounded-md focus-within:outline-black focus-within:outline-2">
                    <Search color="gray" size={16} />
                    <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Pesquisar receitas por título, descrição, categoria ou ingredientes..."
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                  {filterRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe}
                     onEdit={() => handleOpenEditModal(recipe)} 
                     onDelete={() => handleOpenDeleteConfirmationModal(recipe)} mostrarBotaoEditar={true} mostrarBotaoDeletar={true}/> 
                    ))}
                </div>
            </div>

            <RecipeFormModal isOpen={isRecipeFormModalOpen} onClose={handleCloseModal} onSave={handleSaveRecipe} mode={modalMode} recipe={selectedRecipe} />

            <DeleteConfirmationModal isOpen={isDeleteConfirmationModalOpen} onClose={() => setIsDeleteConfirmationModalOpen(false)} onConfirm={handleDeleteRecipe} recipe={selectedRecipe} />
        </main>
    )
}