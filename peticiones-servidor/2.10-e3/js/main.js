"use strict";

const githubName = document.querySelector(".js-input");

function getGithubUsers() {
  fetch("https://developer.github.com/v3/users/")
    .then(githubResponse => githubResponse.json())
    .then(githubUser => {
      githubName.innerHTML = githubUser.message;
    })
    .then(imageResponse => imageResponse.json())
    .then(githubImage => {
      const img = document.querySelector(".photo");
      img.src = githubImage.message;
      img.alt = "Fotografía";
    })
    .then(repoResponse => repoResponse.json())
    .then(githubRepo => {
      const repoNumber = document.querySelector(".repos");
    });
}
const submitSearch = document.querySelector(".js-submit");
submitSearch.addEventListener("click", getGithubUsers);
