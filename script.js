const container = document.querySelector('.container');
const sections = document.querySelectorAll('section');
const span = document.querySelector('.cards-wrapper') 

// add event listener and call function
container.addEventListener('scroll', highlightNavLink);


// sidebar a tag href=[#id] add class="blue-color" function declaration
function highlightNavLink() {  
  let scrollY = container.scrollTop;
// forEach循环 检查每个section是否有符合条件的
  sections.forEach((section) => {
    // 设置每个section到浏览器顶部的距离减少200，可以在滚动时差200距离时让效果实现
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    // 检查 section 是否在视口中
    // 每个section的sectionTop是固定的，由小到大 0-200 100vh-200 200vh-200
    // sectionHeight根据css设定都是100vh由浏览器页面高度决定，所有section都是相同的
    // scrollY会根据滚动距离逐渐变大
    // 符合 scrollY > sectionTop 和scrollY <= sectionTop + sectionHeight这两点，才能保证滚动轴在相应的section中实现，每次根据滚动的位置只有一个section为true
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      const sectionId = section.getAttribute('id');
      
      // 为对应的侧边栏导航链接添加特定的 CSS 类
      const navLink = document.querySelector(`.sidebar a[href="#${sectionId}"]`);
      if (navLink) {
        navLink.classList.add('blue-color');
      }
    } else {
      // 如果不在视口中，移除特定的 CSS 类
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.sidebar a[href="#${sectionId}"]`);
      if (navLink) {
        navLink.classList.remove('blue-color');
      }
    }
  });
}

// three words cycles add animation flip-out
// const words = ["creator","player","coder"]
// let index = 0
// function cycleWords(){
//   console.log('this fn works');
//   span.textContent=words[index]
//   span.classList.remove("word-flip-over")
//   void span.offsetWidth
//   span.classList.add("word-flip-over")
//   // 用数组的长度取模，得到值的范围就是数组index的范围
//   index = (index+1) % words.length
  
//   setTimeout(cycleWords,3000)
// }
// cycleWords()