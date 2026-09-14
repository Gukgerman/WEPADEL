import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const url = process.argv[2] || "https://we-are-padel.ru/";
const outDir = process.argv[3] || "shots-ref";
const widths = [1440, 768, 390];
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();

for (const width of widths) {
  await page.setViewport({ width, height: 900 });
  await page.goto(url, { waitUntil: "load", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));
  const height = await page.evaluate(async () => {
    const step = Math.max(400, window.innerHeight);
    let y = 0;
    const max = document.documentElement.scrollHeight;
    while (y < max) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 150));
      y += step;
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 200));
    return document.documentElement.scrollHeight;
  });
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({ path: `${outDir}/ref-${width}.png`, fullPage: true });
  console.log(`shot ${width} done, height=${height}`);
}

await browser.close();
