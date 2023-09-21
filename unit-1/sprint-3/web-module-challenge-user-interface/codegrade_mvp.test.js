import { fireEvent, getByText, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fail } from 'assert';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let window;
let container;

describe('index.html', () => {
    beforeEach(() => {
        // Constructing a new JSDOM with this option is the key
        // to getting the code in the script tag to execute.
        // This is indeed dangerous and should only be done with trusted content.
        // https://github.com/jsdom/jsdom#executing-scripts
        // , resources: 'usable'
        dom = new JSDOM(html, { runScripts: 'dangerously' });
        window = dom.window;
        container = dom.window.document.body;
    });

    it('renders with an external stylesheet', () => {
        const cssLinkTag = dom.window.document.head.querySelector('link[rel="stylesheet"]');
        expect(cssLinkTag).toBeInTheDocument();
    });

    it('renders a header title', () => {
        const headerTitle = container.querySelector('h1').innerHTML;
        const regex = /Sweet Eats Bakery/i;
        expect(headerTitle).toMatch(regex);
    });

    it('renders the correct five links in header nav', () => {
        const headerNavLinks = Array.from(container.querySelectorAll('header nav a'));
        expect(headerNavLinks.length).toBe(5);

        expect(headerNavLinks[0].innerHTML).toMatch(/About/i);
        expect(headerNavLinks[1].innerHTML).toMatch(/Cookies/i);
        expect(headerNavLinks[2].innerHTML).toMatch(/Celebrations/i);
        expect(headerNavLinks[3].innerHTML).toMatch(/Catering/i);
        expect(headerNavLinks[4].innerHTML).toMatch(/Contact/i);
    });

    it('the five header nav links have an href property set to an id value', () => {
        const headerNavLinks = Array.from(container.querySelectorAll('header nav a'));

        expect(headerNavLinks[0].href.includes('#about')).toEqual(true);
        expect(headerNavLinks[1].href.includes('#cookies')).toEqual(true);
        expect(headerNavLinks[2].href.includes('#celebrations')).toEqual(true);
        expect(headerNavLinks[3].href.includes('#catering')).toEqual(true);
        expect(headerNavLinks[4].href.includes('#contact')).toEqual(true);
    });

    it('renders the correct five subheading h2s', () => {
        const h2Arr = Array.from(container.querySelectorAll('h2'));
        expect(h2Arr.length).toBe(5);

        expect(getByText(h2Arr[0], /About Sweet Eats Bakery/i)).toBeInTheDocument();
        expect(getByText(h2Arr[1], /Cookies/i)).toBeInTheDocument();
        expect(getByText(h2Arr[2], /Celebrations/i)).toBeInTheDocument();
        expect(getByText(h2Arr[3], /Catering/i)).toBeInTheDocument();
        expect(getByText(h2Arr[4], /Contact Us/i)).toBeInTheDocument();
    });

    it('renders the correct four images in body', () => {
        const expectedImgSrcsArr = [
            "https://tk-assets.lambdaschool.com/bcf76f62-2431-4c22-b466-2e711f3da2b9_ui-i-bakery-main-header.png",
            "https://tk-assets.lambdaschool.com/297378d6-9c89-430f-9d2e-46ae3d5edce8_ui-i-bakery-cupcake-i.png",
            "https://tk-assets.lambdaschool.com/7393a8fd-c8e5-4003-921f-79e0d546d02c_ui-i-bakery-cookies.png", 
            "https://tk-assets.lambdaschool.com/ab0cb095-5900-476c-b042-aea065d3dbbf_ui-i-bakery-celebrate.png"
        ];
        const allImages = Array.from(container.querySelectorAll('img'));
        const allImageSrcs = allImages.map(img => img.src)

        expect(allImages.length).toBe(4);
        expect(allImageSrcs).toEqual(expect.arrayContaining(expectedImgSrcsArr));
    });

    it('renders with 5 semantic section tags', () => {
        const sectionTags = Array.from(container.querySelectorAll('section'));
        expect(sectionTags.length).toBe(5);
    });

    it('renders with at least 4 semantic p tags', () => {
        const pElements = Array.from(container.querySelectorAll('p'));
        expect(pElements.length).toBeGreaterThanOrEqual(4);
    });

    it('renders with semantic address tag', () => {
        const addressTag = container.querySelector('address');
        expect(addressTag).toBeInTheDocument();
    });

    it('renders with semantic h3 tag in the footer', () => {
        const h3Tag = container.querySelector('footer h3');
        expect(h3Tag).toBeInTheDocument();
    });
    
    it('renders the correct five links in footer nav', () => {
        const footerNavLinks = Array.from(container.querySelectorAll('footer nav a'));
        expect(footerNavLinks.length).toBe(5);

        expect(footerNavLinks[0].innerHTML).toMatch(/About/i);
        expect(footerNavLinks[1].innerHTML).toMatch(/Cookies/i);
        expect(footerNavLinks[2].innerHTML).toMatch(/Celebrations/i);
        expect(footerNavLinks[3].innerHTML).toMatch(/Catering/i);
        expect(footerNavLinks[4].innerHTML).toMatch(/Contact/i);
    });
    
    it('the five footer nav links have an href property set to an id value', () => {
        const footerNavLinks = Array.from(container.querySelectorAll('footer nav a'));

        expect(footerNavLinks[0].href.includes('#about')).toEqual(true);
        expect(footerNavLinks[1].href.includes('#cookies')).toEqual(true);
        expect(footerNavLinks[2].href.includes('#celebrations')).toEqual(true);
        expect(footerNavLinks[3].href.includes('#catering')).toEqual(true);
        expect(footerNavLinks[4].href.includes('#contact')).toEqual(true);
    });
});
