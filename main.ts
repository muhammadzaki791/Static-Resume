
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

const toggleEducationBtn = document.getElementById('toggleEducationBtn') as HTMLButtonElement;
const educationSection = document.getElementById('educationSection') as HTMLDivElement;


toggleSkillsBtn.addEventListener('click', () => {  
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleSkillsBtn.textContent = 'Hide Skills Section';
  } else {
    skillsSection.style.display = 'none';
    toggleSkillsBtn.textContent = 'Show Skills Section';
  }
});

toggleEducationBtn.addEventListener('click', () => {
  if (educationSection.style.display === 'none') {
    educationSection.style.display = 'block';
    toggleEducationBtn.textContent = 'Hide Education Section';
  } else {
    educationSection.style.display = 'none';
    toggleEducationBtn.textContent = 'Show Education Section';
  }
});
