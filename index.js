localStorage.setItem("theme", true);
const filled = document.querySelector(".filled");

function update() {
  filled.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  // console.log(filled.style.width)
  // document.querySelector(".pro-value").textContent = filled.style.width;
  requestAnimationFrame(update);
}
update();

let btn = document.querySelector(".close-btn>h1>button");
btn.style.color = "red";
btn.addEventListener("click", data);
function data() {
  //console.log("ehlo")
  document.querySelector("#check").checked = false;
}

const text = document.querySelector(".sec-text");
const textloadFun = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Full Stack Web Developer";
  }, 4100);
};
textloadFun();
setInterval(textloadFun, 8000);
// console.log(document.querySelector("#check").checked)

// --------------------------github calender-------------------------------------

// ----------------------------------------------------------------------------------

GitHubCalendar(".calendar", "vepada-sateesh");

// or enable responsive functionality:
GitHubCalendar(".calendar", "vepada-sateesh", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "vepada-sateesh", {
  proxy(username) {
    return fetch(`https://your-proxy.com/github?user=${username}`);
  },
});

// --------------------------------------------------------------------------------------------------

function sendMail() {
  // console.log(document.querySelector("#name").value)
  // console.log(document.querySelector("#email").value)
  // console.log(document.querySelector("#message").innerText)
  var params = {
    form_name: document.querySelector("#name").value,
    email_id: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };
  // console.log(params)
  const serviceID = "service_039l49f";
  const templateID = "template_xxcs6xv";
  emailjs.send(serviceID, templateID, params).then(function (res) {
    alert(params.form_name, "Your mail sent successful");
  });
}

// --------------------------------------------->

const welcomeloadfun = () => {
  let data = document.getElementById("welcome");
  setTimeout(() => {
    data.textContent = "welcome!";
    data.style.color = "#DC143C";
  }, 0);
  setTimeout(() => {
    data.textContent = "Hi, Iam sateesh vepada";
    data.style.color = "blue";
  }, 500);
  setTimeout(() => {
    data.textContent = "Iam a Full Stack Web Developer";
    data.style.color = "red";
  }, 1000);
};
welcomeloadfun();
setInterval(welcomeloadfun, 2000);

document.querySelector("#dark").addEventListener("click", () => {
  var theme = JSON.parse(localStorage.getItem("theme"));
  localStorage.setItem("theme", theme == true ? false : true);
  var theme = JSON.parse(localStorage.getItem("theme"));
  if (theme == false) {
      document.body.style.backgroundColor = "#48515D";
      document.body.style.backgroundImage = 'url("https://media.tenor.com/T7LNqpcJEccAAAAM/stars-night.gif")';

    document.body.style.color = "white";
    document.querySelector("#dark").innerHTML = '<i class="fa-regular fa-lightbulb"></i>';
      document.querySelector(".container").style.backgroundColor = "white";
      
    document.querySelector("nav").style.backgroundColor = "lightgrey";
    var techs = document.querySelectorAll("#tech-specs div p");
    for (i = 0; i < techs.length; i++) {
      techs[i].style.color = "black";
    }
    var techstk = document.querySelectorAll(".techstk");
    for (i = 0; i < techstk.length; i++) {
      techstk[i].style.color = "white";
    }
  } else if (theme == true) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelector("#dark").innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
      document.body.style.backgroundImage = `url("https://tse4.mm.bing.net/th?id=OIP.ENnUdNlkqn6ijT2uSFkwegHaE8&pid=Api&P=0")`;

    document.querySelector(".container").style.backgroundColor = "white";
    var techstk = document.querySelectorAll(".techstk");
    for (i = 0; i < techstk.length; i++) {
      techstk[i].style.color = "black";
    }
    document.querySelector("nav").style.backgroundColor = "white";
  }
});

// -----------------------jquery for links-------------
$(document).on("click", "ul li", function () {
  //console.log("cliked")
  $(this).addClass("active").siblings().removeClass("active");
});
