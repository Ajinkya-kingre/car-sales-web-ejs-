let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menubtn.onclick = () => {
    menubtn.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector('.login-form-container form').onsubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Here you can add code to handle the login form submission
    // For example, you can collect the form data and send it to a server for authentication
    // Once authenticated, you can redirect the user to the desired page

    console.log('Login form submitted!');
}

// Select the signup button and signup form container
const signupBtn = document.getElementById('signup-btn');
const signupFormContainer = document.querySelector('.signup-form-container');

// Add event listener to the signup button
signupBtn.addEventListener('click', () => {
    // Toggle the active class on the signup form container
    signupFormContainer.classList.toggle('active');
});

// Close the signup form when the close button is clicked
document.querySelector('#close-signup-btn').onclick = () => {
    signupFormContainer.classList.remove('active');
};

document.querySelector('.signup-form-container form').onsubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Here you can add code to handle the signup form submission
    // For example, you can collect the form data and send it to a server to create a new user account
    // After successful account creation, you can redirect the user to the login page or any other page

    console.log('Sign up form submitted!');
}



window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }

    menubtn.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
}

// search in chatgpt for explantion
document.querySelector('.home').onmousemove = (e) => {

    document.querySelectorAll('.home-parallax').forEach(element => {
        let speed = element.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        element.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });
};

document.querySelector('.home').onmouseleave = () => {

    document.querySelectorAll('.home-parallax').forEach(element => {

        element.style.transform = `translateX(0px) translateY(0px)`;

    });
};




let wrapper = document.querySelector('.wraper-box');
let activeBox = wrapper.querySelectorAll('.box');
let activeLable = document.querySelector('.activeCircle').querySelectorAll('.fa-circle')
let nextBtn = document.querySelector('#nextBtn');
let preBtn = document.querySelector('#preBtn');
let imgInd = 0;

nextBtn.onclick = ()=>{
    imgInd++;
    changeBox();
}

preBtn.onclick = ()=>{
    imgInd--;
    changeBox();
}

let changeBox = () =>{
    
    if(imgInd > activeBox.length - 1){
        imgInd = 0;
    } else if(imgInd < 0){
        imgInd = activeBox.length - 1;
    }

    for(let i = 0; i < activeBox.length; i++){
        if(i === imgInd){
            activeBox[i].classList.add('active');
            activeLable[i].classList.add('fa-solid');
            if(window.screen.width > 450){
                wrapper.style.transform = `translateX(${imgInd * -250}px)`;
            }
            
        } else{            
            activeBox[i].classList.remove('active');
            activeLable[i].classList.remove('fa-solid');
        }
    }
}





let fwrapper = document.querySelector('.featured-wrapper-box');
let fActBox = fwrapper.querySelectorAll('.box');
let FActLable = document.querySelector('.fActCircle').querySelectorAll('.fa-circle')
let fNextBtn = document.querySelector('#fNextBtn');
let fPreBtn = document.querySelector('#fPreBtn');

let fImgInd = 0;

fNextBtn.onclick = ()=>{
    fImgInd++;
    fChangeBox();
}

fPreBtn.onclick = ()=>{
    fImgInd--;
    fChangeBox();
}

let fChangeBox = () =>{
    
    if(fImgInd > fActBox.length - 1){
        fImgInd = 0;
    } else if(fImgInd < 0){
        fImgInd = fActBox.length - 1;
    }

    for(let i = 0; i < fActBox.length; i++){
        if(i === fImgInd){
            fActBox[i].classList.add('active');
            FActLable[i].classList.add('fa-solid');
            if(window.screen.width > 768){
                fwrapper.style.transform = `translateX(${fImgInd * -21}vw)`;
            }
            
        } else{            
            fActBox[i].classList.remove('active');
            FActLable[i].classList.remove('fa-solid');
        }
    }
}



let rWrapper = document.querySelector('.review-wrapper-box');
let rActBox = rWrapper.querySelectorAll('.box');
let rActLable = document.querySelector('.rActCircle').querySelectorAll('.fa-circle')
let rNextBtn = document.querySelector('#rNextBtn');
let rPreBtn = document.querySelector('#rPreBtn');

let rImgInd = 0;

rNextBtn.onclick = ()=>{
    rImgInd++;
    rChangeBox();
}

rPreBtn.onclick = ()=>{
    rImgInd--;
    rChangeBox();
}

let rChangeBox = () =>{
    
    if(rImgInd > rActBox.length - 1){
        rImgInd = 0;
    } else if(rImgInd < 0){
        rImgInd = rActBox.length - 1;
    }
    for(let i = 0; i < rActBox.length; i++){
        if(i === rImgInd){
            rActBox[i].classList.add('active');
            rActLable[i].classList.add('fa-solid');
            if(window.screen.width > 768){
                rWrapper.style.transform = `translateX(${rImgInd * -20}vw)`;
            }  
        } else{            
            rActBox[i].classList.remove('active');
            rActLable[i].classList.remove('fa-solid');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let exploreBtn = document.querySelector('.explore-btn');
    let checkOutBtns = document.querySelectorAll('.check-out-btn');

    exploreBtn.onclick = () => {
        window.location.href = '/car-listing.ejs';
    };

    checkOutBtns.forEach(btn => {
        btn.onclick = () => {
            window.location.href = '/cars-detail.ejs';
        };
    });
});


// signup submit
// Function to sign up a user
function signUpUser(userData) {
    // Construct the request body
    const requestBody = JSON.stringify(userData);

    // Make a POST request to the signup endpoint
    fetch('https://job.ltr-soft.com/User_Detail/user_insert.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: requestBody
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the response data
        console.log(data);
        // You can do something with the response data here, such as showing a success message to the user
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the request:', error);
        // You can display an error message to the user or perform other error handling actions
    });
}
