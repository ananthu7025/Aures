document.addEventListener("DOMContentLoaded", function () {
    gsap.to('#videoplyr',{
        scrollTrigger:{
            trigger:"#main",
            start:"top top",
            scrub:2,
            pin:"#main"
        },
        width:"100%",
        ease:"Expo.easeInOut"
    })
    gsap.to('#one',{
        scrollTrigger:{
            trigger:"#main",
            start:"top top",
            scrub:3
        },
        left:"-600px",
        opacity:0
    })
    gsap.to('#holdr1',{
        scrollTrigger:{
            trigger:"#main",
            start:"top top",
            scrub:3
        },
        left:"-300px",
        opacity:0
    })
    gsap.to('#sx',{
        scrollTrigger:{
            trigger:"#main",
            start:"top top",
            scrub:2
        },
        right:"600px",
        opacity:0
    })
    gsap.to('#holdr2',{
        scrollTrigger:{
            trigger:"#main",
            start:"top top",
            scrub:3
        },
        right:"0px",
        opacity:0
    })
    document.querySelectorAll('.image-container img').forEach(img => {
        img.onclick = () => {
            document.getElementById('popup-image').src = img.src;
            document.querySelector('.popup-img').style.display = "flex";
        };
    });
    
    document.querySelector('.close-btn').addEventListener('click', () => {
        document.querySelector('.popup-img').style.display = "none";
        console.log("done");
    });
    
});
