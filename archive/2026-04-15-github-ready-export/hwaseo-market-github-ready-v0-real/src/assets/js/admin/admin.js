document.querySelectorAll('[data-count]').forEach((el) => {
  const type = el.dataset.count;
  fetch(`../data/${type}.json`)
    .then((r) => r.json())
    .then((items) => { el.textContent = Array.isArray(items) ? items.length : 0; })
    .catch(() => { el.textContent = '-'; });
});
