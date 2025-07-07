import { Recipe } from "@/lib/data";
import { on } from "events";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RecipeCardProps {
  recipe: Recipe;
  onEdit?: () => void;
  onDelete?: () => void;
  mostrarBotaoEditar?: boolean;
  mostrarBotaoDeletar?: boolean;
}


export default function RecipeCard({ recipe, onEdit, onDelete, mostrarBotaoEditar, mostrarBotaoDeletar}: RecipeCardProps) {

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onEdit?.()
}

const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onDelete?.()
}

  return (
    <Link href={`/receitas/${recipe.id}`}>
      <div className="flex flex-col border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-[100%]">
        {/* Imagem */}
        <div className="relative h-48 w-full">
          <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
        </div>
       
<div className="flex flex-col justify-between p-4 gap-6 flex-grow">
     {/* Título e Descrição */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold hover:text-orange-500 transition-colors">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>

{/* Categoria e ações */}
        <div className="flex justify-between w-full items-center">
<span className="text-sm text-gray-500 rounded bg-gray-100 px-2 py-1">
    {recipe.category}
</span>

<div className="flex gap-2">
    {/* Botão de editar */}

  {mostrarBotaoEditar && (<button type="button" onClick={(e) => handleEdit(e)} className="p-2 border-gray-200 rounded hover:bg-gray-200 transition-colors hover:cursor-pointer">
    <Edit size={16} /> 
</button>)} 
{mostrarBotaoDeletar && (<button  type="button" onClick={(e) => handleDelete(e)}  className="p-2 border-gray-200 rounded hover:bg-gray-200 transition-colors hover:cursor-pointer">
    <Trash2 size={16} />
</button>)}

</div>

        </div>
</div>

      </div>
    </Link>
  );
}
