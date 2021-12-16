import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <>
    <nav className='flex justify-center sm:justify-end bg-white/10 sm:bg-white/0 landscape:bg-white/0 sticky top-0 w-full'>
      <ul className='flex mt-4 sm:mr-8 border-b-2'>
        <li className='mr-4'>
          <Link href='/'>
            <a className='menu-link' id='aboutLink'>About</a>
          </Link>
        </li>
        <li className='mr-4'>
          <Link href='/'>
            <a className='menu-link' id='portfolioLink'>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className='menu-link' id='contactLink'>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
    <div className="container mx-auto">
    

      <section className="container border-2 border-red-500 h-screen flex justify-center items-center mt-32 mb-4 text-white" id='about'>
        <span>This is the About section</span>
      </section >
      <section className="container border-2 border-blue-800 h-screen flex justify-center items-center mb-4 text-white" id='portfolio'>
        <span>This is the Portfolio section</span>
      </section >
      <section className="container border-2 border-green-800 h-screen flex justify-center items-center text-white" id='contact'>
        <span>This is the contact section</span>
      </section >

      <section className='bg-slate-700 flex justify-center items-center text-white mb-8'> 
        <Link href='/'>
          <a id='back2Top' className='py-2'>Back to top</a>
        </Link>
      </section>

      <Script id='script' src='/js/script.js' strategy='afterInteractive'></Script>
    </div>
    </>
  )
}
