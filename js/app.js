const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '×' : '☰';
  });
}
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.textContent = '☰';
}));


// Fetch the public total directly; tracking is independent of the display.
const visitCount = document.getElementById('visitCount');
if (visitCount) {
  fetch('https://tiagolab.goatcounter.com/counter/TOTAL.json')
    .then(response => {
      if (!response.ok) throw new Error('Counter unavailable');
      return response.json();
    })
    .then(data => {
      if (typeof data.count !== 'string' && typeof data.count !== 'number') throw new Error('Invalid counter');
      visitCount.textContent = String(data.count);
    })
    .catch(() => { visitCount.textContent = 'Unavailable'; });
}
