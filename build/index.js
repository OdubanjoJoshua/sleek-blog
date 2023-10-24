'use-strict';

const homeUser = document.getElementById('homeUser');
const homeUserOption = document.getElementById('homeUserOption');

const navToggleButton = document.querySelector('.toggleButton'),
navToggleButtonOpen = document.querySelector('.navToggleButtonOpen'),
navToggleButtonClose = document.querySelector('.navToggleButtonClose'),
mobileNavLink = document.querySelector('.mobileNavLink'),
hiddenUserOptionSign = document.querySelector('#hiddenUserOptionSign'),
hiddenUserOptionLog = document.querySelector('#hiddenUserOptionLog');


const homeUserActive = function(e){
    if(homeUserOption.classList.contains('hidden')){
        homeUserOption.classList.remove('hidden');
        console.log(homeUserOption.classList.contains('hidden'));
    }
};

const homeUserDeactive = function(e){
    if(e.target){
        homeUserOption.classList.add('hidden');
    };
}

const showNavToggleButtonOpen = function(e){
    if(!navToggleButtonOpen.classList.contains('hidden')){
        console.log(e.target);
        // navToggleButtonOpen.classList.add('hidden')
        navToggleButtonOpen.classList.toggle('hidden')
        navToggleButtonClose.classList.toggle('hidden')
        // navToggleButtonClose.classList.remove('hidden')
        mobileNavLink.classList.add('opacity-100', 'top-[80px]');
    } else {
        console.log(e.target);
        // navToggleButtonOpen.classList.remove('hidden')
        navToggleButtonOpen.classList.toggle('hidden')
        // navToggleButtonClose.classList.add('hidden')
        navToggleButtonClose.classList.toggle('hidden')
        mobileNavLink.classList.remove('opacity-100', 'top-[-400px]');
    }
}

// const showNavToggleButtonClose = function(e){
//     console.log(e.target)
//     navToggleButtonOpen.classList.remove('hidden')
// }

homeUser.addEventListener('mouseover', homeUserActive);
homeUser.addEventListener('mouseout', homeUserDeactive);

navToggleButton.addEventListener('click', showNavToggleButtonOpen)
// navToggleButton.addEventListener('click', showNavToggleButtonClose)