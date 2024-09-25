import Link from 'next/link'
import Image from 'next/image'
import menuIcon from '../../../public/menu_icon.png'
import homeIcon from '../../../public/home_icon.png'
import accountIcon from '../../../public/account_icon.png'
import bookmarkIcon from '../../../public/bookmark_icon.png'
import NavbarSection from './NavbarSection'

export default function Navbar() {
    return (
        <nav className='bg-color-surface-400 flex flex-col min-w-48'>
            {/* Menu icon can be clicked to expand options / give text for icons */}
            <Image src={menuIcon} alt='menu-icon' width={48} height={48}></Image>
            <NavbarSection imageSrc={homeIcon} altText='home-icon' width={48} height={48} text='Home' redirectUrl='/'></NavbarSection>
            <NavbarSection imageSrc={accountIcon} altText='account-icon' width={48} height={48} text='Account' redirectUrl='/login'></NavbarSection>
            <NavbarSection imageSrc={bookmarkIcon} altText='bookmark-icon' width={48} height={48} text='Bookmarks' redirectUrl='/bookmark'></NavbarSection>
    
            <Link href="/register" className='bg-color-surface-300 rounded-lg mr-8 p-2.5'>Sign up</Link>
            <Link href="/register" className='bg-color-surface-300 rounded-lg mr-8 p-2.5'>Log in</Link>
        </nav>
    )
}