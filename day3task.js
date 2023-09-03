//compare two JSON

let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

// Convert JSON objects to strings and sort them
let obj1String = JSON.stringify(obj1, Object.keys(obj1).sort());
let obj2String = JSON.stringify(obj2, Object.keys(obj2).sort());

// Compare the sorted strings for equality
if (obj1String === obj2String) {
  console.log("true");
} else {
  console.log("false");
}

//display all the countries flag in the console
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Extract and display flags
    data.forEach(country => {
      const flagUrl = country.flags.svg;
      console.log(`Country: ${country.name.common}`);
      console.log(`Flag URL: ${flagUrl}`);
      console.log('---------------------------');
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

//use the same rest countries and print all countries names, regions, sub region and polupations
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Country: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Subregion: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      console.log('---------------------------');
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

//
