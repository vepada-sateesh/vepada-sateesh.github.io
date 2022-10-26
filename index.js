
    const filled = document.querySelector(".filled")

    function update(){
        filled.style.width = `${((window.scrollY)/(document.body.scrollHeight - window.innerHeight)*100)}%`
        console.log(filled.style.width)
        // document.querySelector(".pro-value").textContent = filled.style.width;
        requestAnimationFrame(update)
    }
    update()

