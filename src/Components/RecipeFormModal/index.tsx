import { Recipe } from "@/lib/data"
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "../ui/dialog"
import { useForm } from "react-hook-form"
import { recipeFormData, recipeSchema } from "@/lib/formValidationSchemas/recipeSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { on } from "events"

interface RecipeFormModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function RecipeFormModal({ isOpen, onClose }: RecipeFormModalProps) {
const { 
    register,
    reset,
    handleSubmit,
    formState: { errors },
} = useForm<recipeFormData>({
    resolver: yupResolver(recipeSchema),
    mode: "onSubmit"
})

const onSubmit = (data: recipeFormData) => {
    console.log(data)
    reset()
    onClose()
}

const inputStyle = "p-2 border border-zinc-200 rounded-md"

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white">
            <DialogHeader>
                <DialogTitle> Criar nova receita</DialogTitle>
            </DialogHeader>

<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
    {/* Título e Categoria */}
    <div className="grid grid-cols-2 gap-2">
        {/* Título */}
        <div className="flex flex-col gap-1">
            <label htmlFor="title">Título</label>
            <input className={inputStyle} type="text" id="title" {...register("title")}/>
            {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
        </div>
        {/* Categoria */}
         <div className="flex flex-col gap-1">
            <label htmlFor="category">Categoria</label>
            <input className={inputStyle} type="text" id="category" {...register("category")}/>
            {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
        </div>
    </div>

{/* Descrição */}
<div className="flex flex-col gap-1">
    <label htmlFor="description">Descrição</label>
    <textarea className={inputStyle} id="description" {...register("description")}/>
    {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
</div>

{/* URL da imagem */}
<div className="flex flex-col gap-1">
    <label htmlFor="imageUrl">URL da imagem</label>
    <input className={inputStyle} id="text" placeholder="https://example.com/image.jpg" {...register("imageUrl")}/>
    {errors.imageUrl && <span className="text-red-500 text-sm">{errors.imageUrl.message}</span>}
</div>

{/* Tempo de preparo, cozimento e quantidade de porções */}
<div className="grid grid-cols-3 gap-2">
        {/* Tempo de preparo */}
        <div className="flex flex-col gap-1">
            <label htmlFor="prepTime">Tempo de preparo</label>
            <input className={inputStyle} type="text" id="prepTime" placeholder="15 minutos" {...register("prepTime")}/>
            {errors.prepTime && <span className="text-red-500 text-sm">{errors.prepTime.message}</span>}
        </div>
        {/* Tempo de cozimento */}
         <div className="flex flex-col gap-1">
            <label htmlFor="cookTime">Tempo de cozimento</label>
            <input className={inputStyle} type="text" id="cookTime" placeholder="30 minutos" {...register("cookTime")}/>
            {errors.cookTime && <span className="text-red-500 text-sm">{errors.cookTime.message}</span>}
        </div>
        {/* Porções */}
         <div className="flex flex-col gap-1">
            <label htmlFor="servings">Porções</label>
            <input className={inputStyle} type="number" id="servings" defaultValue="1" placeholder="1" {...register("servings")}/>
            {errors.servings && <span className="text-red-500 text-sm">{errors.servings.message}</span>}
        </div>
    </div>

<div className="flex gap-2 self-end">
    <button type="button" onClick={onClose} className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium">Cancelar</button>
    <button type="submit" className="bg-black rounded-md hover:bg-gray-800 transition-colors px-4 py-2 font-medium text-white">Criar receita</button>
</div>
</form>

        </DialogContent>
        </Dialog>
    )
}