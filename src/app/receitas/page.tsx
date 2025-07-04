"use client"

import DeleteConfirmationModal from "@/Components/DeleteConfirmationModal";
import RecipeCard from "@/Components/RecipeCards";
import RecipeFormModal from "@/Components/RecipeFormModal";
import { recipes as initialRecipes } from "@/lib/data";
import type { Recipe } from "@/lib/data";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

export default function ReceitasPage() {
const[isRecipeFormModalOpen, setIsRecipeFormModalOpen] = useState(false)
const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false)
const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes)
const[modalMode, setModalMode] = useState<'create' | 'edit'>('create')
const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>(undefined)

const [search, setSearch] = useState('')

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

const handleSaveRecipe = (recipeData: Omit<Recipe, "id"> | Recipe) => { 
if(modalMode === 'create') {


    const newRecipe: Recipe = {  
        ...recipeData,
        id: (recipes.length + 1).toString()
    } 
    setRecipes((prev) => [...prev, newRecipe]);
} else { // edit mode 
const updateRecipe = recipeData as Recipe
setRecipes((prev) => prev.map((recipe) => recipe.id === updateRecipe.id ? updateRecipe : recipe))

}
handleCloseModal()
}

const handleOpenDeleteConfirmationModal = (recipe: Recipe) => {
setSelectedRecipe(recipe)
setIsDeleteConfirmationModalOpen(true)
}

const handleDeleteRecipe = () => {
    if(selectedRecipe) {
        setRecipes((prev) => prev.filter((recipe) => recipe.id !== selectedRecipe.id))
        setIsDeleteConfirmationModalOpen(false)
        setSelectedRecipe(undefined)
    }
}

const filterRecipes = recipes.filter((recipe) => { 
     const lowerCaseSearch = search.toLowerCase().replace(/\s/g, '')
 return ( 
      recipe.title.toLowerCase().replace(/\s/g, '').includes(lowerCaseSearch) ||
      recipe.description.toLowerCase().replace(/\s/g, '').includes(lowerCaseSearch) ||
      recipe.category.toLowerCase().replace(/\s/g, '').includes(lowerCaseSearch) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(lowerCaseSearch))

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
                     onDelete={() => handleOpenDeleteConfirmationModal(recipe)}/> 
                    ))}
                </div>
            </div>

            <RecipeFormModal isOpen={isRecipeFormModalOpen} onClose={handleCloseModal} onSave={handleSaveRecipe} mode={modalMode} recipe={selectedRecipe} />

            <DeleteConfirmationModal isOpen={isDeleteConfirmationModalOpen} onClose={() => setIsDeleteConfirmationModalOpen(false)} onConfirm={handleDeleteRecipe} recipe={selectedRecipe} />
        </main>
    )
}