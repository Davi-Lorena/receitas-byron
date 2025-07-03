import { Recipe } from "@/lib/data"
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "../ui/dialog"

interface RecipeFormModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function RecipeFormModal({ isOpen, onClose }: RecipeFormModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle> Criar nova receita</DialogTitle>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}