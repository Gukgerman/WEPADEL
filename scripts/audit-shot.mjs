import puppeteer from "puppeteer-core";
const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const [, , width] = process.argv;
const w = Number(width);
const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.setViewport({ width: w, height: 1000, deviceScaleFactor: 1 });
await page.goto("http://localhost:3003/", { waitUntil: "load", timeout: 20000 });
await page.evaluate(async () => {
  const total = document.body.scrollHeight;
  for (let y = 0; y < total; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); }
  window.scrollTo(0, 0);
});
await new Promise(r => setTimeout(r, 400));
const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
console.log(w, "overflow:", overflow);
await page.screenshot({ path: `C:/Users/suxxx/AppData/Local/Temp/audit-${w}.png`, fullPage: true });
console.log("saved audit-" + w + ".png");
await browser.close();
