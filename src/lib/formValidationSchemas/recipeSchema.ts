import * as yup from "yup"

export const recipeSchema = yup.object().shape({
    title: yup.string().required("O título é obrigatório"),
    category: yup.string().required("A categoria é obrigatória"),       
    description: yup.string().required("A descrição é obrigatória"),
    imageUrl: yup.string().required("A URL da imagem é obrigatória"),
    prepTime: yup.number().required("O tempo de preparo é obrigatório"),
    cookTime: yup.number().required("O tempo de cozimento é obrigatório"),
    servings: yup.number().typeError("AS porções devem ser um número").positive("O número de porções deve ser positivo").integer("O número de porções deve ser inteiro").min(1, "Deve haver pelo menos uma porção").required("A quantidade de porções é obrigatória"),
})

export type recipeFormData = yup.InferType<typeof recipeSchema>