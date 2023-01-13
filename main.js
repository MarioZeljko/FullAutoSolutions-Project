const content = document.getElementById("content");
const links = document.getElementsByTagName("a");
const backButton = document.getElementById("back-button");

backButton.addEventListener("click", function () {
  history.back();
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    const page = event.target.getAttribute("href");
    history.pushState(page, page, page);
    loadPage(page);
  });
}

window.addEventListener("popstate", function () {
  const page = location.pathname.slice(1);
  loadPage(page);
});

function loadPage(page) {
  if (page === "") {
    page = "index";
  }
  return fetch(`pages/${page}.html`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      content.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error:", error);
      loadPage("404.html");
    });
}
