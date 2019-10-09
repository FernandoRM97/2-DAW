const gallery = document.getElementById("gallery");

gallery.addEventListener("click",(event)=>{
    event.target.classList.replace("gallery-item","red");
    console.log(event.target.textContent);
});