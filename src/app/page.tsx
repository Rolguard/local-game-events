import Link from 'next/link'
import Event from '@/app/components/Event'

export default function Home() {
  return (
    <div className=''>
      {/* TODO: Add tailwind CSS flexbox for skeleton structuring of home page with multiple events */}
      {/* TODO: Navbar with sign up and log in buttons? Or could make vertical nav bar  */}
      {/* TODO: Add hover animation e.g. bubble out effect, change colour to sign up and log in buttons */}
      {/* <div className='self-end mt-6'>
      <Link href="/register" className='bg-color-surface-300 rounded-lg mr-8 p-2.5'>Sign up</Link>
      <Link href="/register" className='bg-color-surface-300 rounded-lg mr-8 p-2.5'>Log in</Link>
      </div> */}
      <h1 className='text-5xl w-fit mb-6 ml-9'>Pokemon Events In Your Area</h1>
      
      <Event eventName='Good Games Central Pokemon VGC League Challenge - August' date={new Date(2024, 8, 25)} location='
857 George St, Ultimo, NSW, AU' eventType='VGC'></Event>
      <Event eventName='RC Crew VGC Q1 Cup' date={new Date(2024, 9, 21)} location='124 ELDRIDGE RD
CONDELL PARK, NSW, AU' eventType='VGC'></Event>
    </div>
  );
}
