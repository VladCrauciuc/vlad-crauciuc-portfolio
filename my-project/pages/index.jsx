import Link from 'next/link';

export default function Home() {
  return (
    <div className='container h-64 mx-auto flex justify-center items-end *bg-red-500'>
      <ul className='flex'>
        <li className='mr-8'>
          <Link href='about'>
            <a className='py-2 px-8 border-b-2 border-sky-800 hover:bg-sky-800 text-white block'>About</a>
          </Link>
        </li>
        <li className='mr-8'>
          <Link href='about'>
            <a className='py-2 px-8 border-b-2 border-sky-800 hover:bg-sky-800 text-white block'>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='about'>
            <a className='py-2 px-8 border-b-2 border-sky-800 hover:bg-sky-800 text-white block'>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
