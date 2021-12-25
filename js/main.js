/* Prikazi meni Y sakrij */ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/* Prikazi */ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/* Sakrij */
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/* Aktivan i sklanja meni */
const navLink = document.querySelectorAll('.nav_link');   

function linkAction(){
  /* Aktivan link */
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Uklanja meni - telefon*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* FORMA */
function validateForm() {
  var x = document.forms["mform"]["fname"].value;
  var y = document.forms["mform"]["lname"].value;
  
  if (x == "") {
    window.alert("Name must be filled out");
    return false;
  }

  if (y == "") {
      window.alert("Last name must be filled out");
      return false;
 }

 var dateString = document["mform"]["mail"].value;
 var parts = dateString.split("/");
 var day = parseInt(parts[1]);
 var month = parseInt(parts[0]);
 var year = parseInt(parts[2]);
 if(year > 2003){
     alert("18+");
     return false;
 }
}

/* Povecava i smanjuje slike na stranici cast and characters*/
function sizePlus(x){
  x.style.width = "240px"
  x.style.height = "320px"
}
function sizeMinus(x){
  x.style.width = "160px"
  x.style.height = "240px"
}
/* Popup prozor sa unetim podacima*/
let forma = document.forms["mform"];
// console.log(forma);
let dugme = document.getElementById("prijava");
dugme.addEventListener('click', function(){
  alert(`poslata prijava: ${document.forms["mform"]['fname'].value} 
  ${document.forms["mform"]['lname'].value} 
  ${document.forms["mform"]['mail'].value}
  ${document.forms["mform"]['gander'].value}
  ${document.forms["mform"]['date'].value}
  ${document.forms["mform"]['parts'].value}
  ${document.forms["mform"]['partss'].value}`
  );
})

// JQUERY ABOUT STRANA
// $(document).ready(function(){
//   $('#btn1').on("click",function(e){
//    $('#myImg').toggle('slow');
//   });
// });

// JQUERY slider
// $('.slider').slick();