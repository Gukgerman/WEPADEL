import puppeteer from "puppeteer-core";
const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 1000, deviceScaleFactor: 1 });
await page.goto("http://localhost:3010/", { waitUntil: "load", timeout: 20000 });
const info = await page.evaluate(() => {
  const toObj = (r) => r ? { x: r.x, y: r.y, width: r.width, height: r.height } : null;
  const sel = (s) => { const el = document.querySelector(s); return el ? toObj(el.getBoundingClientRect()) : null; };
  return {
    footerBody: sel(".footer__body"),
    mobileCluster: sel(".footer__mobile-cluster"),
    decor: sel(".footer__decor"),
    gallery: sel(".footer__gallery"),
    galleryPhoto: sel(".footer__collage-photo--gallery"),
    tagline: sel(".footer__tagline--right"),
    banner: sel(".footer__banner"),
    bannerButton: sel(".footer__banner-button"),
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
