const content = document.getElementById("content");
const links = document.getElementsByTagName("a");
const backButton = document.getElementById("back-button");

backButton.addEventListener("click", function () {
  history.back();
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    const link = event.target.getAttribute("href");
    // check if link is external, mailto or tel
    if (
      link.startsWith("http") ||
      link.startsWith("mailto") ||
      link.startsWith("tel")
    ) {
      return;
    }
    event.preventDefault();
    const page = link;
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

  if (page === "services.html") {
    const elements = document.querySelectorAll(".srvc-crd-img-box");

    const urls = [
      "img/services-home/palletization.jpeg",
      "img/services-home/bending.jpeg",
      "img/services-home/grippers.jpeg",
      "img/services-home/cells.jpeg",
      "img/services-home/packing.jpeg",
      "img/services-home/milling.jpeg",
      "img/services-home/consulting.jpeg",
      "img/services-home/education.jpeg",
      "img/services-home/maintenance.jpeg",
    ];

    for (let i = 0; i < elements.length; i++) {
      elements[
        i
      ].style.backgroundImage = `linear-gradient(to right bottom, #e2bc4039, #cba93a50), url(${urls[i]})`;
    }
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
