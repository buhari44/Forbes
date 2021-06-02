let navItem = document.querySelector(".nav-item");
const main = document.querySelector("#main_container");
const loading = document.getElementById("loader");
function navDisplay(event) {
  navItem.classList.toggle("toggle");
  main.classList.toggle("main_none");
  loading.style.display = "none";
}

//const main = document.querySelector(".box");
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
  const response = await data.json();
  hideLoading();

  return response;
};

//
const lookUp = () => {
  fetchData().then((res) => {
    res.forEach((item, index) => {
      const currenPosition = index + 1;
      console.log(item);
      const { squareImage, rank, personName, countryOfCitizenship, source } =
        item;
      container += `<div class="container">
        <img src="${squareImage}" alt="">
        <div class="personal_name">${personName}</div>
        <div class="source">CEO & FOUNDER @${source}</div>
        <div class="country">${countryOfCitizenship}</div>
        <div class="rank">RANK  ${rank}</div>
        <div class="view_profile">
            <button onclick="showProfile(${currenPosition})" id="btns">view</button>
        </div>
        </div>`;
    });
    console.log(container);
    main.innerHTML = container;
  });
};
lookUp();

//single profile function

const showProfile = (userProfile) => {
  fetchData().then((res) => {
    const findUser = res.filter((person) => person.position === userProfile);
    findUser.forEach((item) => {
      const ind = item.industries;
      const abt = item.abouts;
      const b = item.bios;
      console.log(b.toString());
      const {
        squareImage,
        rank,
        personName,
        countryOfCitizenship,
        source,
        archivedWorth,
        gender,
        // ind,
        // abt,
        // bio,
      } = item;
      sessionStorage.setItem("squareImage", squareImage);
      sessionStorage.setItem("rank", rank);
      sessionStorage.setItem("personName", personName);
      sessionStorage.setItem("countryOfCitizenship", countryOfCitizenship);
      sessionStorage.setItem("source", source);
      sessionStorage.setItem("archivedWorth", archivedWorth);
      sessionStorage.setItem("gender", gender);
      sessionStorage.setItem("ind", ind);
      sessionStorage.setItem("abt", abt);
      sessionStorage.setItem("b", b);

      location.href = "./profile.html";
    });
  });
};
