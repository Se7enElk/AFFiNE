import type { Page } from '@playwright/test';

export async function clickCollaborationPanel(page: Page) {
  await page.click('[data-tab-key="collaboration"]');
}
