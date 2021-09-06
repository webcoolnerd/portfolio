


let pro=document.querySelector(".pro");
let start=0;
let index=0;
let job=["Angular developer","ReactJs developer","PHP developer","Software Engineer"];

function handleScroll() {
  let top = document.querySelector("section").scrollTop;
  let header = document.querySelector(".header");
  if (top > 150) {
    document.querySelector(".about").classList.add("fadein");
    document.querySelector(".skills").classList.add("fadein");
    document.querySelector(".contact").classList.add("fadein");
  } else {
    header.style.display = "none";
  }

}

function addLetter(){
  if(job[index].length!=start-5)
  {
    pro.append(job[index].slice(start,start+1));
    start++;
    setTimeout(function() {
      addLetter()
    }, 140);
  }else{
    start=0;
    index++;
    job.length===index ? index=0 : "";
    pro.innerHTML="";
    addLetter();
  }
}

 function hire(){
   window.location.href="#social";
 }