const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorge(){
    localStorage.setItem("notes" , notesContainer.innerHTML)
}

createBtn.addEventListener("click",()=>{
    let inputBOx=document.createElement("p");
    let img=document.createElement("img");
    inputBOx.className="input-box";
    inputBOx.setAttribute("contenteditable",true);
    img.src="images/delete.png";
    notesContainer.appendChild(inputBOx).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorge();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                console.log("mahmojd");
                updateStorge();                
            }
        })
    }
})

document.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})