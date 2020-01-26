let reminders = [];
let allowedColors = ["red", "yellow", "green"]

//selectors
let title = document.getElementById('title');
let priority = document.getElementById('priority');
let color = document.getElementById('color');
color.insertAdjacentHTML('beforeBegin', "pick a color:  ");
let description = document.getElementById('description');

let addReminder = document.getElementById('add-reminder');
let shReminders = document.getElementById('show-reminders');

let tab = document.querySelector('tbody');

//Constructor
function Reminder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}

addReminder.addEventListener('click', function () {
    let titleVal = title.value;
    let priorityVal = priority.value;
    let colorVal = color.value;

    let descVal = description.value;


    let newReminder = new Reminder(titleVal, priorityVal, colorVal, descVal);
    if (newReminder.title === "" || newReminder.priority === "" || newReminder.color === "" || newReminder.description === "") {
        alert(`fill all fields pls!`);
    }else if(!allowedColors.includes(colorVal)){
        alert(`Pick allowed color!`);
    } else {
        reminders.push(newReminder);
    }


        reminders.push(newReminder);
        //console.log(reminders);
        //showReminders();
    });

shReminders.addEventListener('click', showReminders);

function showReminders() {
    tab.innerHTML = '';
    for (const reminder of reminders) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerText = reminder.title;
        td1.style.color = reminder.color;
        td2.innerText = reminder.priority;
        td2.style.color = reminder.color;
        td3.innerText = reminder.description;
        td3.style.color = reminder.color;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tab.appendChild(tr);
    }
}
