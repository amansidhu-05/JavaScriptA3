const menus=[];
// STEP 1 - Define your page variable
 page = 0;
// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements
const h2 = document.querySelector("#menutitle");
const nextBtn = document.querySelector("#nextMenu");
const prevBtn = document.querySelector('#previousMenu');
const div1 = document.querySelector("div.panel1 h1");
const p1 = document.querySelector('div.panel1 p')
const div2 = document.querySelector('div.panel2 h1');
const p2 = document.querySelector('div.panel2 p')
const div3 = document.querySelector('div.panel3 h1');
const p3 = document.querySelector('div.panel3 p')
const div4 = document.querySelector('div.panel4 h1');
const p4 = document.querySelector('div.panel4 p');

async function getMenus() {
  const jsona = await fetch(
    "https://gist.githubusercontent.com/avcoder/0de79329fdfec90a62e968a43865fc04/raw/4de44757059396a0fb66789b8223ae33a1109fa8/menu.json"
  );
  const data = await jsona.json();
  menus.push(...data);
  display();
}


// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above
function display(){
  
   h2.textContent = menus[page].title;
  div1.textContent = menus[page].soup;
  p1.textContent = menus[page].soupPrice;
  div2.textContent = menus[page].salad;
p2.textContent = menus[page].saladPrice;
  div3.textContent = menus[page].lighterFare;
  p3.textContent = menus[page].lighterFarePrice;
  div4.textContent = menus[page].entree;  
  p4.textContent = menus[page].entreePrice;
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