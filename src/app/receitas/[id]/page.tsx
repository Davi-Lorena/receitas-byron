"use client"
import InfoPill from "@/Components/infoPill";
import PreparationStep from "@/Components/preparationStep";
import api from "@/lib/api";
import { Recipe } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface RecipePageProps {
    params: {
        id: string;
    };
}



export default function ReceitaPage({ params }: RecipePageProps) {
    const [loading, setLoading] = useState(true)
    const [recipe, setRecipe] = useState<Recipe | null>(null)
    useEffect(() => {
const fetchRecipe  = async () => { 
    try {
        const response  = await api.get(`/recipes/${params.id}`)
        setRecipe(response.data)
    } catch (error) {
console.error("Erro ao requisitar receita", error)        
    } finally {
        setLoading(false)
    }
}
fetchRecipe()
    }, [])

if(loading) {
        return (
            <main className="flex-grow -py8">
                <div className="container mx-auto">
                    <div className="flex justify-center">
<p>Carregando receita...</p>
                    </div>
                </div>
            </main>
        )
    }

if(!recipe) {
    return notFound()
}


  return (
    <main className="flex-grow py-18">
        <div className="container mx-auto max-w-[80%]">
            <Link className="flex text-orange-500 hover:text-orange-700 transition-colors mb-6" href="/receitas">
            <ChevronLeft />
            Voltar para receitas
            </Link>

<section className="rounded-lg overflow-hidden shadow-md"> 
<div className="relative h-96 w-full">
    <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
</div>

<div className="flex flex-col gap-6 p-6">
    {/* Descrição da receita */}
<div>
    {/* Título e descrição */}
    <h1 className="text-3xl font-bold">{recipe.title}</h1>    
<p>{recipe.description}</p>
</div>

{/* Infos do preparo */}
<div className="flex flex-wrap justify-center sm:justify-start gap-4">
        <InfoPill title="Preparo" info={recipe.prepTime} />
        <InfoPill title="Cozimento"info={recipe.cookTime}/>
        <InfoPill title="Porções"info={recipe.servings}/>
        <InfoPill title="Categoria"info={recipe.category}/>
</div>

{/* Colunas */}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Ingredientes */}
<div> 
    <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
<ul className="list-disc list-inside space-y-2">
{recipe.ingredients.map((ingredient) => (
    <li className="marker:text-orange-500" key={ingredient.value}>{ingredient.value}</li>
))}
</ul>
</div>
{/* Preparo */}

<div>
    <h2 className="text-xl font-bold mb-4">Modo de preparo</h2>
<ol className="space-y-4">
{recipe.instructions.map((instruction, index) => (
    <PreparationStep key={instruction.value} index={index + 1} description={instruction.value} />
))}

</ol>
</div>

</div>


</div>
        </section>

        </div>
        </main>
  )
}