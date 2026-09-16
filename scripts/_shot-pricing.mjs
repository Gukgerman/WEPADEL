import puppeteer from "puppeteer-core";
const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 1000, deviceScaleFactor: 1 });
await page.goto("http://localhost:3003/", { waitUntil: "networkidle0", timeout: 20000 });
await page.evaluate(async () => {
  document.querySelector(".pricing").scrollIntoView();
  await new Promise(r => setTimeout(r, 600));
});
const clip = await page.evaluate(() => {
  const r = document.querySelector(".pricing").getBoundingClientRect();
  return { x: 0, y: Math.max(r.top,0), width: 390, height: Math.min(r.height, 2500) };
});
await page.screenshot({ path: "C:/Users/suxxx/AppData/Local/Temp/pricing-section.png", clip });
await browser.close();
