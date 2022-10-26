
    const filled = document.querySelector(".filled")

    function update(){
        filled.style.width = `${((window.scrollY)/(document.body.scrollHeight - window.innerHeight)*100)}%`
        console.log(filled.style.width)
        // document.querySelector(".pro-value").textContent = filled.style.width;
        requestAnimationFrame(update)
    }
    update()


let btn = document.querySelector(".close-btn>h1>button")
btn.style.color="red"
btn.addEventListener("click",data)
function data(){
    //console.log("ehlo")
    document.querySelector("#check").checked=false
}

const text = document.querySelector(".sec-text")
const textloadFun=()=>{
    setTimeout(()=>{
        text.textContent="Web Developer"
    },0)
    setTimeout(()=>{
        text.textContent="Full Stack Web Developer"
    },4000)

}
textloadFun()
setInterval(textloadFun,8000)
console.log(document.querySelector("#check").checked)