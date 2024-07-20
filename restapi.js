/*fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const e = data.map((country) => country?.name?.common);
    console.log(e);
  })
  .join(",");




  

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const r = data
      .filter((t) => t.population > 1_00_00_000)
      .sort((a, b) => b.population - a.population)
      .map(
        (country, i) =>
          `${i + 1} . ${country?.name?.common} - ${country?.population}`
      );
    console.log(r.join("\n"));
  });

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const r = data
      .filter((t) => t.population > 1_00_00_000)
      .sort((a, b) => b.population - a.population)
      .slice(0, 10)
      .map(
        (country, i) =>
          `${i + 1} . ${country?.name?.common} - ${country?.population}`
      );

    console.log(r.join("\n"));
  });


fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    var r = data
      .filter((t) => t.population > 1_00_00_000)
      .sort((a, b) => b.population - a.population)
      .map(
        (country) =>
          `${country?.name?.common} - ${new Intl.NumberFormat("en-IN").format(
            country?.population
          )}`
      );
    const result = r.forEach((country) => {
      const read = document.createElement("li");
      read.innerText = country;
      document.querySelector(".list").append(read);
    });

    console.log(result);
  });
*/

//await

//we shoulds only use async functions inside await only

async function getcountriesbypopulation(population) {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  const r = countries
    .filter((t) => t.population > 1_00_00_000)
    .sort((a, b) => b.population - a.population)
    .map((title) => title?.name?.common);
  console.log(r);
}

await getcountriesbypopulation(1_00_00_000);
//type=module then we dont need to use async function
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
