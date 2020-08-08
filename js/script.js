const studentItems = document.querySelectorAll(".student-item");
const pageDiv = document.querySelector(".page");



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/

function showPage(list, page) {
   let startIndex = (page * 10) - 10;
   let endIndex = page * 10;

   for(let i = 0; i < list.length; i++) {
      studentItems[i].style.display = 'none';
   }

   for(let j = startIndex; j < endIndex; j++) {
      if (j >= list.length) {
         break;
      }

      studentItems[j].style.display = 'block';
   }
}




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
      link.id = i;
      link.textContent = `${i + 1}`;
      listItem.appendChild(link);
      paginationContainer.appendChild(listItem);
   }

}

appendPageLinks(studentItems);

