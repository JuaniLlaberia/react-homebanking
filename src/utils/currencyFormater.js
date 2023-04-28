export const currencyFormater = (value) => Intl.NumberFormat('en-En', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
}).format(value);