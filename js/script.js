'use strict';
const year = document.getElementById('year');
year.textContent = new Intl.DateTimeFormat('es', {year: 'numeric', timeZone: 'Europe/Madrid'}).format(new Date());
const copyButton = document.getElementById('copy-phone');
const copyStatus = document.getElementById('copy-status');
const manualCopy = document.getElementById('manual-copy');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  copyStatus.textContent = '';
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('634048158');
    manualCopy.hidden = true;
    copyStatus.textContent = 'Número copiado: 634 048 158.';
  } catch {
    manualCopy.hidden = false;
    const input = document.getElementById('phone-value');
    input.focus();
    input.select();
    input.setSelectionRange(0, input.value.length);
    let copied = false;
    try { copied = document.execCommand('copy'); } catch { /* Keep the manual field available. */ }
    copyStatus.textContent = copied ? 'Número copiado: 634 048 158.' : 'Puedes copiar el número seleccionado.';
  }
});
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const fold = document.querySelector('.contact-fold');
  fold.classList.add('fold-pending');
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      fold.classList.replace('fold-pending', 'fold-open');
      observer.disconnect();
    }
  }, {threshold: 0.15});
  observer.observe(fold);
}
