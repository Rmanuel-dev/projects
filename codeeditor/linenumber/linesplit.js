const textarea = document.querySelector("textarea");
const numbers = document.querySelector(".numbers");
textarea.addEventListener("keyup", (e) => {
  const num = e.target.value.split("\n").length;
  numbers.innerHTML = Array(num).fill("<span></span>").join("");
  
});
textarea.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    textarea.value =
      textarea.value.substring(0, start) +
      "\t" +
      textarea.value.substring(end);

    event.preventDefault();
  }
});
