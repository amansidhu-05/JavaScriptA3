const menus=[];
// STEP 1 - Define your page variable
 let page = 0;
// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements
const menuTitle = document.querySelector("#menutitle");
const nextBtn = document.querySelector("#nextMenu");
const prevBtn = document.querySelector('#previousMenu');
const soup = document.querySelector("div.panel1 h1");
const soupPrice = document.querySelector('div.panel1 p')
const salad = document.querySelector('div.panel2 h1');
const saladPrice = document.querySelector('div.panel2 p')
const lighterFare = document.querySelector('div.panel3 h1');
const lighterFarePrice = document.querySelector('div.panel3 p')
const entree = document.querySelector('div.panel4 h1');
const entreePrice = document.querySelector('div.panel4 p');

// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above
function display(menu1){
  
    menuTitle.textContent = menus[page].title;
    soup.textContent = menus[page].soup;
    soupPrice.textContent = menus[page].soupPrice;
    salad.textContent = menus[page].salad;
    saladPrice.textContent = menus[page].saladPrice;
    lighterFare.textContent = menus[page].lighterFare;
    lighterFarePrice.textContent = menus[page].lighterFarePrice;
    entree.textContent = menus[page].entree;  
    entreePrice.textContent = menus[page].entreePrice;
  }
  async function getMenus() {
    const jsonf = await fetch(
      "https://gist.githubusercontent.com/avcoder/0de79329fdfec90a62e968a43865fc04/raw/4de44757059396a0fb66789b8223ae33a1109fa8/menu.json"
    );
    const data = await jsonf.json();
    menus.push(...data);
    display();
  }
  
getMenus();

// STEP 4 - Create a function called next, that will increment your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page variable
function next()
      {
        if (page === menus.length-1){
          page = 0;
        }
        else {
          page = page + 1;  
        }
        display();
      }
// STEP 5 - Create a function called previous, that will decrement your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page varibale
function previous()
      {
        if (page === 0){
          page = 4;
        }
        else {
          page = page - 1;  
        }
        display();
      }
// STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
// which will eventually move the page value outside the bounds of your array.  Fix that.


// STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.
      nextBtn.addEventListener("click",next);
      prevBtn.addEventListener("click",previous);
// STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it
