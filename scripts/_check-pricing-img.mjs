import puppeteer from "puppeteer-core";
const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
page.on("console", (msg) => console.log("PAGE:", msg.text()));
page.on("pageerror", (err) => console.log("PAGEERROR:", err.message));
page.on("requestfailed", (req) => console.log("FAILED:", req.url(), req.failure()?.errorText));
await page.setViewport({ width: 390, height: 1000, deviceScaleFactor: 1 });
await page.goto("http://localhost:3003/", { waitUntil: "networkidle0", timeout: 20000 });
await page.evaluate(async () => {
  const el = document.querySelector(".pricing");
  el.scrollIntoView();
  await new Promise(r => setTimeout(r, 500));
});
const info = await page.evaluate(() => {
  const imgs = Array.from(document.querySelectorAll(".pricing__media img"));
  return imgs.map(img => ({
    src: img.currentSrc || img.src,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
    displayW: img.getBoundingClientRect().width,
    displayH: img.getBoundingClientRect().height,
    parentClass: img.closest(".pricing__media").className,
    parentDisplay: getComputedStyle(img.closest(".pricing__media")).display,
  }));
});
console.log(JSON.stringify(info, null, 2));
await page.screenshot({ path: "C:/Users/suxxx/AppData/Local/Temp/pricing-check.png", clip: await page.evaluate(() => {
  const r = document.querySelector(".pricing").getBoundingClientRect();
  return { x: 0, y: r.top, width: 390, height: Math.min(r.height, 3000) };
}) });
await browser.close();
