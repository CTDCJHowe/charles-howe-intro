// Add footer element
const newFooter = document.createElement('footer');
newFooter.className = 'footer';
document.body.append(newFooter);
console.log(newFooter);

// Insert copyright text in footer
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
const copyrightSymbol = "\u00A9";
let copyrightMessage = `${copyrightSymbol} Charles Howe ${thisYear}`;
copyright.innerText = copyrightMessage;
footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS', 'Computer Hardware Knowledge'];

const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.getElementsByTagName('ul');

for (let i = 0; i < skills.length; i++) {
    const skillItem = document.createElement('li');
    skillItem.innerText = skills[i];
    skillsList[0].appendChild(skillItem);
};

const messageForm = document.querySelector('[name="leave_message"]');


messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log(userName, userEmail, userMessage);

    event.target.reset();

    const messageSection = document.getElementByID('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> <span>${userMessage}</span>`;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove()
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    event.target.reset();
});