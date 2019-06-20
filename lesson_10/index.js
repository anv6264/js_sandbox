fetch('//api.exchangeratesapi.io/latest')

.then(response => response.json()) // преобразуем ответ в json

.then(data => {
  console.log(data) // выводим в консоль результат выполнения response.json()
})

.catch(error => console.error(error))



httpGet('//api.exchangeratesapi.io/latest');

const latest = GET //api.exchangeratesapi.io/latest;

GET //api.exchangeratesapi.io/latest;

/*
{
  "base": "EUR",
  "date": "2018-04-08",
  "rates": {
     "GBP": 0.87295,
    "EUR": 1.092,
    "USD": 1.2234,
  }
}
*/

const historical = GET //api.exchangeratesapi.io/2010-01-12;

const base = GET //api.exchangeratesapi.io/latest?base=USD;
const usd = 1 / rate[`${baseCurrency}${fromCurrency}`]; 

const specificXchange = GET //api.exchangeratesapi.io/latest?symbols=USD,GBP;

const timePeriod = GET //api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01;




const getExchangeRate = async (fromCurrency, toCurrency) => {};