"use script";

const searchInput = document.querySelector(".search");
const searchButton = document.querySelector(".btn-search");
const cinemaCard = document.querySelector(".cinemaCards");
const loader = document.querySelector(".loader");

loader.style.display = "none";

const getDataCinema = async function () {
  loader.style.display = "block";
  cinemaCard.innerHTML = "";
  try {
    const getdataJson = await fetch(
      `https://www.omdbapi.com/?apikey=1fd18c03&s=${searchInput.value}`
    );

    const getData = await getdataJson.json();
    // console.log(getdataJson);
    loader.style.display = "none";
    console.log(getData.Search);
    renderH(getData.Search);
  } catch (error) {
    throw new Error(error);
  }
};

const renderHtml = function (data) {
  const html = `<div class="cinemaBox">
    <div class="cinemaBox__img" style="background-image: url(${data.Poster})"></div>
    <p class="cinemaBox__title">${data.Title}</p>
    <p class="cinemaBox__year">Year: ${data.Year}</p>
   </div>`;

  cinemaCard.insertAdjacentHTML("afterbegin", html);
  //   cinemaCard.insertAdjacentHTML("afterbegin", html);
};

const renderH = function (arrData) {
  arrData.forEach((element) => {
    renderHtml(element);
  });
};

searchButton.addEventListener("click", function () {
  console.log(searchInput.value);
  getDataCinema();
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    getDataCinema(searchInput);
  }
});
