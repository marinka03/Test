// FIRST SECTION

import Notiflix from 'notiflix';

const start = document.querySelector(".game-section-btn");
const container = document.querySelector(".js-container");

start.addEventListener("click", onClick);
function onClick(){
    const promises = [...container.children].map((item, idx)=>{
        start.disabled = true;
        item.textContent = "";
        const promise = createPromise(idx);
        promise
        .then((value)=>{
            item.textContent = value;
        }).catch((err)=>{
            item.textContent = err;
        })

        return promise;
    });
    Promise.allSettled(promises).then((promise)=>{
        const isAllRes = promise.every(({status})=> status === "fulfilled");
        const isAllRej = promise.every(({status})=> status === "rejected");
        
        setTimeout(()=>{
            if(isAllRes || isAllRej){
                Notiflix.Notify.success("Winner!!!");

            }else{
                Notiflix.Notify.failure("Try again");
            }
            start.disabled = false;
        }, 1000);
    })
}

function createPromise(delay){
    return new Promise((res,rej)=>{
        const random = Math.random();
        setTimeout(() => {
            if(random > 0.5){
                res("🤑")
            }else{
                rej("😈")
            }
        },delay * 1000)
    })
}

// -----------------------------------------------------------------------------------
// SECOND SECTION


