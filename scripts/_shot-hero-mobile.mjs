import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CHROME_PATH = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const url = "http://localhost:3010/";
const outDir = process.argv[2] || ".";
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 900 });
await page.goto(url, { waitUntil: "load", timeout: 30000 });
await new Promise((r) => setTimeout(r, 800));

const hero = await page.$("#hero");
await hero.screenshot({ path: `${outDir}/hero-mobile.png` });

await browser.close();
console.log("done");
