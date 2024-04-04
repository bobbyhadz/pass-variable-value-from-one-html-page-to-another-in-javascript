// Pass a Variable from one HTML page to Another in JavaScript

console.log('bobbyhadz.com');

window.addEventListener('load', () => {
  // 👇️ for primitive variables
  const website = 'bobbyhadz.com';
  localStorage.setItem('website', website);

  // 👇️ for arrays, objects, etc
  const tasks = ['develop', 'test', 'ship'];
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
