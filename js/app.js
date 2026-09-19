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
