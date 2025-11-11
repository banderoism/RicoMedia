// open/close modals with data attributes
document.addEventListener('click', e => {
  const openBtn = e.target.closest('[data-open]');
  if (openBtn) {
    document.getElementById(openBtn.dataset.open).hidden = false;
  }

  const closeBtn = e.target.closest('[data-close]');
  if (closeBtn) {
    const modal = closeBtn.closest('.modal');
    // stop YouTube playback by resetting src
    modal.querySelectorAll('iframe').forEach(f => { f.src = f.src; });
    modal.hidden = true;
  }
});

// close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal:not([hidden])').forEach(modal => {
      modal.querySelectorAll('iframe').forEach(f => { f.src = f.src; });
      modal.hidden = true;
    });
  }
});

// optional: show a simple thanks toast if you redirect to #thanks after form submit
if (location.hash === '#thanks') {
  console.log('Thanks — I’ll reply within one business day.');
}
