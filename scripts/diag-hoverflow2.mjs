import puppeteer from "puppeteer-core";
const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const PORT = 3003;
const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, args: ["--no-sandbox"] });

for (const width of [320, 360, 375, 390, 393, 414, 430]) {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: "load", timeout: 30000 });
  await new Promise(r => setTimeout(r, 800));

  const result = await page.evaluate(() => {
    const overflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    const bodyOverflow = document.body.scrollWidth - document.body.clientWidth;
    return { overflow, bodyOverflow };
  });
  console.log(width, JSON.stringify(result));
  await page.close();
}
await browser.close();
