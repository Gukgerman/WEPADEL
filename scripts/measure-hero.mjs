import puppeteer from "puppeteer-core";
const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 1000, deviceScaleFactor: 1 });
await page.goto("http://localhost:3010/", { waitUntil: "load", timeout: 20000 });
const rect = await page.evaluate(() => {
  const el = document.querySelector(".hero__content");
  const r = el.getBoundingClientRect();
  const cs = getComputedStyle(el);
  return { width: r.width, height: r.height, paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom };
});
console.log(rect);
await browser.close();
