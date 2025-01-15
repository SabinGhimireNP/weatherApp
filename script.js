const var1 = document.querySelector(".btn");
const var2 = document.querySelector("#city");
const temp = document.querySelector("#temp-div");
const api = "7a3ffbf448ad87f45f949a7efe9e44dc";

var1.addEventListener("click", async function () {
  let city = var2.value;
  if (city === "") {
    alert("Please Enter a city name");
  }
  const weatherinfo = await getweatherinfo(city);
  const data = weatherinfo.main.temp + "°C";
  temp.innerHTML = data;
});

async function getweatherinfo(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;

  const response = await fetch(url);
  const data = await response.json();
  if (data.cod == "404") {
    alert("City not found");
  }
  return data;
}
