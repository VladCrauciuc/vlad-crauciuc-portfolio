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
          className="my-10 sm:my-16 px-5 sm:px-0 flex flex-col justify-center items-center text-center gap-4"
          id="intro"
        >
          <span className="text-white text-6xl sm:text-8xl font-light ">
            Hello there.
          </span>
          <span className="text-white text-4xl sm:text-8xl font-light">
            My name is <span className="font-semibold">Vlad</span>.
          </span>
          <span className="text-white text-4xl font-light mt-4">
            I&apos;m a graphic designer and web developer.
          </span>
        </section>

        {/* ---about */}
        <section
          className="pt-20 flex justify-center items-center mb-16 text-white"
          id="about"
        >
          <div className="flex flex-col items-center xl:justify-center text-center xl:text-left xl:flex-row text-lg">
            {/* picture */}
            <div className="picture-container bg-[url('/images/my-image.jpg')] bg-contain mr-0 xl:mr-8 mb-8 xl:mb-0"></div>
            {/* about text */}
            <section className="flex flex-col w-11/12 xl:w-3/5">
              <span className="mb-8">
                That&apos;s me, in all my sideview glory. I&apos;m Vlad, 31
                years old, from Bucharest, Romania.
              </span>
              <span className="mb-8">
                I&apos;m a graphic designer with almost 10 years of experience,
                and recently added web development to my set of skills. When not
                designing silly things or learning, I engage in miniature
                painting... which is also a kind of design (food for thought).
              </span>
              <section className="flex flex-col">
                <span className="mb-8">
                  As for software and technologies, these are the ones I
                  currently use:
                </span>
                <div className="flex justify-between gap-4 flex-wrap">
                  <div className="w-16 h-16">
                    <Image
                      alt="Adobe PHOTOSHOP"
                      src="/images/photoshop-logo.png"
                      width={1}
                      height={1}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-16 h-16">
                    <Image
                      alt="Adobe Illustrator"
                      src="/images/illustrator-logo.png"
                      width={1}
                      height={1}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-16 h-16">
                    <Image
                      alt="HTML5"
                      src="/images/html5-logo.png"
                      width={1}
                      height={1}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-16 h-16">
                    <Image
                      alt="CSS3"
                      src="/images/css3-logo.png"
                      width={1}
                      height={1}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-16 h-16">
                    <Image
                      alt="SASS"
                      src="/images/sass-logo.png"
                      width={1}
                      height={1}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-16 h-16">
                    <Image
                      alt="Javascript"
                      src="/images/javascript-logo.png"
                      width={1}
                      height={1}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-16 h-16">
                    <Image
                      alt="NextJS"
                      src="/images/nextjs-logo.png"
                      width={1}
                      height={1}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-16 h-16">
                    <Image
                      alt="Github"
                      src="/images/github-logo.png"
                      width={1}
                      height={1}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>

        {/* ---portfolio */}
        <section
          className="border-2 border-blue-800 flex flex-col justify-center items-center mb-16 text-white"
          id="portfolio"
        >
          <span className="pt-20 text-5xl mb-8">Portfolio</span>
          <section className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
            <div className="w-80 h-80 rounded-lg relative bg-white bg-[url('/images/bootstrap-rng.png')] bg-cover bg-center">
              <div className="opacity-0 hover:opacity-90 bg-slate-900 absolute inset-0 duration-200 flex flex-col items-center justify-between">
                <span className="text-xl mt-8">Random Number Generator</span>
                <Link href="https://bootstrap-rng.netlify.app/">
                  <a
                    className="mb-8 py-2 px-4 text-xl font-semibold text-slate-900 bg-white"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    Go to project
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </section>

        {/* contact */}
        <section
          className="border-2 border-green-800 h-screen flex justify-center items-center text-white"
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
