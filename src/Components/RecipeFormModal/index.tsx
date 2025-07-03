import { Recipe } from "@/lib/data";
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "../ui/dialog";
import { useFieldArray, useForm } from "react-hook-form";
import {
  recipeFormData,
  recipeSchema,
} from "@/lib/formValidationSchemas/recipeSchema";
import { yupResolver } from "@hookform/resolvers/yup";

interface RecipeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_VALUES: recipeFormData = {
    title: "",
    category: "",
    description: "",
    imageUrl: "",
    prepTime: 0,
    cookTime: 0,
    servings: 0,
    ingredients: [{ value: ""}],
    instructions: [{ value: ""}],
};

export default function RecipeFormModal({
  isOpen,
  onClose,
}: RecipeFormModalProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<recipeFormData>({
    resolver: yupResolver(recipeSchema),
    mode: "onSubmit",
    defaultValues: DEFAULT_VALUES,
  });

  const {
    fields: ingredientFields,
    append: appendIngredients,
    remove: removeIngredients,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: instructionFields,
    append: appendInstructions,
    remove: removeInstructions,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  const onSubmit = (data: recipeFormData) => {
const recipeData = {
    ...data,
    ingredientes: data.ingredients.map((ingredient) => ingredient.value),
    instructions: data.instructions.map((instruction) => instruction.value),
}

    console.log(recipeData);
    reset();
    onClose();
  };

  const inputStyle = "p-2 border border-zinc-200 rounded-md flex-grow w-full";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white md:max-w-2xl overflow-y-scroll max-h-[90dvh]">
        <DialogHeader>
          <DialogTitle> Criar nova receita</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          {/* Título e Categoria */}
          <div className="grid grid-cols-2 gap-2">
            {/* Título */}
            <div className="flex flex-col gap-1">
              <label htmlFor="title">Título</label>
              <input
                className={inputStyle}
                type="text"
                id="title"
                {...register("title")}
              />
              {errors.title && (
                <span className="text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
            </div>
            {/* Categoria */}
            <div className="flex flex-col gap-1">
              <label htmlFor="category">Categoria</label>
              <input
                className={inputStyle}
                type="text"
                id="category"
                {...register("category")}
              />
              {errors.category && (
                <span className="text-red-500 text-sm">
                  {errors.category.message}
                </span>
              )}
            </div>
          </div>

          {/* Descrição */}
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Descrição</label>
            <textarea
              className={inputStyle}
              id="description"
              {...register("description")}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          {/* URL da imagem */}
          <div className="flex flex-col gap-1">
            <label htmlFor="imageUrl">URL da imagem</label>
            <input
              className={inputStyle}
              id="text"
              placeholder="https://example.com/image.jpg"
              {...register("imageUrl")}
            />
            {errors.imageUrl && (
              <span className="text-red-500 text-sm">
                {errors.imageUrl.message}
              </span>
            )}
          </div>

          {/* Tempo de preparo, cozimento e quantidade de porções */}
          <div className="grid grid-cols-3 gap-2">
            {/* Tempo de preparo */}
            <div className="flex flex-col gap-1">
              <label htmlFor="prepTime">Tempo de preparo</label>
              <input
                className={inputStyle}
                type="text"
                id="prepTime"
                placeholder="15 minutos"
                {...register("prepTime")}
              />
              {errors.prepTime && (
                <span className="text-red-500 text-sm">
                  {errors.prepTime.message}
                </span>
              )}
            </div>
            {/* Tempo de cozimento */}
            <div className="flex flex-col gap-1">
              <label htmlFor="cookTime">Tempo de cozimento</label>
              <input
                className={inputStyle}
                type="text"
                id="cookTime"
                placeholder="30 minutos"
                {...register("cookTime")}
              />
              {errors.cookTime && (
                <span className="text-red-500 text-sm">
                  {errors.cookTime.message}
                </span>
              )}
            </div>
            {/* Porções */}
            <div className="flex flex-col gap-1">
              <label htmlFor="servings">Porções</label>
              <input
                className={inputStyle}
                type="number"
                id="servings"
                defaultValue="1"
                placeholder="1"
                {...register("servings")}
              />
              {errors.servings && (
                <span className="text-red-500 text-sm">
                  {errors.servings.message}
                </span>
              )}
            </div>
          </div>

          {/* Lista de ingredientes */}

          <div className="flex flex-col gap-1">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="flex flex-col gap-2">
                
              {/* Conteúdo */}
              {ingredientFields.map((field, index) => ( 
                <div key={field.id} className="flex gap-2 w-full">
               <div className="flex-grow">
                 <input id="ingredients" className={inputStyle} type="text" {...register(`ingredients.${index}.value`)} placeholder="Digite um ingrediente"/>
                {errors.ingredients?.[index]?.value && (
                  <span className="text-red-500 text-sm">
                    {errors.ingredients?.[index].value.message}
                  </span>
                )}
               </div>
               { ingredientFields.length > 1 && <button onClick={() => removeIngredients(index)}
                  type="button"
                  className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium h-fit"
                >
                  Remover
                </button>}
              </div>
              ))}

              <button onClick={() => appendIngredients({ value: ""})}
                type="button"
                className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium w-fit"
              >
                Adicionar ingrediente
              </button>
            </div>
          </div>

          {/* Lista de instruções */}

          <div className="flex flex-col gap-1">
            <label htmlFor="instructions">Instruções</label>
            <div className="flex flex-col gap-2">
              {/* Conteúdo */}
               {instructionFields.map((field, index) => ( 
                <div key={field.id} className="flex gap-2 w-full">
                <div className="flex-grow">
                    <textarea id="instruction" className={inputStyle} {...register(`instructions.${index}.value`)} placeholder="Digite uma instrução"/>
                {errors.instructions?.[index]?.value && (
                  <span className="text-red-500 text-sm">
                    {errors.instructions?.[index].value.message}
                  </span>
                )}
                </div>
               { instructionFields.length > 1 && <button onClick={() => removeInstructions(index)}
                  type="button"
                  className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium h-fit"
                >
                  Remover
                </button>}
              </div>
              ))}

              <button onClick={() => appendInstructions({ value: ""})}
                type="button"
                className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium w-fit"
              >
                Adicionar instrução
              </button>
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-2 self-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-black rounded-md hover:bg-gray-800 transition-colors px-4 py-2 font-medium text-white"
            >
              Criar receita
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
