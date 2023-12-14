document.addEventListener("DOMContentLoaded" , ()=> {
    const main = document.querySelector(".container").innerHTML;
    document.querySelector("#btn").addEventListener("click" , ()=> {
        window.open("firstInterface.html",'_self')
    })
})