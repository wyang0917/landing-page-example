// sidebar a tag href=[#id] add class="blue-color"

console.log('123');
const sections = document.querySelectorAll('section')

window.addEventListener('scroll',highlightNavLink)
function highlightNavLink(){
  console.log('it is scrolling');
}



// const sections = document.querySelectorAll('section')
// console.log(sections);



// window.addEventListener('scroll',()=>{
//   let currentSection=''
//   sections.forEach(section=>{
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (window.scrollY >= sectionTop - sectionHeight / 3) {
//       currentSection = section.getAttribute('id');
//     }
//   })
//   const activeLink = document.querySelector(`.sidebar a[href="#${currentSection}"]`)
//   document.querySelectorAll('.sidebar nav a').forEach(link=>{
//     link.classList.remove('blue-color')
//   })
//   activeLink.classList.add('blue-color')
// })


