(function(){ 
// Start
console.info("Hello JS"); 
const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock")
digitalClock.appendChild(myNode);
//console.dir(myDate);

const updateClockHands = (myDate) => {
    const secondHand = document.getElementById("secondHand");
    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    secondHand.style.transform = `rotate(${rotSeconds}deg)`;
  };

updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toDateString() + "\n";
    myNode.innerHTML += myDate.toLocaleTimeString([], {
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit" 
    });
    updateClockHands(myDate);
};
setInterval(updateTime, 1000);
updateTime();

const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");
hrHand.style.backgroundColor = '#0f0';
const minutes = myDate.getSeconds();
const rotMinutes = minutes * 6 - 90;
minHand.style.transform = `rotate(${rotMinutes}deg)`

// End
})();