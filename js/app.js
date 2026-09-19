const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    mobileNav.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '×' : '☰';
  });
}
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  mobileNav.hidden = true;
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.textContent = '☰';
}));

// GoatCounter: show the site's total visit count in the footer.
// Use GoatCounter's official visitor_count() integration for the public TOTAL.
const visitCount = document.getElementById('visitCount');
if (visitCount) {
  const showVisitCount = () => {
    if (!window.goatcounter || !window.goatcounter.visit_count) return false;
    visitCount.textContent = '';
    window.goatcounter.visit_count({
      append: '#visitCount',
      path: 'TOTAL',
      type: 'html',
      no_branding: true,
    });
    return true;
  };

  if (!showVisitCount()) {
    const timer = setInterval(() => {
      if (showVisitCount()) clearInterval(timer);
    }, 100);
    setTimeout(() => clearInterval(timer), 10000);
  }
}
