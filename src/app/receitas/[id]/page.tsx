import InfoPill from "@/Components/infoPill";
import { recipes } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface RecipePageProps {
    params: {
        id: string;
    };
}



export default function ReceitaPage({ params }: RecipePageProps) {
    const recipe = recipes.find((recipe) => recipe.id === params.id);

if(!recipe) {
    return notFound()
}


  return (
    <main className="flex-grow py-18">
        <div className="container mx-auto">
            <Link className="flex text-orange-500 hover:text-orange-700 transition-colors mb-6" href="receitas">
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
<div className="flex gap-4">
        <InfoPill title="Preparo" info={recipe.prepTime} />
        <InfoPill title="Cozimento"info={recipe.cookTime}/>
        <InfoPill title="Porções"info={recipe.servings}/>
        <InfoPill title="Categoria"info={recipe.category}/>
</div>

{/* Colunas */}

<div className="grid grid-cols-2 gap-4">
    {/* Ingredientes */}
<div> 
    <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
<ul className="list-disc list-inside space-y-2">
{recipe.ingredients.map((ingredient) => (
    <li className="marker:text-orange-500" key={ingredient}>{ingredient}</li>
))}
</ul>
</div>
{/* Preparo */}

<div>
    <h2 className="text-xl font-bold mb-4">Modo de preparo</h2>
{/* TODO: componente de preparo */}
</div>

</div>


</div>
        </section>

        </div>
        </main>
  )
}