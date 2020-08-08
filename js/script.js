const studentItems = document.querySelectorAll(".student-item");
const pageDiv = document.querySelector(".page");


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {
   let numberOfLinks = Math.ceil(list.length / 10);
   let paginationContainer = document.createElement("div");
   paginationContainer.className += "pagination";
   pageDiv.appendChild(paginationContainer);

   for(let i = 0; i < numberOfLinks; i++) {
      let listItem = document.createElement("li");
      let link = document.createElement("a");

      // set the first link to the active class initially.
      if (i === 0) {
         link.classList.add("active");
      }

      link.id = i;
      link.textContent = `${i + 1}`;
      listItem.appendChild(link);
      paginationContainer.appendChild(listItem);
   }

}

// initial call to the function to display the dynamically created links.
appendPageLinks(studentItems);


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/

function showPage(list, page) {
   let startIndex = (page * 10) - 10;
   let endIndex = page * 10;
   // Loop to first set all list items display property to hidden.
   for(let i = 0; i < list.length; i++) {
      studentItems[i].style.display = 'none';
   }

   // Second loop to set the display property of the chosen indexes.
   for(let j = startIndex; j < endIndex; j++) {

      // break from the loop if there are no more items in the list to display.
      if (j >= list.length) {
         break;
      }

      studentItems[j].style.display = 'block';
   }
}

// Initial call to display the first 10 items.
showPage(studentItems, 1);



/*** 
   Created global constant paginationDiv after dynamically adding it to the DOM. 
   Added event listener to the div.
***/
const paginationDiv = document.querySelector(".pagination");

paginationDiv.addEventListener("click", (e) => {

   let link = e.target;
   let links = document.querySelectorAll(".pagination li a");

   // Loop to find the current link with the active class and remove it.
   for (let i = 0; i < links.length; i++) {
      if (links[i].classList.contains("active")) {
         links[i].classList.remove("active");
      }
   }

   if (link.tagName === "A") {
      link.classList.add("active");
      showPage(studentItems, parseInt(link.id) + 1);
   }
});
