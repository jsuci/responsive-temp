// Get the modal
var modal = document.getElementById("myModal");

// Get modal-content
var modal_content = document.getElementsByClassName("modal-content")[0]

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal_content.style.animation = 'shake 0.5s';
    modal_content.style.animationIterationCount = '1';
}


// When the user hovers to x  button to close
span.onmousemove = function () {
    modal_content.style.animation = 'none';
    modal_content.style.animationIterationCount = 'none';
    modal_content.style.animationName = 'none';
    modal_content.style.animationDuration = 'none';
}
    

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal_content.style.animation = 'shake 0.5s';
//         modal_content.style.animationIterationCount = '1';
//     }
// }

// modal.onmouseout = function (event) {
//     if (event.target == modal) {
//         modal_content.style.animation = 'none';
//         modal_content.style.animationIterationCount = 'none';
//         modal_content.style.animationName = 'none';
//         modal_content.style.animationDuration = 'none';
//     }
// }


// Remove bootstrap btn-danger styling
document.getElementsByClassName('btn')[0].classList.remove('btn-danger');