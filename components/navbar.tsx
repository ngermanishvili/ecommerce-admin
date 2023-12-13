import { redirect } from 'next/navigation';

import { MainNav } from '@/components/main-nav';
import StoreSwitcher from '@/components/store-switcher';

import prismadb from '@/lib/prismadb';
const Navbar = async () => {

    // if (!userId) {
    //     redirect('/sign-in')
    // }

    return (
        <div className='border-b'>
            <div className='flex h-16 items-center px-4'>
                <MainNav className='mx-6' />
                <div className='ml-auto flex items-center space-x-4'>
                </div>
            </div>
        </div>
    )
}

export default Navbar