import Link from 'next/link'
import Event from '@/app/components/Event'

export default function Home() {
  return (
    <>
      <h1 className='text-5xl'>Pokemon Events In Your Area</h1>
      <Link href="/register" className='bg-color-surface-300 m-4'>Sign up</Link>
      <Link href="/register" className='bg-color-surface-300'>Log in</Link>
      <Event eventName='Good Games Central Pokemon VGC League Challenge - August' date={new Date(2024, 8, 25)} location='
857 George St, Ultimo, NSW, AU' eventType='VGC'></Event>
    </>
    
  );
}
