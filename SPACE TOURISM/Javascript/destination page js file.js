const destinationImages = document.getElementById("destinationImages");
const destinationTitle = document.getElementById("destinationTitle");
const destinationInfo = document.getElementById("destinationInfo");
const moonDestination = document.getElementById("moonDestination");
const marsDestination = document.getElementById("marsDestination");
const europaDestination = document.getElementById("europaDestination");
const titanDestination = document.getElementById("titanDestination");
const destinationPageBody = document.getElementById("destinationPageBody");
const closeMenu = document.getElementById("closeMenuIcon");
const menu = document.getElementById("nav-menu-container");
const burgerIcon = document.getElementById("burger-icon");



   


//slides open the mobile navigation bar into view onclick. 
burgerIcon.onclick=()=>{
menu.style.width="65%";
   }
 
   //closes the mobile navigation view onclick.
closeMenu.onclick=()=>{
    menu.style.width="0";
    }


        // DESTINATION PAGE SCRIPTS.
moonDestination.onclick=()=>{
destinationImages.src="assets/destination/image-moon.png";
destinationImages.alt="moon image"
destinationTitle.innerHTML="MOON";
destinationInfo.innerHTML= "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
}

marsDestination.onclick=()=>{
destinationImages.src="assets/destination/image-mars.png";
destinationImages.alt="mars image"
destinationTitle.innerHTML="MARS";
destinationInfo.innerHTML= "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
}

europaDestination.onclick=()=>{
destinationImages.src="assets/destination/image-europa.png";
destinationImages.alt="europa image"
destinationTitle.innerHTML="EUROPA";
destinationInfo.innerHTML= "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
}

titanDestination.onclick=()=>{
destinationImages.src="assets/destination/image-titan.png";
destinationImages.alt="titan image"
destinationTitle.innerHTML="TITAN";
destinationInfo.innerHTML="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn." 
}


