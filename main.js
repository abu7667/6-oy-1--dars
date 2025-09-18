document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const lightBtn = document.getElementById('lightBtn');
  const darkBtn = document.getElementById('darkBtn');
  const navLinks = document.querySelectorAll('nav a');
  const logo = document.querySelector('.logo');

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.style.backgroundColor = '#000';
    body.style.color = 'white';
    lightBtn.style.backgroundColor = '#cccccc';
    darkBtn.style.backgroundColor = '#FFA500';
    navLinks.forEach(link => link.style.color = 'white');
    logo.style.color = 'white';
  } else {
    body.style.backgroundColor = '#d4c7b3';
    body.style.color = '#000';
    lightBtn.style.backgroundColor = '#FFA500';
    darkBtn.style.backgroundColor = '#cccccc';
    navLinks.forEach(link => link.style.color = '#000');
    logo.style.color = '#000';
  }

  lightBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#d4c7b3';
    body.style.color = '#000';
    lightBtn.style.backgroundColor = '#FFA500';
    darkBtn.style.backgroundColor = '#cccccc';
    navLinks.forEach(link => link.style.color = '#000');
    logo.style.color = '#000';
    localStorage.setItem('theme', 'light');
  });

  darkBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#000';
    body.style.color = 'white';
    lightBtn.style.backgroundColor = '#cccccc';
    darkBtn.style.backgroundColor = '#FFA500';
    navLinks.forEach(link => link.style.color = 'white');
    logo.style.color = 'white';
    localStorage.setItem('theme', 'dark');
  });
});