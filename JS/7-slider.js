/* 7 - slider container */


// my important variables :
let current=1;

// get all buttons Number[1 -5]
const arrNumButtons = Array.from(
  //array conversion for includes facilitates
  document.querySelectorAll(".numbers button")
);

// prepare images
const arrImgs = [
  `<img class="main-img" src="../imgs/1.png" />`,
  `<img class="main-img" src="../imgs/2.png" />`,
  `<img class="main-img" src="../imgs/3.png" />`,
  `<img class="main-img" src="../imgs/4.png" />`,
  `<img class="main-img" src="../imgs/5.png" />`,
];

// handle buttons( pre , next) disable
const handlePrevNextDisability = () => {
  if (current === 1) {
    prev.setAttribute("disabled", "");
    next.removeAttribute("disabled");
  } else if (current === arrImgs.length) {
    next.setAttribute("disabled", "");
    prev.removeAttribute("disabled");
  } else {
    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");
  }
};

//
const removeActivaeNumberClassFromOld = () => {
  document.getElementsByClassName("numbers")[0].getElementsByClassName("active-num")[0].classList.remove("active-num")
};

const updateSlider = (sliderNumber = 1) => {
  // update current
  current = sliderNumber;

  handlePrevNextDisability();

  //prepare slideNum && image
  const slideNum = `<p class="slide-num">slide #${sliderNumber} of ${arrImgs.length}</p>`;
  const image = arrImgs[sliderNumber - 1];

  sliderContainer.innerHTML = ` 
  ${slideNum}
    ${image}
  `;

  // remove and active only clicked button number
  removeActivaeNumberClassFromOld();
  arrNumButtons[sliderNumber - 1].classList.add("active-num");
};

// when load main page
updateSlider();

// when click on any button number
const buttons = document.querySelector(".slide-numbers");

buttons.addEventListener(
  "click",

  (eo) => {
    if (arrNumButtons.includes(eo.target)) {
      updateSlider(Number(eo.target.innerText));
    }

    // check prev , next
    if (eo.target === prev) {
      updateSlider(current - 1);
    } else if (eo.target === next) {
      updateSlider(current + 1);
    }
  }
);
