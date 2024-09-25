import Link from 'next/link'

export default function RegisterPage() {
    return (
        <>
            <h1>This is the register route!</h1>
            <Link href="/register" className='bg-color-surface-300 rounded-lg mr-8 p-2.5'>Sign up</Link>
        </>
        
    )
}