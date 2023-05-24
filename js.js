const enddate = "26 May 2024 10:00 AM"; //enter your target date
document.querySelector("#end_date").innerText = enddate;

const inputs = document.querySelectorAll("input"); // all input tags

function clock(){
    const end = new Date(enddate);
    const now = new Date(); 
    const diff = (end - now)/1000;
    
    if(diff < 0) return;

    // converts into days;
    const left_days = Math.floor(diff / 3600 / 24);
    inputs[0].value = left_days;

    // converts into hours
    const left_hours = Math.floor(diff / 366) % 24;
    inputs[1].value = left_hours;

    // converts into minutes
    const left_mitues = Math.floor(((diff / 60) % 60));
    inputs[2].value = left_mitues;

     // converts into minutes
     const left_seconds = Math.floor(((diff) % 60));
     inputs[3].value = left_seconds;
}
setInterval(() => {
    clock();
}, 1000);

clock();