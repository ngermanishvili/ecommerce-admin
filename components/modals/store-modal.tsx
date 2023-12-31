"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";


import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast"


import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(3).max(255),
})

export const StoreModal = () => {
    const storeModal = useStoreModal();
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            window.location.assign(`/admindashboard`)
        } catch (error) {
            toast.error("Something Went Wrong")
        } finally {
            setLoading(false)
        }

    }

    return (
        <Modal
            title="მოგესალმებით"
            description="გთხოვთ ჩაწერეთ თქვენი სახელი"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <div onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="სახელი..." {...field} />
                                    </FormControl>
                                    <FormMessage />


                                </FormItem>
                            )}
                            />

                            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                <Button
                                    disabled={loading}
                                    variant="outline" onClick={storeModal.onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    disabled={loading}
                                    type="submit">
                                    Continiue
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </Modal >
    )
}