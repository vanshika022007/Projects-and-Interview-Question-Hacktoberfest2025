function positionNumbers() {
    const numbers = document.querySelectorAll(".number");
    const clockRadius = 140; 
    const clockCenter = 180; 

    numbers.forEach((num, index) => {
        let angle = index * 30; 
        let radians = angle * (Math.PI / 180); 
        
        
        let x = clockCenter + Math.cos(radians) * clockRadius - 15; 
        let y = clockCenter - Math.sin(radians) * clockRadius - 15; 

        num.style.left = `${x}px`;
        num.style.top = `${y}px`;
    });
}

positionNumbers();


function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minuteDeg = (minutes * 6) + (seconds * 0.1);
    const secondDeg = seconds * 6;

    document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();


