import Link from 'next/link';

export default function Home() {
  return (
    <div className='container bg-slate-500 h-96 mx-auto'>
      <ul className='flex'>
        <li className='mt-3 mx-3'>
          <Link href='about'>
            <a className='py-2 px-4 bg-sky-500 hover:bg-sky-600 text-white'>About</a>
          </Link>
        </li>
        <li className='mt-3 mr-3'>
          <Link href='about'>
            <a className='py-2 px-4 bg-sky-500 hover:bg-sky-600 text-white'>Portfolio</a>
          </Link>
        </li>
        <li className='mt-3'>
          <Link href='about'>
            <a className='py-2 px-4 bg-sky-500 hover:bg-sky-600 text-white'>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
