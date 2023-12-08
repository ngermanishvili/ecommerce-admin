"use client"

import * as z from 'zod';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Trash } from "lucide-react";
import { set, useForm } from "react-hook-form";
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
import { ApiAlert } from '@/components/ui/api-alert';
import { useOrigin } from '@/hooks/use-origin';



interface SettingsFormProps {
}

const formSchema = z.object({
	name: z.string().min(1)
})
// This SettingsFormValues is for the formik form values type definition.
type SettingsFormValues = z.infer<typeof formSchema>


export const SettingsForm: React.FC<SettingsFormProps> = ({
}) => {
	const router = useRouter();
	const params = useParams();
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const origin = useOrigin();

	const form = useForm<SettingsFormValues>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit = async (data: SettingsFormValues) => {
		try {
			setLoading(true);
			await axios.patch(`/api/stores/${params.storeId}`, data)
			router.refresh();
			toast.success("Store updated successfully.")
		} catch (error) {
			toast.error("Something went wrong.")

		} finally {
			setLoading(false)
		}
	}

	const onDelete = async () => {
		try {
			setLoading(true)
			await axios.delete(`/api/stores/${params.storeId}`)
			router.refresh();
			router.push('/');
			toast.success('Store deleted successfully.')

		} catch (error) {
			toast.error('Make sure you removed all products and categories first.')
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
					title="Settings"
					description="Manage your store settings"
				/>
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
										Name
									</FormLabel>
									<FormControl>
										<Input disabled={loading} placeholder='Store name' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button disabled={loading} className='ml-auto' type='submit'>
						Save Changes
					</Button>

				</form>
			</Form>
			<Separator />
			<ApiAlert
				title='NEXT_PUBLIC_API_URL'
				description={`${origin}/api/${params.storeId}`}
				variant='public' />

		</>
	)
}
