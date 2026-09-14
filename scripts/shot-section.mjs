import puppeteer from "puppeteer-core";

const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const [, , selector, outPath, widthArg] = process.argv;
const width = Number(widthArg) || 1440;

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 });
await page.goto("http://localhost:3003/", { waitUntil: "load", timeout: 30000 });
await new Promise((r) => setTimeout(r, 600));

const el = await page.$(selector);
if (!el) {
  console.log("NOT FOUND:", selector);
} else {
  await el.screenshot({ path: outPath });
  console.log("saved", outPath);
}

// also report natural size of any <img>/<Image> inside
const info = await page.evaluate((sel) => {
  const root = document.querySelector(sel);
  if (!root) return null;
  return [...root.querySelectorAll("img")].map((img) => ({
    src: img.currentSrc || img.src,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
    clientWidth: img.clientWidth,
    clientHeight: img.clientHeight,
    complete: img.complete,
  }));
}, selector);
console.log(JSON.stringify(info, null, 2));

await browser.close();
