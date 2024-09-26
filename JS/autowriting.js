// 2-autowriting project

const strWebMainTitle = "Courses4Arab";
const mainTitle = document.getElementById("mainTitle");
let i;

//first clear mainTitle.innerText
const resetDefaualtMainTitle = () => {
  mainTitle.innerText = "";
  i = 0;
};

//Reset mainTitle.innerText , i
resetDefaualtMainTitle();

const autowritingMainTitle = () => {
  mainTitle.innerText += strWebMainTitle[i++];

  // stop when you reached to to end
  if (i > strWebMainTitle.length) {
    resetDefaualtMainTitle();
  }
};

const autowritingMainTitleFn =  setInterval( autowritingMainTitle, 200);
