const daysList = document.getElementById("days-list");
const daySections = document.getElementsByClassName("bible-day");

console.log(daySections);

[...daySections].forEach((daySection) => {
  const header = daySection.getElementsByTagName("h1")[0];
  header.id = header.innerText.toLowerCase().replace(/ /g, "-");

  const element = document.createElement("li");
  element.innerHTML = `<a href="#${header.id}">${header.innerText}</a>`;

  daysList.appendChild(element);
});
