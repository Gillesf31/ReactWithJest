export function calculatePrice(
    quantity,
    itemPrice,
    taxPercentage
) {
    const priceWithoutTax = quantity * itemPrice;

    const priceWithoutTaxWithReduction = applyReductionToPrice(priceWithoutTax);

    const priceWithTax = priceWithoutTaxWithReduction * (1 + taxPercentage / 100);

    return priceWithTax.toFixed(2) + ' €';
}

export function applyReductionToPrice(priceWithoutTax) {
    const basicReductionRates = 3;
    const basicPriceToApplyReduction = 1000;
    const highestReductionRates = 5;
    const highestPriceToApplyReduction = 5000;

    if (priceWithoutTax >= highestPriceToApplyReduction) {
        return priceWithoutTax * (1 - highestReductionRates / 100);
    }
    if (priceWithoutTax >= basicPriceToApplyReduction) {
        return priceWithoutTax * (1 - basicReductionRates / 100);
    }

    return priceWithoutTax;
}
