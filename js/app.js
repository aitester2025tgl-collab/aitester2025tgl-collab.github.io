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
// GoatCounter exposes the public TOTAL counter as JSON when visitor-count
// sharing is enabled in the dashboard. This keeps the footer as plain text.
const visitCount = document.getElementById('visitCount');
if (visitCount) {
  fetch('https://tiagolab.goatcounter.com/counter/TOTAL.json', { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error(`GoatCounter HTTP ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (data && data.count !== undefined) {
        visitCount.textContent = data.count;
      }
    })
    .catch(() => {
      // Keep the placeholder unobtrusive if analytics is blocked.
      visitCount.textContent = '—';
    });
}
