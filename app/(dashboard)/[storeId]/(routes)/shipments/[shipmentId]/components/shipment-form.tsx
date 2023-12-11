"use client"

import * as z from 'zod';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Shipment } from "@prisma/client"
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';


import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from '@/components/ui/input';
import { AlertModal } from '@/components/modals/alert-modal';

const formSchema = z.object({
    name: z.string().min(1),
    lastName: z.string().min(1),
    city: z.string().min(1),
    address: z.string().min(1),
    phoneNumber: z.string().min(1),
    price: z.string().min(1),
    brittle: z.string().min(1),
})

// This ShipmentFormValues is for the formik form values type definition.
type ShipmentFormValues = z.infer<typeof formSchema>

interface ShipmentFormProps {
    initialData: Shipment | null;
}



export const ShipmentForm: React.FC<ShipmentFormProps> = ({
    initialData
}) => {
    const router = useRouter();
    const params = useParams();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? "Edit Shipment" : "Create Shipment";
    const description = initialData ? "Edit a Shipment" : "Add a new Shipment";
    const toastMessage = initialData ? "Shipment updated." : "Shipment created";
    const action = initialData ? "Save changes" : "Create";

    const form = useForm<ShipmentFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            name: '',
            lastName: '',
            city: '',
            address: '',
            phoneNumber: '',
            price: '',
            brittle: '',
        }
    })

    const onSubmit = async (data: ShipmentFormValues) => {
        try {
            setLoading(true);
            if (initialData) {
                await axios.patch(`/api/${params.storeId}/shipments/${params.shipmentId}`, data)
            } else {
                await axios.post(`/api/${params.storeId}/shipments`, data)

            }
            router.refresh();
            router.push(`/${params.storeId}/shipments`);
            toast.success(toastMessage)
        } catch (error) {
            toast.error("Something went wrong.")

        } finally {
            setLoading(false)
        }
    }

    const onDelete = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/${params.storeId}/shipments/${params.shipmentId}}`)
            router.refresh();
            router.push(`/${params.storeId}/shipments`);
            toast.success('Shipment deleted.')

        } catch (error) {
            toast.error('Make sure you removed all products using this shipment first.')
        } finally {
            setLoading(false)
            setOpen(false)
        }
    }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />
            <div className="flex items-center justify-between">
                <Heading
                    title={title}
                    description={description}
                />
                {initialData && (
                    <Button
                        disabled={loading}
                        variant='destructive'
                        size='icon'
                        onClick={() => {
                            setOpen(true)
                        }}
                    >
                        <Trash className="h-4 w-4"
                        />
                    </Button>
                )}
            </div>
            <Separator />
            {/* // formik form */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>

                    <div className='grid grid-cols-3 gap-8'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        სახელი
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder='Name' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='lastName'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Last Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder='Last Name ' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='price'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        ფასი
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder='Price ' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='phoneNumber'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        გვარი
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder='Last Name ' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='address'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        მისამართი
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder='address  ' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='city'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        ქალაქი
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder='ქალაქი ' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='brittle'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        მსხვრევადი
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder='..' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button disabled={loading} className='ml-auto' type='submit'>
                        {action}
                    </Button>

                </form>
            </Form>

        </>
    )
}
