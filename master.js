const unreadNotify = document.querySelectorAll("ul.unread li");
const notifyCount = document.querySelector("h1 .notify-count");
const markBtn = document.querySelector("header .mark-btn");

markBtn.addEventListener("click", () => {
  unreadNotify.forEach((notify) => notify.classList.remove("unread-notify"));
  notifyCount.textContent = "0 ";
  markBtn.disabled = true;
  document.querySelectorAll(".visually-hidden").forEach((ele) => ele.remove());
});
