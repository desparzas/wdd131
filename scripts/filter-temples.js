const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Casper Wyoming",
    location: "Casper, Wyoming, United States",
    dedicated: "2024, November, 24",
    area: 924,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/casper-wyoming-temple/casper-wyoming-temple-51916-main.jpg",
  },
  {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26–29",
    area: 88562,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-13287-main.jpg",
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10–12",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
  },
];

function filterTemples(criteria) {
  switch (criteria) {
    case "Old":
      return temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() < 1900
      );
    case "New":
      return temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() > 2000
      );
    case "Large":
      return temples.filter((temple) => temple.area > 90000);
    case "Small":
      return temples.filter((temple) => temple.area < 10000);
    case "Home":
    default:
      return temples;
  }
}

function setupNavigation() {
  const navLinks = document.querySelectorAll(".navigation a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filterCriteria = link.textContent.trim();
      const filteredTemples = filterTemples(filterCriteria);
      displayTemples(filteredTemples);

      navLinks.forEach((nav) => nav.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

function displayTemples(temples) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ''; 
  temples.forEach((temple) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = temple.templeName;
    const elements = document.createElement("ul");

    const locationText = document.createElement("li");
    const locationLabel = document.createElement("span");
    locationLabel.textContent = "Location: ";
    locationText.appendChild(locationLabel);
    const locationValue = document.createElement("span");
    locationValue.textContent = temple.location;
    locationText.appendChild(locationValue);
    elements.appendChild(locationText);
    elements.classList.add("temple-info");

    const dedicatedText = document.createElement("li");
    const dedicatedLabel = document.createElement("span");
    dedicatedLabel.textContent = "Dedicated: ";

    dedicatedText.appendChild(dedicatedLabel);

    const dedicatedValue = document.createElement("span");
    dedicatedValue.textContent = temple.dedicated;
    dedicatedText.appendChild(dedicatedValue);
    elements.appendChild(dedicatedText);

    const areaText = document.createElement("li");
    const areaLabel = document.createElement("span");
    areaLabel.textContent = "Area: ";

    areaText.appendChild(areaLabel);

    const areaValue = document.createElement("span");

    areaValue.textContent = temple.area + " m²";
    areaText.appendChild(areaValue);

    elements.appendChild(areaText);

    const div = document.createElement("div");
    div.classList.add("overlay");
    div.appendChild(elements);

    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.appendChild(div);
    gallery.appendChild(figure);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples);
  setupNavigation();
});
