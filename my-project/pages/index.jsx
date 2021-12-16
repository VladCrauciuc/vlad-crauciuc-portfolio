import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <div className="container mx-auto">
    <div className='container h-64 mx-auto flex justify-center items-end *bg-red-500'>
      <ul className='flex'>
        <li className='mr-8'>
          <Link href='/about'>
            <a className='menu-link' id='aboutLink'>About</a>
          </Link>
        </li>
        <li className='mr-8'>
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

    </div>

      <section className="container bg-red-500 h-96 flex justify-center items-center" id='about'>
        <span>This is the About section</span>
      </section >
      <section className="container bg-blue-800 h-96 flex justify-center items-center" id='portfolio'>
        <span>This is the Portfolio section</span>
      </section >
      <section className="container bg-green-800 h-96 flex justify-center items-center" id='contact'>
        <span>This is the contact section</span>
      </section >

      <section className='bg-slate-600 flex justify-center items-center text-white mb-8'> 
        <Link href='/'>
          <a id='back2Top' className='py-2'>Back to top</a>
        </Link>
      </section>

      <Script id='script' src='/js/script.js'></Script>
    </div>
  )
}
