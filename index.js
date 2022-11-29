//1.    All the companies whose name match 'Babelgum'. Retrieve only their name field.
const filter = {
  name: "Babelgum",
};
const projection = {
  name: 1,
  _id: 0,
};

//2.   All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by number of employees.
const filter = {
  number_of_employees: {
    $gt: 5000,
  },
};
const sort = {
  number_of_employees: 1,
};
const limit = 20;

//3.   All the companies founded between 2000 and 2005, both years included. Retrieve only the name and founded_year fields.
const filter = {
  $and: [
    {
      founded_year: {
        $gte: 2000,
      },
    },
    {
      founded_year: {
        $lte: 2005,
      },
    },
  ],
};
const projection = {
  name: 1,
  founded_year: 1,
  _id: 0,
};

//4.   All the companies that had a IPO Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the name and ipo fields.
const filter = {
  $and: [
    {
      "ipo.valuation_amount": {
        $gte: 100000000,
      },
    },
    {
      founded_year: {
        $lte: 2010,
      },
    },
  ],
};
const projection = {
  name: 1,
  ipo: 1,
  _id: 0,
};

//5.   All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.
const filter = {
  $and: [
    {
      number_of_employees: {
        $lt: 1000,
      },
    },
    {
      founded_year: {
        $lt: 2005,
      },
    },
  ],
};
const sort = {
  number_of_employees: 1,
};
const limit = 10;

//6.   All the companies that don't include the partners field.
const filter = {
  partners: {
    $exists: false,
  },
};

//7.   All the companies that have a null type of value on the category_code field.
const filter = {
  category_code: {
    $type: 10,
  },
};

//8.   All the companies that have at least 100 employees but less than 1000. Retrieve only the name and number of employees fields.
//9.   Order all the companies by their IPO price in descending order.
//10.   Retrieve the ten companies with most employees, order by the number of employees
//11.   All the companies founded in the second semester of the year. Limit your search to 1000 companies.
//12.   All the companies founded before 2000 that have an acquisition amount of more than 10.000.000
//13.   All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their name and acquisition field.
//14.   Order the companies by their founded year, retrieving only their name and founded year.
//15.   All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their acquisition price in descending order. Limit the search to 10 documents.
//16.   All the companies on the 'web' category that have more than 4000 employees. Sort them by the number of employees in ascending order.
//17.   All the companies whose acquisition amount is more than 10.000.000 and the currency is 'EUR'.
//18.   All the companies that have been acquired in the first trimester of the year. Limit the search to 10 companies, and retrieve only their name and acquisition fields.
//19.   All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
