const search = document.querySelector(".search");
const profileBtn = document.querySelector(".profile_btn");
const publicRepos = document.querySelector(".public_repos-text");
const publikGists = document.querySelector(".publik_gists-text");
const followers = document.querySelector(".followers-text");
const following = document.querySelector(".following");
const company = document.querySelector(".company_paragraph");
const blog = document.querySelector("blog_paragraph");
const locationName = document.querySelector(".location_paragraph");
const member = document.querySelector(".member_paragraph");
const repoName = document.querySelector(".repo_name");
const stars = document.querySelector(".stars_paragraph");
const watchers = document.querySelector(".watchers_paragraph");
const forks = document.querySelector(".forks_paragraph");
const getBtn = document.getElementById("getBtn");

getBtn.addEventListener("click", onClick);

function onClick() {
  console.log(search.value);
  getData();
}

const getData = async function () {
  try {
    const dataJson = await fetch(
      `https://api.github.com/users/${search.value}?client_id=d487070e8ebeb53eb623&client_secret=f231d73655a740d44c8f87a2e9df95e1fa919385`
    );

    const data = await dataJson.json();
    console.log(dataJson);
    console.log(data);
    console.log(data.company);
    console.log(data.bio);
    console.log(data.company);
    console.log(data.company);
    console.log(data.company);
  } catch (error) {
    return error;
  }
};
