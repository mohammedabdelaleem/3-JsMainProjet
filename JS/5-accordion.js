/* 5- Accordion Project*/
const questions = document.querySelector(".questions-container");

const updateAccordion = (eo) => {  // area where i clicked
  const answer =
    eo.target.parentElement.parentElement.getElementsByClassName("answer")[0];
  switch (eo.target.className) {
    case "icon-plus":
      eo.target.classList.remove("icon-plus");
      eo.target.classList.add("icon-minus");
      answer.classList.add("active-answer"); 
      break;

    case "icon-minus":
      eo.target.classList.remove("icon-minus");
      eo.target.classList.add("icon-plus");

      answer.classList.remove("active-answer"); 

      break;
  }
};


questions.addEventListener(
  "click", 
  (eo) => {
    updateAccordion(eo)
  }
);
