let navItems = document.querySelector(".nav-item");
//const main = document.querySelector("#main_container");
function navDisplay() {
  navItems.classList.toggle("toggle");
}
const template = document.querySelector(".profile-box");
let wrapper = "";

//getting single profile from session storage
var img = sessionStorage.getItem("squareImage");
var rank = sessionStorage.getItem("rank", rank);
var personName = sessionStorage.getItem("personName", personName);
var archivedWorth = sessionStorage.getItem("archivedWorth", archivedWorth);
var gender = sessionStorage.getItem("gender", gender);
var ind = sessionStorage.getItem("ind", ind);
var abt = sessionStorage.getItem("abt", abt);
var b = sessionStorage.getItem("b", b);
var countryOfCitizenship = sessionStorage.getItem(
  "countryOfCitizenship",
  countryOfCitizenship
);
var source = sessionStorage.getItem("source", source);

wrapper += `<div class="img-text">
           <div class=image>
            <img src="${img}" alt="">
            </div>
            <div class="texts">
                <p class="myrank"><span>RANK:</span>  ${rank}</p>
                <p class="names"><span>NAME:</span>  ${personName}</p>
                <p class="worth"><span>WORTH:</span>  $${archivedWorth}</p>
                <p class="ind"><span>INDUSTRY:</span> ${ind}</p>
                <p class="gender">
                    <span> GENDER:</span>   ${gender}
                </p>

            </div>
        </div>
        <div class="long-text">
            <div class="bios">
              <span> BIOS: </span>${b}
            </div>
            <div class="about">
              <span> ABOUT:</span> ${abt}</span>
            </div>
            </div>
        </div>
        <footer>
        <h3>Designed by AfrikaTekBoy</h3>
        </footer>
       `;
console.log(wrapper);
template.innerHTML = wrapper;

// console.log(
//   img,
//   personName,
//   countryOfCitizenship,
//   source,
//   rank,
//   archivedWorth,
//   gender.toUpperCase(),
//   ind,
//   abt,
//   b
// );
