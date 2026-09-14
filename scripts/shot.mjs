import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CHROME_PATH =
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";

const widths = [1440, 1280, 1024, 768, 430, 390, 360];
const outDir = process.argv[2] || "shots";
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ["--no-sandbox", "--force-color-profile=srgb"],
});

const page = await browser.newPage();
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "reduce" },
]);
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

for (const width of widths) {
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3003/", { waitUntil: "load", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 400));

  // scroll all the way down in steps so native lazy-loaded images actually fetch
  const height = await page.evaluate(async () => {
    const step = Math.max(400, window.innerHeight);
    let y = 0;
    const max = document.documentElement.scrollHeight;
    while (y < max) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
      y += step;
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 150));
    return document.documentElement.scrollHeight;
  });
  await new Promise((r) => setTimeout(r, 400));

  await page.screenshot({ path: `${outDir}/full-${width}.png`, fullPage: true });
  console.log(`shot ${width} done, height=${height}`);
}

fs.writeFileSync(`${outDir}/console-errors.json`, JSON.stringify(errors, null, 2));
console.log("errors:", errors.length);

await browser.close();
