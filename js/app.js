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

// GoatCounter: show the site's total visit count in the footer.
const visitCount = document.getElementById('visitCount');
if (visitCount) {
  fetch('https://tiagolab.goatcounter.com/counter/TOTAL.json')
    .then(response => response.ok ? response.json() : Promise.reject(new Error('Counter unavailable')))
    .then(data => {
      if (data && data.count) visitCount.textContent = data.count;
    })
    .catch(() => {
      // Keep the placeholder if analytics are blocked or temporarily unavailable.
    });
}
