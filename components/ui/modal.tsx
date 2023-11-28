"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";

// this modal props is for the modal component in the ui folder
interface ModalProps {
    title: string
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}
export const Modal: React.FC<ModalProps> = ({
    children,
    title,
    description,
    isOpen,
    onClose

}) => {

    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}