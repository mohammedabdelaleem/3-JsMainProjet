// /* 4-javascript Congratulations Animation*/

// different heart colors code
const arrHearts = [
  "&#129505;",
  "&#128153;",
  "&#128154;",
  "&#128155;",
  "&#128156;",
];

const getRandomHeart = () => {
  return arrHearts[getRandomNumberBetween(0, arrHearts.length - 1)];
};

// clear hearts after animation , up website performance

const clearHeartsAfterAnimation = (container) => {
  container.innerHTML = "";
};

// create random heart
const   createRandomHearts
 = () => {
  const createRndomHearts = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = getRandomHeart();

    heart.style.left = `${getRandomNumberBetween(0, 97)}%`;
    heart.style.animationDuration = `${getRandomNumberBetween(0.3, 0.7)}s`;
    containerHearts.append(heart);
  }, 20);// Reduced interval for faster heart generation

  setTimeout(() => {
    clearInterval(createRndomHearts);
  }, 2500);

  setTimeout(() => {
    clearHeartsAfterAnimation(containerHearts);
  }, 3000);// Hearts cleared slightly after the generation stops
};

//when click on randomHeart btn
randomHeart.addEventListener(
  "click",  createRandomHearts
);

