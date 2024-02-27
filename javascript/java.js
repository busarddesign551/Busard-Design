// header animation effet
var header = function () {
    const navbarCollapsible = document.body.querySelector('.nav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('head')
    } else {
        navbarCollapsible.classList.add('head')
    }
}; 
header();
document.addEventListener('scroll', header);

// effet nav-bar
let btnmenu = document.querySelector('.nav-link'),
menu = document.querySelector('.bar-menu');

menu.addEventListener('click', function(){
    btnmenu.classList.toggle('mobile-nav');
})

btnmenu.onclick = (btnnav)=>{ //quand l'utilisateur clic sur la div filterItem
    if(btnnav.target.classList.contains('a')){ //si le user clic sur un elemnent ayant la class .item
        btnmenu.querySelector('.active').classList.remove('active');//enlever la class .active
        btnnav.target.classList.add('active');
    }
}



// animation du slide about
let indexvalue = 1;
showimg(indexvalue);
function btn_Img(e){
    showimg(indexvalue = e);
}
function side_slide(e){
    showimg(indexvalue += e);
}
function showimg(e) {
    var i;
    const img_about = document.querySelectorAll(".img-about");
    const btn_slide = document.querySelectorAll(".btn-slide .btm");
    if(e > img_about.length){indexvalue = 1}
    if(e < 1){indexvalue = img_about.length}
    for (let i = 0; i < img_about.length; i++) {
        img_about[i].style.display = "none";
    }
    for (let i = 0; i < btn_slide.length; i++) {
        btn_slide[i].classList.remove('active');
    }
    img_about[indexvalue-1].style.display = "block";
    btn_slide[indexvalue-1].classList.add("active");

}

// animation gallery service
const filterItem = document.querySelector('.items'),
filterimg = document.querySelectorAll('.img-service');

window.onload = ()=>{
    filterItem.onclick = (selecteItem)=>{ //quand l'utilisateur clic sur la div filterItem
        if(selecteItem.target.classList.contains('item')){ //si le user clic sur un elemnent ayant la class .item
            filterItem.querySelector('.active').classList.remove('active');//enlever la class .active
            selecteItem.target.classList.add('active');
            let filtername = selecteItem.target.getAttribute('data-name');
            filterimg.forEach((image)=>{
                let filterimages = image.getAttribute('data-name');
                if((filterimages == filtername) || (filtername == "All")){
                    image.classList.remove('hide');
                    image.classList.add('show');
                }else{
                    image.classList.add('hide');
                    image.classList.remove('show');
                }

            })
        }
    }
}