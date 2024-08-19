import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Testing 123</h1>
      <Link href="/register">Sign up</Link>
      <Link href="/register">Log in</Link>
    </>
    
  );
}
