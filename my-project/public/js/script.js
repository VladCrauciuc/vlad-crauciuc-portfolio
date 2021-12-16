console.log('Script is seen and working');

const aboutLink = document.getElementById('aboutLink');
const portfolioLink = document.getElementById('portfolioLink');
const contactLink = document.getElementById('contactLink');
const back2Top = document.getElementById('back2Top')

const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');

aboutLink.addEventListener('click', (e) => {
    e.preventDefault()
    about.scrollIntoView({block: "center"});
    console.log('Scrolled to About');
})
portfolioLink.addEventListener('click', (e) => {
    e.preventDefault()
    portfolio.scrollIntoView({block: "center"});
    console.log('Scrolled to Portfolio');
})
contactLink.addEventListener('click', (e) => {
    e.preventDefault()
    contact.scrollIntoView({block: "center"});
    console.log('Scrolled to Contact');
})
back2Top.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo(0,0);
    console.log('Scrolled to Top');
})