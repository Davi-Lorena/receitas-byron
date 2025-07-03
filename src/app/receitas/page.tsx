"use client"

import RecipeCard from "@/Components/RecipeCards";
import RecipeFormModal from "@/Components/RecipeFormModal";
import { recipes as initialRecipes } from "@/lib/data";
import type { Recipe } from "@/lib/data";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function ReceitasPage() {
const[isRecipeFormModalOpen, setIsRecipeFormModalOpen] = useState(false)
const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes)

const handleCreateRecipe = (recipeData: Omit<Recipe, "id">) => { 
    const newRecipe: Recipe = {  
        ...recipeData,
        id: (recipes.length + 1).toString()
}

setRecipes((prev) => [...prev, newRecipe]);
}

    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto max-w-[80%]">
                
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-3xl font-bold">Todas as receitas</h1>

                    <button onClick={() => setIsRecipeFormModalOpen(true)} className="flex gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors bg-black text-white items-center">
                        <Plus size={16} />
                        Nova receita</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                  {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
            </div>

            <RecipeFormModal isOpen={isRecipeFormModalOpen} onClose={() => setIsRecipeFormModalOpen(false)} onSave={handleCreateRecipe}/>
        </main>
    )
}