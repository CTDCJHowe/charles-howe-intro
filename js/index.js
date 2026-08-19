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

