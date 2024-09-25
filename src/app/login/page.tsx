import Link from 'next/link'

export default function LoginPage() {
    return (
    <div>
        <h1>Log In</h1>
        {/* <form>

        </form> */}
        <Link href="/register" className='bg-color-surface-300 rounded-lg mr-8 p-2.5'>Log in</Link>
    </div>
    )
}