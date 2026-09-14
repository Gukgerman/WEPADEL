import puppeteer from "puppeteer-core";
const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const [, , selector, outPath, widthArg] = process.argv;
const width = Number(widthArg) || 390;
const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
await page.goto("http://localhost:3003/", { waitUntil: "load", timeout: 30000 });
await page.evaluate(async () => {
  const total = document.body.scrollHeight;
  for (let y = 0; y < total; y += 300) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 400));
await page.addStyleTag({ content: ".back-to-top,.sticky-header{display:none!important;}" });
await new Promise((r) => setTimeout(r, 150));
const el = await page.$(selector);
await el.screenshot({ path: outPath });
console.log("saved", outPath);
await browser.close();
