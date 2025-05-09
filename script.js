const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML= localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",  notesContainer.innerHTML);
}
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "Notes Project/icon.png"; // ✅ no extra spaces
    inputBox.appendChild(img);            // ✅ add image inside the note
    notesContainer.appendChild(inputBox); // ✅ add note to the container
});

// ✅ Fixing the delete functionality
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove(); 
        updateStorage();// ✅ removes the note (the <p>)
    }
    else if(e.target.tagName === "P" ){
      notes= document.querySelectorAll(".input-box");
      notes.forEach(nt => {
        nt.onkeyup = function(){
            updateStorage();
        }
      })  
    }
    document.addEventListener("keydown",event =>{
        if(event.key === "Enter"){
         document.execCommand("insertLineBreak");
         event.preventDefault();   
        }
    })
});
