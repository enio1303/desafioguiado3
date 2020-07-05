const formatterCurrency = Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' });
const formatterPercentage = Intl.NumberFormat("pt-BR", { style: 'percent', maximumFractionDigits: 2});
const formatterNumber = Intl.NumberFormat("pt-BR");


function formatNumber(value) {
  return formatterNumber.format(value);
}

function formatPercentage(value) {
  return formatterPercentage.format(value);
}

function formatCurrency(value) {
  return formatterCurrency.format(value);
}

export { formatNumber, formatCurrency, formatPercentage };
