const OneAnimalBtn=document.querySelector("#OneAnimalBtn");
const OneAnimalTbl = document.querySelector("#OneAnimalTbl");
const dolphin = document.querySelector("#dolphin");
const dolphinBtn = document.querySelector("#dolphinBtn");
const TwoAnimalBtn=document.querySelector("#TwoAnimalBtn");
const TwoAnimalTbl=document.querySelector("#TwoAnimalTbl");
const dogBtn=document.querySelector("#dogBtn");
const dogs=document.querySelector("#dogs");
const catsBtn=document.querySelector("#catsBtn");
const cats=document.querySelector("#cats");

OneAnimalBtn.addEventListener("click" , ()=> {
    OneAnimalTbl.classList.toggle("hide");
});

dolphinBtn.addEventListener("click", ()=> {
   dolphin.classList.toggle("hide");
});

TwoAnimalBtn.addEventListener("click",()=> {
    TwoAnimalTbl.classList.toggle("hide");
});

dogBtn.addEventListener("click", ()=> {
  dogs.classList.toggle("hide");
});

catsBtn.addEventListener("click",()=> {
  cats.classList.toggle("hide");
});



