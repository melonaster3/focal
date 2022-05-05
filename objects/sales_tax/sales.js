const calculateSalesTax = function (salesData, taxRates) {
  let results = {};

  for (let i = 0; i < salesData.length; i++) {

    let keys = Object.keys(salesData[i]); //getting name province sales 

      for (let j = 0; j < keys.length; j++) {
        console.log([salesData[i][keys[j]]]);
          if(keys[j] == "name") {
            if (results[salesData[i][keys[j]]]) {
              let sales = getSumOfArray(salesData[i]["sales"]);
              results[salesData[i][keys[j]]].totalSales += sales; 
              results[salesData[i][keys[j]]].totalTaxes += getTaxes(sales, salesData[i].province);
            } else {
              let sales = getSumOfArray(salesData[i]["sales"]);
              results[salesData[i][keys[j]]] = {};
              results[salesData[i][keys[j]]]["totalSales"] = sales;
              results[salesData[i][keys[j]]]["totalTaxes"] = getTaxes(sales, salesData[i].province);
            }
          }
  
        }
      }


      return results;
  }


const getSumOfArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

const getTaxes = function (sales, province) {
  let tax = 0;
  if (province == "AB") {
    tax = sales * 0.05;
  }
  if (province == "BC") {
    tax = sales * 0.12;
  }
  if (province == "SK") {
    tax = sales * 0.10;
  }
  return tax;
}

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);