// 8- toggle tabs project

//  de - Activate current button
const deActivateTheOldButton = () => {
  document
    .getElementsByClassName("myTabs")[0]
    .getElementsByClassName("active-btn")[0]
    .classList.remove("active-btn");
};

const myButtons = document.querySelectorAll(".mybtn");

myButtons.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    //toggle between butons
    deActivateTheOldButton();
    item.classList.add("active-btn");

    //toggle between articles
    document
      .getElementsByClassName("fun-facts-container")[0]
      .getElementsByClassName("active-article")[0]
      .classList.remove("active-article");
    document
      .getElementsByClassName("fun-facts-container")[0]
      .getElementsByTagName("article")
      [index].classList.add("active-article");
  });
});

// this is my solution after watching but the eng's solution is good
// {

// // my articles
// const arrArticles =  [

// `   <article class="fun-facts" >
//               <h2 >4 Fun Facts About Finland</h2>
//               <ol>
//                 <li>Over 188,000 lakes.</li>
//                 <li>2 million saunas, central to Finnish life.</li>
//                 <li>Midnight Sun: 24 hours of daylight in summer.</li>
//                 <li>Ranked the world’s happiest country.</li>

//               </ol>
//             </article> `,

//            `<article class="fun-facts" >
//               <h2 >4 Fun Facts About Denmark</h2>
//               <ol>
//                 <li>Famous for the cozy concept of "hygge".</li>
//                 <li>LEGO was invented here.</li>
//                 <li>More bicycles than cars in Copenhagen</li>
//               </ol>
//             </article>`,

//             `<article class="fun-facts" >
//               <h2 >4 Fun Facts About Switzerland</h2>
//               <ol>
//                 <li>Has four official languages.</li>
//                 <li>Birthplace of the Swiss Army Knife.</li>
//               </ol>
//             </article>
//             `

// ]

// //my buttons ==> Array: to use includes
// const myButtons = Array.from (
//     document.querySelectorAll(".myTabs button")
// )

// // make a dictionaary for facilitate :
// const dictCountriesId = {
//     "Finland":0 ,
//     "Denmark":1,
//     "Switzerland":2
// }

// //////////

// // super
// const deActivateTheOldButton = () => {
// document.getElementsByClassName("myTabs")[0].getElementsByClassName("active-btn")[0].classList.remove("active-btn")}

// let id=0
// const updateNewArticle = (countryName = "Finland") => {

//     parentArticles.innerHTML = arrArticles[dictCountriesId[countryName]]
//     document.getElementsByClassName("fun-facts-container")[0].getElementsByClassName("fun-facts")[0].classList.add("active-article");

// }

// updateNewArticle("Finland")

// const tabs = document.querySelector(".myTabs")
// tabs.addEventListener("click" ,

//     (eo) => {
//         if(myButtons.includes(eo.target))
//         {
//              // de - Activate current button
//     deActivateTheOldButton()
//     eo.target.classList.add("active-btn");

//             updateNewArticle(eo.target.innerText)
//         }
//     }
// )

// /// don't forget you can use buttons [node list] , foreach button in buttons => button.addEventListener .... and so on

//}
