const mainDiv = document.querySelector(".my-div");

document.addEventListener("mousemove", (e) => {
    move(e);
})

let move = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    console.log(x)

    mainDiv.style.left = x -100  + "px";
    mainDiv.style.top = y -100 + "px";
}