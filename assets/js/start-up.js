
window.addEventListener('load', () =>{
    const loader =document.querySelector(".screenloader");
    loader.classList.add("screenloader-hidden");

    loader.addEventListener("transitionend", () =>{
        document.body.removeChild("screenloader")
    })
})



document.addEventListener('DOMContentLoaded', function() {
var startUpCardClick = document.querySelector('.start-up-card-click .supa0 .sup0');
var contentAppear = document.querySelector('.content-appear');
var crossImage = document.querySelector('.appear-cross img');

startUpCardClick.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    contentAppear.style.display = 'block';
});

crossImage.addEventListener('click', function() {
    contentAppear.style.display = 'none';
});
var cross = document.querySelector('.csss img');
cross.addEventListener('click', function() {
    contentAppear.style.display = 'none';
});
});


document.addEventListener('DOMContentLoaded', function() {
    var startUpCardClick = document.querySelector('.start-up-card-click .supa3 .sup3');
    var contentAppear = document.querySelector('.content-appear1');
    var crossImage = document.querySelector('.appear-cross1 img');
    
    startUpCardClick.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior
        contentAppear.style.display = 'block';
    });
    
    crossImage.addEventListener('click', function() {
        contentAppear.style.display = 'none';
    });
    var cross = document.querySelector('.csss1 img');
    cross.addEventListener('click', function() {
        contentAppear.style.display = 'none';
    });
    });
    
    
document.addEventListener('DOMContentLoaded', function() {
    var startUpCardClick = document.querySelector('.start-up-card-click .supa2 .sup2');
    var contentAppear = document.querySelector('.content-appear2');
    var crossImage = document.querySelector('.appear-cross2 img');
    
    startUpCardClick.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior
        contentAppear.style.display = 'block';
    });
    
    crossImage.addEventListener('click', function() {
        contentAppear.style.display = 'none';
    });
    var cross = document.querySelector('.csss2 img');
    cross.addEventListener('click', function() {
        contentAppear.style.display = 'none';
    });
    });
    
    
document.addEventListener('DOMContentLoaded', function() {
    var startUpCardClick = document.querySelector('.start-up-card-click .supa1 .sup1');
    var contentAppear = document.querySelector('.content-appear3');
    var crossImage = document.querySelector('.appear-cross3 img');

    startUpCardClick.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior
        contentAppear.style.display = 'block';
    });
    
    crossImage.addEventListener('click', function() {
        contentAppear.style.display = 'none';
    });

    var cross = document.querySelector('.csss3 img');
    cross.addEventListener('click', function() {
        contentAppear.style.display = 'none';
    });
    
    });
    
  
  