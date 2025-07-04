"use client"
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { recipes } from "@/lib/data";
import RecipeCard from "@/Components/RecipeCards";

export default function Home() {
const FeaturedRecipes = recipes.slice(0, 3)

  return (
   <main className="flex-grow">
   
{/* Section: HERO */}

<section className="bg-orange-50 py-12">
  <div className="container mx-auto flex flex-col items-center gap-6 text-center xl:max-w-[80%]">
  <h1 className="text-5xl font-blod">Receitas deliciosas</h1>
  <p className="text-xl">Descubra receitas simples e saborosas para todas as ocasiões</p>
  <Link className="bg-orange-500 text-white font-bold rounded-lg px-3 py-2 hover:bg-orange-600 transition-colors" href="/receitas">Ver todas as receitas</Link>
  </div>
</section>

{/* Section: featured recipes */}
<section className="py-12">
<div className="flex flex-col items-center container mx-auto gap-8 max-w-[80%]">
  <h2 className="text-lg font-bold">Receitas em destaque</h2>
  
  <div className="flex flex-col sm:flex-row -w-full gap-8">
    {FeaturedRecipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} onDelete={() => {}} onEdit={() => {}} />
    ))}
  </div>

  <Link className="flex text-orange-400 hover:text-orange-700 transition-colors"  href="/receitas">
  Ver todas as receitas
  <ChevronRight />
  </Link>
</div>
</section>
   
   </main>
  );
}
