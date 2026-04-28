const { test } = require("@playwright/test");

test("inspect robot spline", async ({ page }) => {
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.locator("#robot-showcase").scrollIntoViewIfNeeded();
  await page.waitForTimeout(18000);

  const info = await page.evaluate(() => {
    const app = window.__robotSplineApp;
    const canvas = document.querySelector("#robot-showcase canvas");
    const section = document.querySelector("#robot-showcase");

    return {
      hasApp: Boolean(app),
      canvasRect: canvas?.getBoundingClientRect().toJSON?.() ?? null,
      sectionRect: section?.getBoundingClientRect().toJSON?.() ?? null,
      objects:
        app
          ?.getAllObjects()
          ?.slice(0, 120)
          .map((object) => ({
            name: object.name,
            uuid: object.uuid,
            visible: object.visible,
            position: object.position,
            rotation: object.rotation,
            scale: object.scale,
          })) ?? [],
    };
  });

  console.log(JSON.stringify(info, null, 2));
});
