function back() {
  var element = document.querySelector(".content");
  element.classList.toggle("flipped");
}
// function del(){
//     const dd =document.querySelector(".blogblock");
//     const del=document.querySelector('del');
//     del.onclick(){
//         list.removeChild(dd);
//     }
// }
function log(){
    const ff=document.querySelector(".con");
    ff.style.display="block";
}
function dlog(){
    const ff=document.querySelector(".con");
    ff.style.display="none";
}
let blc = document.getElementById("blc");
function addb(){

}
blc.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("Name");
    let heading = document.getElementById("Heading");
    let tags = document.getElementById("tags");
    let content = document.getElementById("Content");
    const td=document.createTextNode(name.value);
    const td1=document.createTextNode(heading.value);
    const td2=document.createTextNode(tags.value);
    const td3=document.createTextNode(content.value);
    const toto=document.createElement('div');
    toto.className="blogblock";
    const toto1=document.createElement('div');
    toto1.className="bup";
    const toto2=document.createElement('div');
    toto2.className="img";
    const toto3=document.createElement('div');
    toto3.className="bname";
    const toto4=document.createElement('div');
    toto4.className="dropdown";
    const toto5=document.createElement('i');
    toto5.className="fa-solid fa-ellipsis-vertical";
    const toto6=document.createElement('div');
    toto6.className="dropdown-content";
    const toto7=document.createElement('li');
    toto7.className="del";
    const toto8=document.createElement('li');
    toto8.className="ed";
    const toto9=document.createElement('li');
    toto9.className="rep";
    const toto10=document.createElement('div');
    toto10.className="bcontent";
    const toto11=document.createElement('div');
    toto11.className="btags";
    const toto12=document.createElement('a');
    const toto13=document.createElement('div');
    toto13.className="breaction";
    const toto14=document.createElement('button');
    toto14.className="btn";
    const toto15=document.createElement('button');
    toto15.className="btn";
    const toto16=document.createElement('input');
    toto16.className="bsave";
    
    toto.appendChild(toto1);
    toto1.appendChild(toto2);
    

    }
  );