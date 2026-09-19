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
// The official visit_count() helper avoids cross-origin fetch issues and
// supports the special TOTAL path for the whole site.
const visitCount = document.getElementById('visitCount');
if (visitCount) {
  const renderVisitCount = () => {
    if (!window.goatcounter || typeof window.goatcounter.visit_count !== 'function') return false;

    visitCount.innerHTML = '';
    window.goatcounter.visit_count({
      append: '#visitCount',
      path: 'TOTAL',
      type: 'html',
      no_branding: true,
      style: `
        div { display:inline !important; margin:0 !important; padding:0 !important; width:auto !important; height:auto !important; background:transparent !important; border:0 !important; color:inherit !important; font:inherit !important; }
        #gcvc-for, #gcvc-by { display:none !important; }
        #gcvc-views { color:inherit !important; font:inherit !important; font-weight:700 !important; }
      `
    });
    return true;
  };

  if (!renderVisitCount()) {
    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      if (renderVisitCount() || attempts >= 50) clearInterval(timer);
    }, 100);
  }
}
