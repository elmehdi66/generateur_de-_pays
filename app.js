
  fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    let pays = document.getElementById("pays");
    let continent = document.getElementById("regionName");
    let capital = document.getElementById("capital");
    let flag = document.getElementById("flag");
    let btn = document.getElementById("generate");

 
   
    btn.addEventListener("click", () => {
      let random = Math.floor(Math.random() * data.length);
      for (let i = 0; i < random; i++) {
        pays.innerText = `Country name : ${data[i].name.common}`;
        capital.innerText = `Capital : ${data[i].capital}`;
        continent.innerText = `Continent : ${data[i].continents}`;
        flag.src = `${data[i].flags.png}`;
      }
    });
  });


