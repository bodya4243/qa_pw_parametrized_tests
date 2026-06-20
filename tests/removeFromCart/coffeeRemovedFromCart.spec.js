import { test } from '../_fixtures/fixtures';

const parameters = [
    {
        coffeeName: 'Cappuccino',
        menuClickCupMethod: 'clickCappucinoCup',
    },
    {
        coffeeName: 'Espresso',
        menuClickCupMethod: 'clickEspressoCup',
    },
];

parameters.forEach(parameter => {
    test(`Check ${parameter.coffeeName} removed from Cart after clicking remove`, async ({
        menuPage,
        cartPage,
    }) => {
        await menuPage.open();
        await menuPage[parameter.menuClickCupMethod]();

        await menuPage.clickCartLink();
        await cartPage.waitForLoading();

        await cartPage.clickRemoveAllCoffeeButton(parameter.coffeeName);
        await cartPage.assertNoCoffeeMessageIsVisible();
    });
});
