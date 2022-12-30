const hambugerButton = document.getElementById('hamburger')
const navList = document.getElementById

function toggleButton() {
    navList.classList.toggle('show')

}

hamburgerButton.addEventListener('clicks', toggleButton)

let hour= 16;

if (hour=>6 && hour < 12)
    console.log('Good morning');
else if (hour=>12 && hour < 18)
    console.log('Good afternooon');
else 
    console.log ('Good evening');
    