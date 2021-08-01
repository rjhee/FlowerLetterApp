const imgGroup = document.querySelector('.img-group');
const mainImg = document.querySelector('.main-img img')


function displayItems() {
  for(let i = 1; i <= 21; i++) {
    const newLi = document.createElement('li');
    const newImg = document.createElement('img');
    
    imgGroup.appendChild(newLi);
    newLi.appendChild(newImg);
    newImg.setAttribute('src',`./assets/flower-${i}.jpg`);
    newImg.setAttribute('alt',`flower image${i}`);
  }
};

displayItems();

function onClickLoop() {
  for(let i = 1; i <= 21; i++) {
    document.querySelector(`.img-group li:nth-child(${i})`).addEventListener('click',() => {
      mainImg.style.animation ='mainImgChange 600ms ease-in-out 1 alternate';
      changeItems(i);
    })
  }
};

function changeItems(i) {
    mainImg.setAttribute('src',`./assets/flower-${i}.jpg`);
  };

  onClickLoop();
  
  const shareBtn = document.querySelector('.share-btn');
  const imgBtn = document.querySelector('.img-btn');
  const resetBtn = document.querySelector('.reset-btn');

  // shareBtn.addEventListener('click',() => {

  // })