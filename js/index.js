let navItem = document.querySelector(".nav-item");
function navDisplay(event) {
  navItem.classList.toggle("toggle");
}

const main = document.querySelector("#main_container");
//const main = document.querySelector(".box");

//fetch data
let container = "";
const fetchData = async () => {
  const data = await fetch(
    "https://forbes400.herokuapp.com/api/forbes400?limit=100"
  );
  try {
    const response = await data.json();
    response.forEach((item) => {
      console.log(item);
      const {
        squareImage,
        rank,
        personName,
        countryOfCitizenship,
        source,
      } = item;
      container += `<div class="container">
        <img src="${squareImage}" alt="">
        <div class="personal_name">${personName}</div>
        <div class="source">CEO & FOUNDER @${source}</div>
        <div class="country">${countryOfCitizenship}</div>
        <div class="rank">RANK  ${rank}</div>
        <div class="view_profile">
            <a href="">view</a>
        </div>
        </div>`;
    });
  } catch (error) {
    main.innerHTML = `check your internet connection`;
  }

  main.innerHTML = container;
};

fetchData();
