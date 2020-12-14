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