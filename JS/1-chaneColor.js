
// when hover on Header => change color
{
    changecolor.addEventListener("mouseover", (eo) => {
      hiddenul.style.display = "block";
    });
  
    // when out of change color
  
    changecolor.addEventListener("mouseout", (eo) => {
      hiddenul.style.display = "none";
    });
  }
  
  // change Header BG when click on (change color => Header BG)
  const getRandomNumberBetween = (from = 0, to = 0) => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  };
  
  const getRandomRGBColor = () => {
    let red = getRandomNumberBetween((from = 0), (to = 255));
    let green = getRandomNumberBetween((from = 0), (to = 255));
    let blue = getRandomNumberBetween((from = 0), (to = 255));
  
    return `rgb(${red},${green},${blue})`;
  };
  
  const getRandomRGBColorFrom = (arrColors) => {
    return arrColors[getRandomNumberBetween(0, arrColors.length-1)]
  }
  
  {
    headerbg.addEventListener(
      "click",
  
      (eo) => {
        myheader.style.backgroundColor = getRandomRGBColor();
        mainTitle.style.backgroundColor = "Transparent";
        dark.style.backgroundColor = getRandomRGBColor();
      }
    );
  }
  
  // change Title BG when click on (change color => Title BG)
  {
    titlebg.addEventListener(
      "click",
  
      (eo) => {
        const headers = document.querySelectorAll("h1:not(#mainTitle)");
        let randomColor = getRandomRGBColor();
        headers.forEach((item) => {
          item.style.backgroundColor = randomColor;
        });
      }
    );
  }
  
  // change Title Color when click on (change color => Title Color)
  {
    titlecolor.addEventListener(
      "click",
  
      (eo) => {
        const headers = document.querySelectorAll("h1:not(#mainTitle)");
        let randomColor = getRandomRGBColor();
  
        for (let item of headers) {
          item.style.color = randomColor;
        }
      }
    );
  }
  
  
  // change section bg when click on (change color => section BG)
  {
    sectionbg.addEventListener(
      "click",
  
      (eo) => {
        const arrColors = ["#080357", "#3D2B3D","#FFEEDB","#384D48","#37505C"]
        const sections = document.querySelectorAll("section");
        let randomColor = getRandomRGBColorFrom(arrColors);
  
        for (let i=0;i<sections.length; i++) {
          sections[i].style.backgroundColor = randomColor;
  
        }
      }
    );
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  