import Link from 'next/link'
import Image from 'next/image'
import menuIcon from '../../../public/menu_24dp.svg'

export default function Navbar() {
    return (
        <nav className='bg-color-surface-400 p-5 flex flex-col'>
            <Image src={menuIcon} alt='menu-icon'></Image>
            <Link href="/register" className='bg-color-surface-300 rounded-lg mr-8 p-2.5'>Sign up</Link>
            <Link href="/register" className='bg-color-surface-300 rounded-lg mr-8 p-2.5'>Log in</Link>
        </nav>
    )
}