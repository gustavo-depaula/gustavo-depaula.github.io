const daysList = document.getElementById("days-list");
const daySections = document.getElementsByClassName("bible-day");

[...daySections].forEach((daySection) => {
  const header = daySection.getElementsByTagName("h1")[0];
  header.id = header.innerText.toLowerCase().replace(/ /g, "-");

  const element = document.createElement("li");
  element.innerHTML = `<a href="#${header.id}">${header.innerText}</a>`;

  daysList.appendChild(element);
});

// const contentDiv = document.getElementsByTagName("main")[0];
// const base_url = "https://www.biblegateway.com/passage/?search=";

// const pattern = /\((\w+ \d+:\d+(-\d+)?)\)/g;

// function createLink(match, p1) {
//   const [bookChapter, verses] = p1.split(":");
//   const link = `${base_url}${bookChapter}:${verses}&version=RSVCE`;
//   return `<a href="${link}" target="_blank">(${p1})</a>`;
// }

// function replaceBibleReferences(element) {
//   element.childNodes.forEach((node) => {
//     if (node.nodeType === Node.TEXT_NODE) {
//       const newText = node.textContent.replace(pattern, createLink);
//       const tempDiv = document.createElement("div");
//       tempDiv.innerHTML = newText;
//       while (tempDiv.firstChild) {
//         node.parentNode.insertBefore(tempDiv.firstChild, node);
//       }
//       node.parentNode.removeChild(node);
//     } else if (node.nodeType === Node.ELEMENT_NODE) {
//       replaceBibleReferences(node);
//     }
//   });
// }

// replaceBibleReferences(contentDiv);
