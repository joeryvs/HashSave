setTimeout(function () {
    console.log(window.location.hostname);
    const imgs = document.querySelectorAll("img");
    console.log(imgs);
    console.log(imgs.length)
    imgs.forEach(img => {

        try {
            
            
            console.log("automatic download " + img.src);
            // create link and click
            const link = document.createElement("a");
            link.href = img.src;
            
            link.download = crypto.randomUUID();
            link.style.display = "hidden";
            link.onclick = "return false";
            link.addEventListener("click", (ev) => {
                return false
            });
            link.click();
            document.body.appendChild(link);
        } catch (error) {
            console.error(error);
        }
    })
},2000)