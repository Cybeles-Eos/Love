const yes = document.getElementById("yes");
const no = document.getElementById("no");
const img = document.querySelector(".love");

yes.onclick = function(){
  img.src = "img/output-onlinegiftools.gif";
  img.classList.add("new-width");
  document.getElementById("question").textContent = "I love you too!"
   yes.style.display = "none";
}
let reduceHeight = 6; // Initial height in rem
let reduceWidth = 2.5; // Initial width in rem

no.onclick = function() {
    let randY = Math.trunc((Math.random() * 24) + 1); // 25 max
    let randX = Math.trunc((Math.random() * 19) + 1); // 20 max
    console.log(randX);
    console.log(randY);

    // Ensure the element 'no' exists
    if (no) {
        let currentTop = parseInt(no.style.top) || 0;
        let currentLeft = parseInt(no.style.left) || 0;

        let diffTop = Math.abs(randY - currentTop);
        let diffLeft = Math.abs(randX - currentLeft);

        if (diffTop <= 3 || diffLeft <= 3) {
            no.style.top = `${randY + 4}rem`;
            no.style.left = `${randX + 4}rem`;
        } else {
            no.style.top = `${randY}rem`;
            no.style.left = `${randX}rem`;
        }

        // Reduce the width and height
        reduceWidth -= 0.5;
        reduceHeight -= 0.5;

        // Apply the new width and height to the element
        no.style.width = `${reduceWidth}rem`;
        no.style.height = `${reduceHeight}rem`;

        // Check if the element should disappear
        if (reduceWidth <= 0 || reduceHeight <= 0) {
            no.style.display = 'none';
        }
    }
}


