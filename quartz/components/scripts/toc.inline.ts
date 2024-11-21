const bufferPx = 150
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const slug = entry.target.id
    const tocEntryElement = document.querySelector(`a[data-for="${slug}"]`)
    const windowHeight = entry.rootBounds?.height
    if (windowHeight && tocEntryElement) {
      if (entry.boundingClientRect.y < windowHeight) {
        tocEntryElement.classList.add("in-view")
      } else {
        tocEntryElement.classList.remove("in-view")
      }
    }
  }
})

function toggleToc(this: HTMLElement) {
  console.log("TOGGLE")
  this.classList.toggle("collapsed")
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  console.log("CONTENT", content)
  content.classList.toggle("collapsed")
}

function setupToc() {
  const toc = document.getElementById("toc")
  if (toc) {
    console.log("HAS TOC")
    const collapsed = toc.classList.contains("collapsed")
    const content = toc.nextElementSibling as HTMLElement | undefined
    if (!content) return
    console.log("HAS CONTENT")
    toc.addEventListener("click", toggleToc)
    window.addCleanup(() => toc.removeEventListener("click", toggleToc))
  } else {
    console.log("NO TOC")
  }
}

window.addEventListener("resize", setupToc)
document.addEventListener("nav", () => {
  setupToc()

  // update toc entry highlighting
  observer.disconnect()
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
  headers.forEach((header) => observer.observe(header))
})
