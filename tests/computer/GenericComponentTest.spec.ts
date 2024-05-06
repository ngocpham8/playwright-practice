import { test } from '@playwright/test'
import ComputerDetailPage from '../../models/pages/ComputerDetailPage';
import StandardComputerComponent from '../../models/components/computer/StandardComputerComponent';
import CheapComputerComponent from '../../models/components/computer/CheapComputerComponent';
import ComputerEssentialComponent from '../../models/components/computer/ComputerEssentialComponent';

test('Test Generic Component in Page', async ({ page }) => {

    const computerDetailPage: ComputerDetailPage = new ComputerDetailPage(page);
    const cheapComputerComp: ComputerEssentialComponent = computerDetailPage.computerComp(CheapComputerComponent);
    const standardComputerComp: ComputerEssentialComponent = computerDetailPage.computerComp(StandardComputerComponent);

    await cheapComputerComp.selectProcessorType('123')
    await standardComputerComp.selectProcessorType('123')
    await page.waitForTimeout(2000);
})