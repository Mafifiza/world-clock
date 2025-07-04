function updateTime() {
  // Moscow
  let moscowElement = document.querySelector("#moscow");
  let moscowDateElement = moscowElement.querySelector(".date");
  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscowTime = moment().tz("Europe/Moscow");

  moscowDateElement.innerHTML = moscowTime.format("Do MMMM YYYY");
  moscowTimeElement.innerHTML = moscowTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Kinshasa
  let kinshasaElement = document.querySelector("#kinshasa");
  let kinshasaDateElement = kinshasaElement.querySelector(".date");
  let kinshasaTimeElement = kinshasaElement.querySelector(".time");
  let kinshasaTime = moment().tz("Africa/Kinshasa");

  kinshasaDateElement.innerHTML = kinshasaTime.format("Do MMMM YYYY");
  kinshasaTimeElement.innerHTML = kinshasaTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
