// document.addEventListener("DOMContentLoaded", function() {
//     var image = document.querySelector('.side-nav-item-about a span img');
//     var aboutDrop = document.querySelector('.side-about-drop');

//     image.addEventListener('click', function(event) {
//         event.preventDefault(); 
//         event.stopPropagation(); 
//         aboutDrop.classList.toggle('active');
        
//         // Change image source
//         if (image.src.includes('/img/add.png')) {
//             image.src = '/assets/img/arrow-up.png'; 
//         } else {
//             image.src = '/assets/img/add.png'; 
//         }
//     });


    
//     // Close dropdown when clicking outside of it
//     document.addEventListener('click', function(event) {
//         if (!aboutDrop.contains(event.target) && !image.contains(event.target)) {
//             aboutDrop.classList.remove('active');
//             // Change image back to original source
//             image.src = '/img/add.png'; 
//         }
//     });
// });
// //==================================

// document.addEventListener("DOMContentLoaded", function() {
//     var imageIncub = document.querySelector('.side-nav-item-incub a span img');
//     var incubDrop = document.querySelector('.side-about-drop-incub');

//     imageIncub.addEventListener('click', function(event) {
//         event.preventDefault(); 
//         event.stopPropagation(); 
//         incubDrop.classList.toggle('incub-active');
        
//         // Change image source
//         if (imageIncub.src.includes('/img/add.png')) {
//             imageIncub.src = '/assets/img/arrow-up.png'; 
//         } else {
//             imageIncub.src = '/assets/img/add.png'; 
//         }
//     });

//     // Close the incubation dropdown when clicking outside of it
//     document.addEventListener('click', function(event) {
//         if (!incubDrop.contains(event.target) && !imageIncub.contains(event.target)) {
//             incubDrop.classList.remove('incub-active');
//             // Change image back to original source
//             imageIncub.src = '/img/add.png'; 
//         }
//     });
// });



















// document.addEventListener("DOMContentLoaded", function() {
//     var sidenavCross = document.querySelector('.sidenav-cross');
//     var sideNav = document.querySelector('.side-nav');

//     sidenavCross.addEventListener('click', function() {
//         this.style.display = 'none'; 
//         sideNav.style.display = 'none'; 
//     });
// });



// document.addEventListener("DOMContentLoaded", function() {
//     var sidenavCross = document.querySelector('.sidenav-cross');
//     var sideNav = document.querySelector('.side-nav');
//     var sidenavOpenBtn = document.querySelector('.sidenav-open-btn');

    
//     sidenavCross.addEventListener('click', function(event) {
//         event.preventDefault(); 
//         event.stopPropagation(); 

//         sideNav.style.display = 'none'; 
//     });

//     sidenavOpenBtn.addEventListener('click', function(event) {
//         event.preventDefault(); 
//         event.stopPropagation();

//         sideNav.style.display = (sideNav.style.display === 'none') ? 'block' : 'none';
//     });

 
//     document.addEventListener('click', function(event) {
//         if (!sideNav.contains(event.target) && event.target !== sidenavOpenBtn) {
//             sideNav.style.display = 'none'; 
//         }
//     });
// });










// document.addEventListener("DOMContentLoaded", function() {
//     var sideNav = document.querySelector('.side-nav');
//     var sidenavOpenBtn = document.querySelector('.sidenav-open-btn');
//     var sidenavCross = document.querySelector('.sidenav-cross');

//     // Function to toggle the visibility of the side navigation
//     function toggleSideNav() {
//         sideNav.style.display = (sideNav.style.display === 'none') ? 'block' : 'none';
//     }

//     // Event listener for the menu button to toggle the side navigation
//     sidenavOpenBtn.addEventListener('click', function(event) {
//         event.preventDefault(); 
//         event.stopPropagation();
//         toggleSideNav();
//     });

//     // Event listener to close the side navigation when clicking outside of it
//     document.addEventListener('click', function(event) {
//         if (!sideNav.contains(event.target) && event.target !== sidenavOpenBtn) {
//             sideNav.style.display = 'none'; 
//         }
//     });

//     // Event listener for the cross icon to close the side navigation
//     sidenavCross.addEventListener('click', function(event) {
//         event.preventDefault(); 
//         event.stopPropagation();
//         sideNav.style.display = 'none'; 
//     });







//     // Function to toggle the visibility of the dropdown items
//     function toggleDropdown(dropdown) {
//         dropdown.classList.toggle('active');
//         var img = dropdown.previousElementSibling.querySelector('img');
//         img.src = (img.src.includes('/img/add.png')) ? '/assets/img/arrow-up.png' : '/assets/img/add.png';
//     }

//     // Event listener for toggling the About dropdown
//     var aboutDropdown = document.querySelector('.side-about-drop');
//     var aboutDropdownBtn = document.querySelector('.side-nav-item-about a span img');
//     aboutDropdownBtn.addEventListener('click', function(event) {
//         event.preventDefault();
//         event.stopPropagation();
//         toggleDropdown(aboutDropdown);
//     });

//     document.addEventListener("DOMContentLoaded", function() {
//         var incubationDropdown = document.querySelector('.side-about-drop-incub');
//         var incubationDropdownBtn = document.querySelector('.side-nav-item-incub a span img');
    
//         incubationDropdownBtn.addEventListener('click', function(event) {
//             event.preventDefault();
//             event.stopPropagation();
//             toggleDropdown(incubationDropdown);
//         });
//     });
    
    
//     document.addEventListener("DOMContentLoaded", function() {
//         var addBtn = document.querySelector('.side-navbar-item-incub .plus');
//         var incubDrop = document.querySelector('.side-navbar-item-incub .side-about-drop-incub');
    
//         addBtn.addEventListener('click', function(event) {
//             event.preventDefault(); 
//             event.stopPropagation(); 
//             incubDrop.classList.toggle('incub-active');
            
//             // Change image source
//             if (addBtn.src.includes('/assets/img/add.png')) {
//                 addBtn.src = '/assets/img/arrow-up.png'; 
//             } else {
//                 addBtn.src = '/assets/img/add.png'; 
//             }
//         });
    
//         // Close dropdown when clicking outside of it
//         document.addEventListener('click', function(event) {
//             if (!incubDrop.contains(event.target) && !addBtn.contains(event.target)) {
//                 incubDrop.classList.remove('incub-active');
//                 // Change image back to original source
//                 addBtn.src = '/assets/img/add.png'; 
//             }
//         });
//     });
    

// document.addEventListener("DOMContentLoaded", function() {
//     var sideNav = document.querySelector('.side-nav');
//     var sidenavOpenBtn = document.querySelector('.sidenav-open-btn');
//     var sidenavCross = document.querySelector('.sidenav-cross');

//     // Function to toggle the visibility of the side navigation
//     function toggleSideNav() {
//         sideNav.style.display = (sideNav.style.display === 'none') ? 'block' : 'none';
//     }

//     // Event listener for the menu button to toggle the side navigation
//     sidenavOpenBtn.addEventListener('click', function(event) {
//         event.preventDefault(); 
//         event.stopPropagation();
//         toggleSideNav();
//     });

//     // Event listener to close the side navigation when clicking outside of it
//     document.addEventListener('click', function(event) {
//         if (!sideNav.contains(event.target) && event.target !== sidenavOpenBtn) {
//             sideNav.style.display = 'none'; 
//         }
//     });

//     // Event listener for the cross icon to close the side navigation
//     sidenavCross.addEventListener('click', function(event) {
//         event.preventDefault(); 
//         event.stopPropagation();
//         sideNav.style.display = 'none'; 
//     });
// });

// // Function to toggle the visibility of the dropdown items
// function toggleDropdown(dropdown) {
//     dropdown.classList.toggle('active');
//     var img = dropdown.previousElementSibling.querySelector('img');
//     img.src = (img.src.includes('/img/add.png')) ? '/assets/img/arrow-up.png' : '/assets/img/add.png';
// }

// document.addEventListener("DOMContentLoaded", function() {
//     // Event listener for toggling the About dropdown
//     var aboutDropdown = document.querySelector('.side-about-drop');
//     var aboutDropdownBtn = document.querySelector('.side-nav-item-about a span img');
//     aboutDropdownBtn.addEventListener('click', function(event) {
//         event.preventDefault();
//         event.stopPropagation();
//         toggleDropdown(aboutDropdown);
//     });

//     // Event listener for toggling the Incubation dropdown
//     var incubationDropdown = document.querySelector('.side-about-drop-incub');
//     var incubationDropdownBtn = document.querySelector('.side-nav-item-incub a span img');
//     incubationDropdownBtn.addEventListener('click', function(event) {
//         event.preventDefault();
//         event.stopPropagation();
//         toggleDropdown(incubationDropdown);
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     var addBtn = document.querySelector('.side-navbar-item-incub .plus');
//     var incubDrop = document.querySelector('.side-navbar-item-incub .side-about-drop-incub');

//     addBtn.addEventListener('click', function(event) {
//         event.preventDefault(); 
//         event.stopPropagation(); 
//         incubDrop.classList.toggle('incub-active');
        
//         // Change image source
//         if (addBtn.src.includes('/assets/img/add.png')) {
//             addBtn.src = '/assets/img/arrow-up.png'; 
//         } else {
//             addBtn.src = '/assets/img/add.png'; 
//         }
//     });

//     // Close dropdown when clicking outside of it
//     document.addEventListener('click', function(event) {
//         if (!incubDrop.contains(event.target) && !addBtn.contains(event.target)) {
//             incubDrop.classList.remove('incub-active');
//             // Change image back to original source
//             addBtn.src = '/assets/img/add.png'; 
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    var sideNav = document.querySelector('.side-nav');
    var sidenavOpenBtn = document.querySelector('.sidenav-open-btn');
    var sidenavCross = document.querySelector('.sidenav-cross');

    // Function to toggle the visibility of the side navigation
    function toggleSideNav() {
        sideNav.style.display = (sideNav.style.display === 'none') ? 'block' : 'none';
    }

    // Event listener for the menu button to toggle the side navigation
    sidenavOpenBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        event.stopPropagation();
        toggleSideNav();
    });

    // Event listener to close the side navigation when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!sideNav.contains(event.target) && event.target !== sidenavOpenBtn) {
            sideNav.style.display = 'none'; 
        }
    });

    // Event listener for the cross icon to close the side navigation
    sidenavCross.addEventListener('click', function(event) {
        event.preventDefault(); 
        event.stopPropagation();
        sideNav.style.display = 'none'; 
    });

    // Function to toggle the visibility of the dropdown items
    function toggleDropdown(dropdown) {
        dropdown.classList.toggle('active');
        var img = dropdown.previousElementSibling.querySelector('img');
        img.src = (img.src.includes('/img/add.png')) ? '/assets/img/arrow-up.png' : '/assets/img/add.png';
    }

    // Event listener for toggling the About dropdown
    var aboutDropdown = document.querySelector('.side-about-drop');
    var aboutDropdownBtn = document.querySelector('.side-nav-item-about a span img');
    aboutDropdownBtn.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        toggleDropdown(aboutDropdown);
    });



    
});



    
// Function to toggle the visibility of the incubation dropdown
document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle the visibility of the incubation dropdown
    function toggleIncubationDropdown() {
        var incubationDropdown = document.querySelector('.side-about-drop-incub');
        var incubationDropdownBtn = document.querySelector('.side-nav-item-incub a span img');

        // Toggle the visibility of the incubation dropdown
        incubationDropdown.classList.toggle('incub-active');

        // Change the image src to indicate the dropdown state
        var img = incubationDropdownBtn;
        img.src = (incubationDropdown.classList.contains('incub-active')) ? 'assets/img/arrow-up.png' : 'assets/img/add.png';
    }

    // Event listener for toggling the incubation dropdown
    var incubationDropdownBtn = document.querySelector('.side-nav-item-incub a span img');
    incubationDropdownBtn.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        toggleIncubationDropdown();
    });
});












//================================================================
navLinks.forEach(function(link) {
    var linkUrl = link.getAttribute('href');
    console.log('Current page URL:', currentPageUrl);
    console.log('Navigation link URL:', linkUrl);
    if (currentPageUrl.includes(linkUrl)) {
        link.classList.add('active');
    }
});























//on scroll animation

AOS.init();


  let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




window.addEventListener('load', () =>{
    const loader =document.querySelector(".screenloader");
    loader.classList.add("screenloader-hidden");

    loader.addEventListener("transitionend", () =>{
        document.body.removeChild("screenloader")
    })
})


function showslider(){
    const sidenav=document.querySelector('.sidenav');
    sidenav.style.display='flex';
}

function hideSidebar(){
    const sider = document.querySelector('.sidenav');
    sidenav.style.display='none';
}


// var typed =new Typed('.auto-type',{
//     strings : ['CA A. Raghavendra Rao'],
//     typeSpeed : 150,
//     backSpeed : 150,
//     loop : true,
    
// })

