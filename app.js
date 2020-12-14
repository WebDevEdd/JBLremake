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

function headphonesArrows(){
    //buttons
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    //headphone image
    const headphones = [];
    //headphones
    const blackheadphones = document.getElementById('blackheadphones')
    const blueheadphones = document.getElementById('blueheadphones')
    const redheadphones = document.getElementById('redheadphones')
    //push to array
    headphones.push(blackheadphones);
    headphones.push(blueheadphones);
    headphones.push(redheadphones);

    var colors =  ['Black', 'Blue', 'Red'];

    const colorSpan = document.getElementById('headphone-color');
    counter = 0;

    //cart
    const cart = document.querySelector('.products-container-cart');
    
    //add to cart btn
    const addToCart = document.querySelector('.add-to-cart');

    rightArrow.addEventListener('click', function(){
        var el1 = headphones[counter];
        el1.style.display = 'none';
        counter++;
        if (counter > 2){
            counter = 0;
        }
        var el2 = headphones[counter];
        el2.style.display = 'block';
        colorSpan.innerHTML = colors[counter];
    })
    leftArrow.addEventListener('click', function(){
        
        var el1 = headphones[counter];
        el1.style.display = 'none';
        counter--;
        if(counter < 0){
            counter = 2;
        }
        var el2 = headphones[counter];
        el2.style.display = 'block';
        colorSpan.innerHTML = colors[counter];
    })

    addToCart.addEventListener('click', function(){
        var newRow = document.createElement('div');
        newRow.classList.add('product-row');

        var newImg = document.createElement('img');
        newImg.src = headphones[counter].src;
        newImg.classList.add('cart-row-img');

        var newPrice = document.createElement('h3');
        newPrice.classList.add('headphones-price');
        newPrice.innerHTML = '299.99';

        var newQty = document.createElement('p');
        newQty.classList.add('qty-cart');
        newQty.innerHTML = '1';

        var closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'x';
        

        cart.appendChild(newRow);
        newRow.appendChild(newImg);
        newRow.appendChild(newPrice);
        newRow.appendChild(newQty);
        newRow.appendChild(closeBtn);

        closeBtn.addEventListener('click', function(){
            closeBtn.parentElement.remove();
        })
    })

}
headphonesArrows();

function scrollFunction(){
    //buttons
    const headphonesBtn = document.getElementById('headphones-section-btn');
    const homeaudioBtn = document.getElementById('homeaudio-section-btn');
    const speakersBtn = document.getElementById('speakers-section-btn');
    const heroBtn = document.querySelector('.hero-shop-now')

    //sections
    const headphones = document.querySelector('.products-section');
    const homeaudio = document.querySelector('.home-audio');
    const speaker= document.querySelector('.speakers');

    function scrollto(btn, section){
        btn.addEventListener('click', function(){
            const topOfSection = section.getBoundingClientRect().top;
            window.scrollTo(0, topOfSection);

            console.log(topOfSection);
        })
    }
    scrollto(headphonesBtn, headphones);
    scrollto(homeaudioBtn, homeaudio);
    scrollto(speakersBtn, speaker);
    scrollto(heroBtn, headphones);
}
scrollFunction();