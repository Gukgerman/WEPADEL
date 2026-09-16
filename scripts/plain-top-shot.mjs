import puppeteer from "puppeteer-core";
const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.setViewport({ width: 1100, height: 900, deviceScaleFactor: 1 });
await page.goto("http://localhost:3003/", { waitUntil: "load", timeout: 20000 });
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: "C:/Users/suxxx/AppData/Local/Temp/plain-top.png" });
const rect = await page.evaluate(() => {
  const hero = document.querySelector(".hero");
  const r = hero.getBoundingClientRect();
  return { top: r.top, bottom: r.bottom, height: r.height, scrollY: window.scrollY, bodyHeight: document.body.scrollHeight };
});
console.log(JSON.stringify(rect));
await browser.close();
