const { test, expect, firefox } = require('@playwright/test');

test('basic test in Firefox', async () => {
  // Spuštění Firefoxu
  const browser = await firefox.launch({
    headless: false // Pro zobrazení prohlížeče (ne v headless režimu)
  });

  // Otevření nové stránky
  const context = await browser.newContext();
  const page = await context.newPage();

  // Maximalizace okna (nastavení viewportu na rozměry 1920x1080)
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Otevření stránky
  await page.goto('https://example.com');

  // Ověření titulu stránky
  const title = await page.title();
  expect(title).toBe('Example Domain');

  // Vyhledání textu na stránce
  const content = await page.textContent('h1');
  expect(content).toBe('Example Domain');

  // Počkejte 10 sekund (10 000 milisekund)
  await page.waitForTimeout(10000);

  // Zavření prohlížeče
  await browser.close();
});
