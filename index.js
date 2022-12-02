const openMenu=document.getElementsByClassName('icons')[0];
const navBar=document.getElementsByClassName('navbar')[0];
const closeMenu=document.getElementsByClassName('clode-menu')[0];
openMenu.addEventListener("click",function(){
    navBar.classList.toggle("active");
    if(navBar.classList.contains('active')){
            //  openMenu.style.display='none';
            //  closeMenu.style.display='block';
    }
})
// console.log(openMenu);