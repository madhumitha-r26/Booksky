var popupoverlay=document.querySelector(".overlay")
var popupbox = document.querySelector(".popupbox")
var addpopupbutton = document.getElementById("add-popup-button")
var cancelbutton = document.getElementById("cancel-popup")


addpopupbutton.addEventListener("click",function()
{
    popupbox.style.display="block";
    popupoverlay.style.display="block";
})


cancelbutton.addEventListener("click",function(event){
    event.preventDefault();
    popupbox.style.display="none";
    popupoverlay.style.display="none";
})

var container=document.querySelector(".container");
var addbook = document.getElementById("add-book");
var book_title = document.getElementById("book-title-input");
var book_author = document.getElementById("book-author-input");
var book_description = document.getElementById("book-description-input");

addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=` <h2>${book_title.value}</h2>
        <h5>${book_author.value}</h5>
        <br>
        <p>
           ${book_description.value}
        </p>
        <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);
    popupbox.style.display="none";
    popupoverlay.style.display="none";

    book_title.value="";
    book_author.value="";
    book_description.value="";

});


function deletebook(event){
    event.target.parentElement.remove();
}