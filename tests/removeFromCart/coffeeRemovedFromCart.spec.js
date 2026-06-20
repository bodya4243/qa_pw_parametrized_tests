import { test } from '../_fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';

const parameters = [
    {
        cupName: 'cappuccino',
        price: COFFEE_PRICES.cappuccino,
        menuClickCupMethod: 'clickCappucinoCup',
        cartClickRemoveAllMethod : 'clickRemoveAllCappucinoButton',
    },
    {
        cupName: 'espresso',
        price: COFFEE_PRICES.espresso,
        menuClickCupMethod: 'clickEspressoCup',
        cartClickRemoveAllMethod : 'clickRemoveAllEspressoButton',
    },
];

parameters.forEach(parameter => {
    test(`Check ${parameter.cupName} removed from Cart after clicking remove`, async ({
        menuPage,
        cartPage,
    }) => {
        await menuPage.open();
        await menuPage[parameter.menuClickCupMethod]();

        await menuPage.clickCartLink();
        await cartPage.waitForLoading();

        await cartPage[parameter.cartClickRemoveAllMethod]();
        await cartPage.assertNoCoffeeMessageIsVisible();
    });
});
