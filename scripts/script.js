//JavaScript File for The Yoga Club site.

//SURVEY PROCESS*************************************/
function show_questions(div_id) {
    document.getElementById('q-1').style.display = "none";
    document.getElementById('q-2').style.display = "none";
    document.getElementById('q-3').style.display = "none";
    document.getElementById('q-4').style.display = "none";
    document.getElementById('q-5').style.display = "none";

    document.getElementById(div_id).style.display = "block";
}
//SURVEY PROCESS*************************************/

//SEARCH EVENT***************************************/
function searchEvent() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('event-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("event-ul");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
//SEARCH EVENT***************************************/

//LIGHTBOX*******************************************/
// Open the Modal
function openModal() {
    document.getElementById('main_modal').style.display = "block";
}
    
// Close the Modal
function closeModal() {
    document.getElementById('main_modal').style.display = "none";
}
    
var slideIndex = 1;
showSlides(slideIndex);
    
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
    
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
    
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("thumbnail");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
//LIGHTBOX*******************************************/

//AWARDS*********************************************/
function displayAward(id, id2) {
    //get all children elements in awards flexbox
    var awardsChildren = document.getElementsByClassName('awards-child');

    //set display to none for all elements
    for (var i = 0; i < awardsChildren.length; i++) {
        awardsChildren[i].style.display = 'none';
    }

    //display only mousedover element and omit shadow
    document.getElementById(id).style.display = 'flex';
    document.getElementById(id).style.boxShadow = 'none';

    //display awards text related to selected recipient
    document.getElementById(id2).style.display = 'flex';

    //display back button
    document.getElementById('button-flex').style.display = "flex";
}

function stopDisplayAwards() {
    //get all children elements in awards flexbox
    var awardsChildren = document.getElementsByClassName('awards-child');
    var textElements = document.getElementsByClassName('awards-text');

    //set display to flex for all elements
    for (var i = 0; i < awardsChildren.length; i++) {
        if (i % 2 === 0) {
            awardsChildren[i].style.display = 'flex';
        }
    }

    //set display to none for all text elements
    for (var l = 0; l < textElements.length; l++) {
        textElements[l].style.display = 'none';
    }

    //hide back button
    document.getElementById('button-flex').style.display = 'none';
}
//AWARDS*********************************************/

//CONTACT********************************************/
function showContactReceipt() {
    document.getElementById('contact-box').style.display = 'none';
    document.getElementById('contact-receipt').style.display = 'block';
}
//CONTACT********************************************/

//DROWNDOWN MENUUE***********************************/
//toggle dropdown list on and off
function dropDown() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//DROWNDOWN MENUUE***********************************/

