import Link from 'next/link'
import Event from '@/app/_components/Event'

export default function Home() {
  return (
    <>
      <h1>Testing 123</h1>
      <Link href="/register">Sign up</Link>
      <Link href="/register">Log in</Link>
      <Event eventName='Good Games Central Pokemon VGC League Challenge - August' date={new Date(2024, 8, 25)} location='
857 George St, Ultimo, NSW, AU' eventType='VGC'></Event>
    </>
    
  );
}
