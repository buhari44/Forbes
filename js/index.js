let navItem = document.querySelector(".nav-item");
const main = document.querySelector("#main_container");
function navDisplay(event) {
  navItem.classList.toggle("toggle");
  main.classList.toggle("main_none");
}

//const main = document.querySelector(".box");
const loading = document.getElementById("loader");
//it display loading
function displayLaoding() {
  loading.classList.add("display");

  setTimeout(() => {
    loading.classList.remove("display");
  }, 5000);
}
function hideLoading() {
  loading.classList.add("display_none");
}

//fetch data
let container = "";
const fetchData = async () => {
  displayLaoding();
  const data = await fetch(
    "https://forbes400.herokuapp.com/api/forbes400?limit=100"
  );
  try {
    const response = await data.json();
    hideLoading();
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
