const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

if (menuToggle && mobileNav) {
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
// We fetch GoatCounter's public TOTAL JSON endpoint and place only the
// formatted number in our own footer. This avoids injecting GoatCounter's
// visitor-counter HTML into the footer.
const visitCount = document.getElementById('visitCount');
if (visitCount) {
  fetch('https://tiagolab.goatcounter.com/counter/TOTAL.json', {
    method: 'GET',
    cache: 'no-store'
  })
    .then(response => {
      if (!response.ok) throw new Error(`GoatCounter returned ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (data && typeof data.count !== 'undefined') {
        visitCount.textContent = data.count;
      }
    })
    .catch(() => {
      // Keep the placeholder if the public counter is temporarily unavailable.
    });
}
