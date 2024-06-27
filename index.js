let sidebar = document.getElementById("sidebar");
let menu = document.getElementById("menu");
let sideClose = document.getElementById("side_close");

sidebar.style.zIndex = "121244515";

sideClose.addEventListener("click", () => {
  sidebar.classList.remove("side_show");
});

menu.addEventListener("click", () => {
  sidebar.classList.toggle("side_show");
});

let nav = document.getElementById("nav");
nav.style.zIndex = "1223321";

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    nav.style.position = "fixed";
  } else {
    nav.style.position = "sticky";
  }
});

let form = document.querySelectorAll(".content-form input");
let wrapper = Object.values(form);

let blockc = (value) => {
  wrapper.forEach((val, ind) => {
    if (value === ind) {
      document.body.addEventListener("click", (event) => {
        if (event.target === val) {
          wrapper[ind].classList.add("showw");
        } else {
          wrapper[ind].classList.remove("showw");
        }
        event.stopPropagation();
      });
    } else {
      val.classList.remove("showw");
    }
  });
};

let bout = form.forEach((item, index) => {
  item.addEventListener("focus", () => {
    blockc(index);
  });
});

let faqButton = document.querySelectorAll(".faqs-button");
let focus = faqButton.forEach((button) => {
  button.addEventListener("click", () => {
    let content = button.nextElementSibling;

    button.classList.toggle("addFaq");

    if (button.classList.contains("addFaq")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = 0;
    }

    let faqButton = document.querySelectorAll(".faqs-button");

    faqButton.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("addFaq");
        otherButton.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});
