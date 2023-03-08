const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

function links () {
  const links = document.querySelectorAll('nav a');
  const linksArr = Array.from(links);
  const newLinks = Object.values(siteContent.nav);
  for(let i = 0; i < linksArr.length; i++) {
    linksArr[i].textContent = newLinks[i];
    linksArr[i].classList.add('italic');
  }
}
links();

function logo () {
  const logo = document.querySelector('#logo-img');
  logo.src = siteContent.images["logo-img"];
}
logo();

function cta () {
  const h1 = document.querySelector('.cta h1');
  h1.textContent = siteContent.cta["h1"];
  const button = document.querySelector('.cta button');
  button.textContent = siteContent.cta["button"];
  const img = document.querySelector('.cta img');
  img.src = siteContent.images["cta-img"];
}
cta();

function mainContent () {
  const mainContentHeadings = Object.keys(siteContent["main-content"]).
    filter((key) => key.includes('h4')).
    reduce((cur, key) => { return Object.assign(cur, { [key]: siteContent["main-content"][key] }); }, {});
  const mainContentText = Object.keys(siteContent["main-content"]).
    filter((key) => key.includes('content')).
    reduce((cur, key) => { return Object.assign(cur, { [key]: siteContent["main-content"][key] }); }, {});
  
  const item = document.querySelectorAll('.text-content');
  const itemArr = Array.from(item);
  for(let i = 0; i < itemArr.length; i++) {
    const h4 = itemArr[i].querySelector('h4');
    h4.textContent = Object.values(mainContentHeadings)[i];
    const p = itemArr[i].querySelector('p');
    p.textContent = Object.values(mainContentText)[i];
  }
}
mainContent();

function middleImg () {
  const img = document.querySelector('.middle-img');
  img.src = siteContent.images["accent-img"];
}
middleImg();

function contact () {
  const h4 = document.querySelector('.contact h4');
  h4.textContent = siteContent.contact["contact-h4"];
  const address = document.querySelector('.contact p:nth-of-type(1)');
  address.textContent = siteContent.contact["address"];
  const phone = document.querySelector('.contact p:nth-of-type(2)');
  phone.textContent = siteContent.contact["phone"];
  const email = document.querySelector('.contact p:nth-of-type(3)');
  email.textContent = siteContent.contact["email"];
}
contact();

function copyright () {
  const copyright = document.querySelector('footer a');
  copyright.textContent = siteContent.footer["copyright"];
  copyright.classList.add('bold');
}
copyright();