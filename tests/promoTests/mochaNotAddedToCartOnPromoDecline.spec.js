import { test } from '../_fixtures/fixtures';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();
  await menuPage.clickNoPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible('Espresso');
  await cartPage.assertCoffeeItemIsHidden('(Discounted) Mocha');

  await cartPage.assertCoffeeItemIsVisible('Cappuccino');
  await cartPage.assertCoffeeItemIsVisible('Americano');
});
