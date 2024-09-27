// 3-Get Random Youtube Videos

// Random Youtube Videos Sources
const arrSourceVideos = [
  `<iframe id="myframe" src="https://www.youtube.com/embed/dNVZ0ZPfE8s?si=abMF0m-BSK2pZpQ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="myframe" src="https://www.youtube.com/embed/2faCQ0oQCG4?si=QauZI6myhcPzfA3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="myframe" src="https://www.youtube.com/embed/-oCnFeq5Frk?si=Macfxd-_Umw_4pE2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="myframe" src="https://www.youtube.com/embed/qKXAzllD4ds?si=TBULiVSjFSmMKpHt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="myframe" src="https://www.youtube.com/embed/s7nO19BKNDA?si=O0_R8If4jQse-Q0L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="myframe" src="https://www.youtube.com/embed/CFOCXcypo9g?si=ZDaMJbLxZZnl1f5X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="myframe" src="https://www.youtube.com/embed/VgzHT9quo5c?si=ifBNnBjgWQz4UN6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
];

// prepare randomVideo btn
const randomVideo = document.getElementById("randomVideo");
const containerIframe = document.getElementById("containerIframe");

// get Random Video Source from the list
let getRandomVideoSource = () => {
  return arrSourceVideos[getRandomNumberBetween(0, arrSourceVideos.length - 1)]; // getRandomNumberBetween(from, to) => at change color
};

randomVideo.addEventListener("click", (eo) => {
  //add new frame with new video
  containerIframe.innerHTML = getRandomVideoSource();

  createRandomHearts()
});



// random Quate
const dictQuatesAutors = {
  1: {
    quate: "غنى الحياة بقدر صداقاتها، فالسعادة الكبرى كامنة في أن نُحب ونحِب",
    author: "سيدني سمث",
  },
  2: {
    quate: "إن احترام الذات هو أكبر محرك للنفوس العزيزة",
    author: "جان جاك روسو",
  },

  3: {
    quate:
      "وحدهم الذين يجازفون في الوصول إلى الأبعد يكتشفون إلى أي مدى قد يصلون",
    author: "إيليوت",
  },

  4: {
    quate: "لا تُبرر أخطائك بل إجلطهم بالمزيد",
    author: "إيليوت",
  },

  5: {
    quate: " لا تتعلق بأحد فالناس ليست أشجاراً وانت لست قرداً",
    author: "إيليوت",
  },

  6: {
    quate: "الحياة ليست سباق  ف إهدى كده و relax  يا صاحبى",
    author: "إيليوت",
  },

  7: {
    quate: "كله هيعدي , ثق في نفسك وشوف انت عديت حاجات صعبة لوحدك اذاي",
    author: "إيليوت",
  },
  8: {
    quate: "الحياة إما مغامرة جريئة أو لا شي",
    author: "ابوعبدالعليم",
  },
  9: {
    quate: "اللى ملوش قلب ملوش رزق",
    author: "ابوعبدالعليم",
  },
  10: {
    quate: "الثقة بالنفس تصنع المُعجزات",
    author: "شخص عارف قيمة نفسة",
  },
};

let getRandomQuate = () => {
  // Get the length of the top-level keys
  const diclength = Object.keys(dictQuatesAutors).length;

  const randomKey = getRandomNumberBetween(1, diclength);

  // prepare array
  let arrQuateAuthor = [];
  arrQuateAuthor.push(dictQuatesAutors[randomKey].quate);
  arrQuateAuthor.push(dictQuatesAutors[randomKey].author);

  return arrQuateAuthor;
};

const getRandomQuateHTML = () => {
  const arrQuate = getRandomQuate();
  const newQuateHTML = `

 <blockquote class="sidekick">
            ${arrQuate[0]}
              <br>
             <cite> ${arrQuate[1]} </cite>
           </blockquote>
`;

  return newQuateHTML;
};

randomQuate.addEventListener("click", (eo) => {
  //add new frame with new video
  parentQuate.innerHTML = getRandomQuateHTML();

  createRandomHearts()
});
