function sideMenuAnimation(){
    //declare burger btn
    const burgerIcon = document.querySelector('.burger-icon');

    //declare lines
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');

    //declare side menu
    const sideMenu = document.querySelector('.nav-links-container');

    burgerIcon.addEventListener('click', function(){
        line1.classList.toggle('line1rotate');
        line2.classList.toggle('line2disappear');
        line3.classList.toggle('line3rotate');

        sideMenu.classList.toggle('sideMenuSlide');
    })

}
sideMenuAnimation();

function splashAnimation(){
    //herosection for mouse listener
    const heroSection = document.querySelector('.hero');
    //images
    const splashImg = document.getElementById('hero-splash');
    const splatter1 = document.getElementById('splatter1');
    const splatter2 = document.getElementById('splatter2');
    const splatter3 = document.getElementById('splatter3');
    //speeds
    const splashImgSpeed = splashImg.getAttribute('data-speed');
    const splatter1Speed = splatter1.getAttribute('data-speed');
    const splatter2Speed = splatter2.getAttribute('data-speed');
    const splatter3Speed = splatter3.getAttribute('data-speed');

    function imageMoveAway(el, speed){
        heroSection.addEventListener('mousemove', function(e){
            var mouseX = -e.pageX / speed;
            var mouseY = -e.pageY / speed;
            
            el.style.transform = 'translateX(' + mouseX + 'px) translateY(' + mouseY + 'px)';
        })
    }
    imageMoveAway(splashImg, splashImgSpeed);
    imageMoveAway(splatter1, splatter1Speed);
    imageMoveAway(splatter2, splatter2Speed);
    imageMoveAway(splatter3, splatter3Speed);

}
splashAnimation();