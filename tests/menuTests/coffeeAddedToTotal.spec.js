import { test } from '../_fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/priceFormatters';

const parameters = [
    {
        cupName: 'cappuccino',
        totalPrice: COFFEE_PRICES.cappuccino,
        methodName: 'clickCappucinoCup'
    },
    {
        cupName: 'espresso',
        totalPrice: COFFEE_PRICES.espresso,
        methodName: 'clickEspressoCup'
    }
];

for (const parameter of parameters) {
    test(`add ${parameter.cupName} to total`, async ({ menuPage }) => {
        const formattedPrice = totalPriceFormatStr(parameter.totalPrice);

        await menuPage.open();

        await menuPage[parameter.methodName]();

        await menuPage.assertTotalCheckoutContainsValue(formattedPrice);
    });
}