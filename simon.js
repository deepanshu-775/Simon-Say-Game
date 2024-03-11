let gameseq=[];
let userseq=[];
const score=[];
let btns=["pink","green","orange","blue"];
let started=false;
let level=0;
let p=document.querySelector("p");
document.addEventListener("keypress",function(){
    if(started==false){
console.log("game started");
started=true;
levelup();
}
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
   btn.classList.remove("flash")
    },250);
    
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
   btn.classList.remove("userflash")
    },250);
    
}
function levelup(){
    userseq=[];
    level++;
    p.innerText=`Level ${level}`;
    let randomidx=Math.floor(Math.random()*3);
    let randomcolor=btns[randomidx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    btnflash(randombtn);
}
function checkans(idx){

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        p.innerHTML=`Game Over!your score was <b>${level-1}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        score.push(level-1);
        let highscore=score[0];
        for(let i=1;i<score.length;i++){
            if(highscore<score[i]){
                highscore=score[i];
            }
            else if(highscore==0){
                highscore=0;
            }
        }
        console.log(`the high score is ${highscore}`);
        reset();
    }
}

function btnpress(){
    console.log(this);
  let btn=this;
  userflash(btn);
  let usercolor=btn.getAttribute("id");
  userseq.push(usercolor);
  checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
    

}
function reset(){
    started=false;
    gameseq=[];
   userseq=[];
level=0; 
}