const productSales = [
  {
    name: "product a",
    profit: -22,
  },
  {
    name: "product b",
    profit: 35,
  },
  {
    name: "product c",
    profit: -81,
  },
  {
    name: "product d",
    profit: -2,
  },
  {
    name: "product e",
    profit: 50,
  },
  {
    name: "product f",
    profit: 75,
  },
  {
    name: "product g",
    profit: 2,
  },
];

let profitNumbers = [];
// 1. Highest sales profit

const topProduct = (arr) => {
  arr.map((item) => {
    profitNumbers.push(item.profit);
  });
  let topProfit = Math.max(...profitNumbers);
  if (profitNumbers === []) return console.log("no data");
  else console.log(`Top: ${topProfit}`);
};

topProduct(productSales);

// 2. Lowest sales profit

const bottomProduct = (arr) => {
  let bottomProfit = Math.min(...profitNumbers);
  arr.map((item) => {
    profitNumbers.push(item.profit);
  });
  if (profitNumbers === []) return console.log("no data");
  else {
    console.log(`Bottom: ${bottomProfit}`);
  }
};

bottomProduct(productSales);

// 3. Profit nearest to 0

const zeroProfitProduct = (arr) => {
  arr.map((item) => {
    profitNumbers.push(item.profit);
  });

  if (profitNumbers.length === 0) return undefined;

  let closestNumber = profitNumbers[0];

  for (let i = 1; i < profitNumbers.length; i++) {
    if (Math.abs(profitNumbers[i]) < Math.abs(closestNumber)) {
      closestNumber = profitNumbers[i];
    }
  }
  const positiveNumber = profitNumbers.includes(-closestNumber)
    ? Math.abs(closestNumber)
    : closestNumber;

  return console.log(`Closest to zero: ${positiveNumber}`);
};

zeroProfitProduct(profitNumbers);
