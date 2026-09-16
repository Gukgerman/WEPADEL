import puppeteer from "puppeteer-core";
const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
for (const w of [360, 375, 390, 414, 430]) {
  await page.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3003/", { waitUntil: "load", timeout: 20000 });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log(w, "overflow:", overflow);
}
await browser.close();
