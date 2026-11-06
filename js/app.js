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


// Embed the official public visitor counter.
const visitCount = document.getElementById('visitCount');
if (visitCount) {
  const counter = document.createElement('iframe');
  counter.src = 'https://tiagolab.goatcounter.com/counter/TOTAL.html';
  counter.title = 'Total site visits';
  counter.width = '200';
  counter.height = '80';
  counter.style.cssText = 'border:0;display:block';
  counter.scrolling = 'no';
  visitCount.replaceChildren(counter);
}
