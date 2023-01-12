const headerTextContainer = document.querySelector('.header');
const listTextContainer = document.querySelector('.list')
const menuElements = document.querySelectorAll('.menuElement')

const headerTexts = [
    "Track the time your employees spend on work and get detailed information",
    "See how productive your employees are and make sure they don't burnout",
    "Assign, manage and work with tasks on Task Management system",
    "Communicate with your team without leaving WebWork Time Tracker",
    "Keep your workspace organized with the help of HR tools",
    "Get detailed reports with all the tracked information"
]
const listTexts = [
    [
        "4 Screenshot Modes",
        "Idle Time Tracking",
        "Synchronized Tracking",
        "Billable Hours"
    ],
    [
        "App and Website Usage Tracking",
        "Activity Level Tracking",
        "Productivity Reports",
        "Work and Life Balance Popups"
    ],
    [
        "Create Tasks and Projects",
        "Set Deadlines",
        "Attach Files",
        "Customize Status Tags",
        "Create Subtasks"
    ],
    [
        "Team Chat",
        "Team Chat Mobile App",
        "Video Calls (beta)",
        "Whiteboard"
    ],
    [
        "Attendance Monitoring and Management",
        "Time Off Requests",
        "Leave and Holiday Management"
    ],
    [
        "Timesheet",
        "Statistics",
        "Activity Level",
        "Tasks",
        "Geolocation"
    ]
]
let activeIndex = 0;

const setList = (index) => {
    const list = listTexts[index].reduce((acc, item) => {
        return acc + `<li>${item}</li>`
    }, '')
    return `<ul>${list}</ul>`
}

const setInformation = (index) => {
    menuElements[activeIndex].classList.remove('activeElement')
    menuElements[index].classList.add('activeElement')
    activeIndex = index;
    headerTextContainer.innerHTML =
        `<span>
            ${headerTexts[index]}
        </span>`
    const list = setList(index)
    listTextContainer.innerHTML = list;
}

menuElements.forEach((item, index) => {
    item.addEventListener('click', () => {
        setInformation(index)
    })
})

setInformation(0)