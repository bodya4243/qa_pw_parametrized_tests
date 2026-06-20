import { test } from '../_fixtures/fixtures';

test('Assert cart cleaned after page refresh', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible('Cappuccino');

  await cartPage.reload();

  await cartPage.assertCoffeeItemIsHidden('Cappuccino');
  await cartPage.assertNoCoffeeMessageIsVisible();
});
