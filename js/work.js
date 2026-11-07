// Work page: open a game's images and details in a dialog.
const dialog = document.getElementById('gameDialog');
const content = dialog.querySelector('.dialog-content');
let lastTrigger = null;

document.querySelectorAll('[data-open]').forEach(btn => btn.addEventListener('click', () => {
  const tpl = document.querySelector(`template[data-gallery="${btn.dataset.open}"]`);
  if (!tpl) return;
  lastTrigger = btn;
  content.replaceChildren(tpl.content.cloneNode(true));
  content.querySelectorAll('img').forEach(img => { img.loading = 'eager'; });
  dialog.showModal();
}));

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { content.replaceChildren(); lastTrigger?.focus(); });
