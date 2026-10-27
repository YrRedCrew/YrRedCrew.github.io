document.addEventListener("nav", () => {
  document.querySelectorAll(".mobile .toc details[open]").forEach(d => {
    d.removeAttribute("open")
  })
})
