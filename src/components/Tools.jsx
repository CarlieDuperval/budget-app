export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency:"usd",
    style:"currency",
    minimumFractionDigits:0 // we don't need the extra zero
})