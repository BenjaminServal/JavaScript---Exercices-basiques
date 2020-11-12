const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  console.log("Né.e.s dans les 70's :")

  for (let i = 0; i < entrepreneurs.length; i++) {
      a = entrepreneurs[i].year
      if (a >= 1970 && a < 1980 )
        console.log(entrepreneurs[i].first + " " +entrepreneurs[i].last+ "est né en " + entrepreneurs[i].year)
  }

  console.log(" ")

  console.log("Noms et prenoms :")

  for (let i = 0; i < entrepreneurs.length; i++) {
     const newArray = [entrepreneurs[i].first, entrepreneurs[i].last]
     console.log(newArray)
  }

  console.log(" ")

  console.log("Quel âge aurait chaque inventeur aujourd'hui ?")

  for (let i = 0; i < entrepreneurs.length; i++) {
      c = 2020 - entrepreneurs[i].year
      console.log(`En ce jour, ${entrepreneurs[i].first} ${entrepreneurs[i].last} aurait eu ${c} ans`)
  }


  console.log(" ")

  console.log("Trier les entrepreneurspar ordre alphabetique du nom de famille ?")

  function compare(a,b){
      const LastA = a.last.toUpperCase();
      const LastB = b.last.toUpperCase();

      let comparisson = 0
      if (LastA > LastB)
        comparisson = 1
      else if (LastA < LastB)
        comparisson = -1
      return comparisson  
  }

  console.log(entrepreneurs.sort(compare))