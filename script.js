const closedEmoji = window.document.querySelector(".closed");

const openEmoji = window.document.querySelector(".open");

closedEmoji.addEventListener("click", function () {
  if (openEmoji.classList.contains("open")) {
    openEmoji.classList.add("active");
    closedEmoji.classList.remove("active");
  }
});

openEmoji.addEventListener("click", function () {
  if (closedEmoji.classList.contains("closed")) {
    closedEmoji.classList.add("active");
    openEmoji.classList.remove("active");
  }
});
