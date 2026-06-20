import { test } from '../_fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/priceFormatters';

const parameters = [
    {
        cupName: 'cappuccino',
        price: COFFEE_PRICES.cappuccino,
        methodName: 'assertCappuccinoCupCostHasValue',
    },
    {
        cupName: 'espresso',
        price: COFFEE_PRICES.espresso,
        methodName: 'assertEspressoCupCostHasValue',
    },
]

parameters.forEach(parameter => {
    test(`Check ${parameter.cupName} cup has correct cost`, async ({menuPage}) => {
        const price = priceFormatStr(parameter.price);

        await menuPage.open();

        await menuPage[parameter.methodName](price);
    })
})