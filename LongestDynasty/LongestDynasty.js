const dynastyReign = [
  {
    name: "San Dynasty",
    age: "MXLI",
  },
  {
    name: "Viloria Dynasty",
    age: "MCCCIIII",
  },
  {
    name: "Tan Dynasty",
    age: "MCCCXCVIII",
  },
  {
    name: "Bon Dynasty",
    age: "MCDXLV",
  },
  {
    name: "Maiko Dynasty",
    age: "MDCLXIV",
  },
  {
    name: "Paul Dynasty",
    age: "MCMXLIX",
  },
  {
    name: "Andre Dynasty",
    age: "MMMXICX",
  },
];

let convertedDynastyReign = [];

// created an object constructor for converting the given array of objects to an array of objects with converted age values
function Dynasty(name, age) {
  this.name = name;
  this.age = age;
}

// this is the function that converts the years/age from roman numeral form to a number
function romanToNumber(roman) {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanNumeralMap[roman[i]];
    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }
    prevValue = currentValue;
  }

  return result;
}

// function for getting the longest dynasty
const longestDynasty = (arr) => {
  dynastyReign.map((dynasty) => {
    const converted = romanToNumber(dynasty.age);
    const newDynasty = new Dynasty(dynasty.name, converted);
    convertedDynastyReign.push(newDynasty);
  });

  console.log(convertedDynastyReign);
  let highestAge = -Infinity;
  let nameOfHighestAge = "";

  convertedDynastyReign.forEach((dynasty) => {
    if (dynasty.age > highestAge) {
      highestAge = dynasty.age;
      nameOfHighestAge = dynasty.name;
    }
  });
  return nameOfHighestAge;
};
console.log(longestDynasty(dynastyReign));
