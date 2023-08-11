const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Hey! Happy to have ya!!");

//NAV LINKS
const links = document.querySelectorAll("nav a");
const linkText = Object.values(siteContent.nav);

links.forEach((link, idx) => {
  link.textContent = linkText[idx];
  link.classList.add("italic");
});

//LARGE CONTENT

const cta = document.querySelector(".cta");
const ctaHeader = cta.querySelector("h1");

ctaHeader.textContent = siteContent["cta"]["h1"];

const ctaButton = cta.querySelector("button");

ctaButton.textContent = siteContent["cta"]["button"];

//IMAGES
const logoImg = document.querySelector("#logo-img");
const ctaImg = document.querySelector("#cta-img");
const accentImg = document.querySelector("#middle-img");

logoImg.src = "http://localhost:9000/img/logo.png";
ctaImg.src = "http://localhost:9000/img/cta.png";
accentImg.src = "http://localhost:9000/img/accent.png";

//TOP CONTENT
const topContent = document.querySelector(".top-content");

const features = topContent.querySelector(".text-content:nth-of-type(1)");
features.querySelector("h4").textContent =
  siteContent["main-content"]["features-h4"];
features.querySelector("p").textContent =
  siteContent["main-content"]["features-content"];

const about = topContent.querySelector(".text-content:nth-of-type(2)");
about.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
about.querySelector("p").textContent = siteContent['main-content']['about-content'];

//BOTTOM CONTENT
const bottomContent = document.querySelector('.bottom-content');

const services = bottomContent.querySelector('.text-content:nth-of-type(1)')
services.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
services.querySelector('p').textContent = siteContent['main-content']['services-content'];

const product = bottomContent.querySelector('.text-content:nth-of-type(2)')
product.querySelector('h4').textContent = siteContent['main-content']['product-h4'];
product.querySelector('p').textContent = siteContent['main-content']['product-content'];

const vision = bottomContent.querySelector('.text-content:nth-of-type(3)');
vision.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
vision.querySelector('p').textContent = siteContent['main-content']['vision-content'];

//CONTACT
const contact = document.querySelector('.contact');
const contactHeading = contact.querySelector('h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

const address = contact.querySelector('p');
address.textContent = siteContent['contact']['address'];

const phone = contact.querySelector('p:nth-of-type(2)')
phone.textContent = siteContent['contact']['phone'];

contact.children[3].textContent = siteContent['contact']['email'];

//FOOTER  
const footLink = document.querySelector('footer a');
footLink.className = 'bold';
footLink.textContent = siteContent['footer']['copyright'];
