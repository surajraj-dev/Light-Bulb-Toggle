/**
 * Write your challenge solution here
 */
const body = document.body;
const toggleBtn = document.getElementById('toggleButton')
// console.log(toggleBtn.innerText)
const bulb = document.getElementById('bulb')
// console.log(bulb);
const bulbStatus = document.getElementById('status')


function bulbFunctionality(){
    if(bulbStatus.innerText === 'Status: Off'){
        // it means bulb glow

        //this line basically define we have add .off class properties inside the bulb dinamically
        bulb.classList.remove('off') 
        body.classList.add('dark-mode');  
        toggleBtn.innerText='Turn Off';
        bulbStatus.innerText = 'Status: On'

    } else{
        // it means bulb not glow
        bulb.classList.add('off')
        body.classList.remove('dark-mode');
        toggleBtn.innerText='Turn On';  
        bulbStatus.innerText = 'Status: Off';
    }

}
toggleBtn.addEventListener('click', bulbFunctionality)