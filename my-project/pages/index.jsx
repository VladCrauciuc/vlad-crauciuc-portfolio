import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className="flex justify-center sm:justify-end bg-white/10 sm:bg-white/0 sticky top-0 w-full">
        <ul className="flex mt-4 sm:mr-8 border-b-2">
          <li className="mr-4">
            <Link href="/">
              <a className="menu-link" id="aboutLink">
                About
              </a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/">
              <a className="menu-link" id="portfolioLink">
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="menu-link" id="contactLink">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* ---container */}
      <div className="container mx-auto">
        {/* ---intro */}
        <section
          className="my-10 sm:my-16 px-5 sm:px-0 flex flex-col justify-center items-center text-center *bg-sky-500 gap-4"
          id="intro"
        >
          <span className="text-white text-6xl sm:text-8xl font-light *bg-orange-400">
            Hello there.
          </span>
          <span className="text-white text-4xl sm:text-8xl font-light *bg-orange-400">
            My name is <span className="font-semibold">Vlad</span>.
          </span>
          <span className="text-white text-4xl font-light mt-4 *bg-orange-400">
            I&apos;m a graphic designer and web developer.
          </span>
        </section>

        {/* ---about */}
        <section
          className="container border-2 border-red-500 pt-20 flex justify-center items-center mb-4 text-white"
          id="about"
        >
          <div className="picture-container bg-[url('/images/my-image.jpg')] bg-contain"></div>

          {/* <div className="w-16 h-16 ml-6 mr-6">
            <Image
              alt="HTML5"
              src="/images/html5-logo.png"
              width={1}
              height={1}
              layout="responsive"
              objectFit="contain"
            />
          </div> */}
        </section>

        {/* ---portfolio */}
        <section
          className="container border-2 border-blue-800 h-screen flex justify-center items-center mb-4 text-white"
          id="portfolio"
        >
          <span>This is the Portfolio section</span>
        </section>

        {/* contact */}
        <section
          className="container border-2 border-green-800 h-screen flex justify-center items-center text-white"
          id="contact"
        >
          <span>This is the contact section</span>
        </section>

        {/* back2Top */}
        <Link href="/">
          <a
            id="back2Top"
            className="py-2 px-4 bg-white/10 text-white fixed bottom-0 right-0"
          >
            Back to top
          </a>
        </Link>

        <Script
          id="script"
          src="/js/script.js"
          strategy="afterInteractive"
        ></Script>
      </div>
    </>
  );
}
