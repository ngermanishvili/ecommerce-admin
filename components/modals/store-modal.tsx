"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal";


export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="create store"
            description="create a store to sell your products"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future create store form
        </Modal >
    )
}