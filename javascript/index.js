function updateTime() {
  // Moscow
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement) {
    let moscowDateElement = moscowElement.querySelector(".date");
    let moscowTimeElement = moscowElement.querySelector(".time");
    let moscowTime = moment().tz("Europe/Moscow");

    moscowDateElement.innerHTML = moscowTime.format("Do MMMM YYYY");
    moscowTimeElement.innerHTML = moscowTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Fiji
  let mexicoElement = document.querySelector("#mexico");
  if (mexicoElement) {
    let mexicoDateElement = mexicoElement.querySelector(".date");
    let mexicoTimeElement = mexicoElement.querySelector(".time");
    let mexicoTime = moment().tz("America/Mexico_City");

    mexicoDateElement.innerHTML = mexicoTime.format("Do MMMM YYYY");
    mexicoTimeElement.innerHTML = mexicoTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Hong Kong
  let hongkongElement = document.querySelector("#hong-kong");
  if (hongkongElement) {
    let hongkongDateElement = hongkongElement.querySelector(".date");
    let hongkongTimeElement = hongkongElement.querySelector(".time");
    let hongkongTime = moment().tz("Asia/Hong_Kong");

    hongkongDateElement.innerHTML = hongkongTime.format("Do MMMM YYYY");
    hongkongTimeElement.innerHTML = hongkongTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">All Cities</a>
  `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
