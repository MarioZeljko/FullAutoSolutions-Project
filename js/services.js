const elements = document.querySelectorAll(".srvc-crd-img-box");

const urls = [
  "../img/services-home/palletization.jpeg",
  "../img/services-home/bending.jpeg",
  "../img/services-home/grippers.jpeg",
  "../img/services-home/cells.jpeg",
  "../img/services-home/packing.jpeg",
  "../img/services-home/milling.jpeg",
  "../img/services-home/consulting.jpeg",
  "../img/services-home/education.jpeg",
  "../img/services-home/maintenance.jpeg",
];

for (let i = 0; i < elements.length; i++) {
  elements[
    i
  ].style.backgroundImage = `linear-gradient(to right bottom, #e2bc4039, #cba93a50), url(${urls[i]})`;
}
