/* Uses the host site's existing analytics; this preview sends no analytics. */
(() => {
  const report = (name, properties) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, { profile_version: 'mobile_v1', ...properties });
    }
  };
  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest('a[data-action]') : null;
    if (link) report('profile_link_click', { link_id: link.dataset.action });
  });
  document.querySelectorAll('details[data-case]').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (detail.open) report('profile_proof_expand', { case_id: detail.dataset.case });
    });
  });
})();
