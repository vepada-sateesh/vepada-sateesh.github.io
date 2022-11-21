
    const filled = document.querySelector(".filled")

    function update(){
        filled.style.width = `${((window.scrollY)/(document.body.scrollHeight - window.innerHeight)*100)}%`
        // console.log(filled.style.width)
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
// console.log(document.querySelector("#check").checked)


// --------------------------github calender-------------------------------------



// ----------------------------------------------------------------------------------

    GitHubCalendar(".calendar", "vepada-sateesh");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "vepada-sateesh", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "vepada-sateesh", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${username}`)
       }
    }).then(r => r.text())


// --------------------------------------------------------------------------------------------------

    function sendMail(){
        // console.log(document.querySelector("#name").value)
        // console.log(document.querySelector("#email").value)
        // console.log(document.querySelector("#message").innerText)
        var params = {
            form_name:document.querySelector("#name").value,
            email_id:document.querySelector("#email").value,
            message:document.querySelector("#message").value,
        };
        // console.log(params)
        const serviceID = "service_039l49f";
        const templateID = "template_xxcs6xv";
        emailjs.send(serviceID,templateID,params)
        .then(function(res){
            alert(params.form_name,"Your mail sent successful")
        })
    }
    

    