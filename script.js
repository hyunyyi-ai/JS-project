console.log("js 잘 실행됨");

const spanEl = document.querySelector("main h2 span");
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'Back-End Developer'];
let index = 0;
let currentTxt = txtArr[index].split("");

function writeTxt(){
    spanEl.textContent += currentTxt.shift(); //
    if(currentTxt.length !== 0){//
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{//
        currentTxt - spanEl.textContent.split("");
    setTimeout(deleteTxt,3000);
    }
}
writeTxt();
function deleteTxt(){
    currentTxt.pop(); //
    spanEl.textContent = currentTxt.join("");//
    if(currentTxt.length !== 0){//
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{//
        index = (index +1) % txtArr.length;
    currentTxt = txtArr[index].split("");
writeTxt();
    }
}
const headerEL = document.querySelector("header");
window.addEventListener('scroll', function(){
    const browerScrollY = window.pageYOffset;
    if(browerScrollY > 0){
        headerEL.classList.add("active");
    }else{
        headerEL.classList.remove("active");}
    });
const animationMove = function(selector) {  
    const targetEl = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    console.log("찍히고 있나");
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
};

const scrollMoveEl = document.querySelectorAll('[data-animation-scroll="true"]');
for(let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        console.log(target);
        animationMove(target);
    });
}   