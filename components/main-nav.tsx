"use client"
import { useParams, usePathname } from 'next/navigation'


import { cn } from '@/lib/utils'
import Link from 'next/link';

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/${params.storeId}`,
            label: 'მთავარი ',
            active: pathname === `/${params.storeId}`
        },

        {
            href: `/${params.storeId}/billboards`,
            label: 'ბილბორდი',
            active: pathname === `/${params.storeId}/billboards`
        },


        {
            href: `/${params.storeId}/categories`,
            label: 'კატეგორია',
            active: pathname === `/${params.storeId}/categories`
        },
        {
            href: `/${params.storeId}/shipments/new`,
            label: 'შეკვეთების განთავსება',
            active: pathname === `/${params.storeId}/shipments/new`
        },

        {
            href: `/${params.storeId}/shipments`,
            label: 'შეკვეთების ისტორია  ',
            active: pathname === `/${params.storeId}/shipments`
        },
    ]

    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
            {routes.map((route) => (
                <Link key={route.href} href={route.href} prefetch={false} className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    route.active ? "text-black dark:text-white" : "text-muted-foreground"

                )}>

                    {route.label}
                </Link>
            )
            )
            }
        </nav >
    )
};