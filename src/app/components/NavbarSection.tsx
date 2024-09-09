import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface NavbarSectionProps {
    imageSrc: StaticImageData,
    altText: string,
    width: number,
    height: number,
    text: string,
    redirectUrl: string
}

// TODO: Include prop for where what page the link should redirect to
export default function NavbarSection({imageSrc, altText, width, height, text, redirectUrl} : NavbarSectionProps) {
    return (
        <Link href={redirectUrl} className='flex pt-3 pb-3 hover:bg-color-surface-300'>
            <Image src={imageSrc} alt={altText} width={width} height={height}></Image>
            <span className='mt-3 ml-3'>{text}</span>
        </Link>
    )
}





{/* <Link href='#' className='flex pt-3 pb-3 hover:bg-color-surface-300'>
                <Image src={homeIcon} alt='home-icon' width={48} height={48}></Image>
                <span className='mt-3 ml-3'>Home</span>    
</Link> */}