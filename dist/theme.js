// Set the theme before the first paint to avoid a light flash on dark pages.
try {
  const saved = localStorage.getItem('pd-theme');
  document.documentElement.dataset.theme = saved === 'dark' || saved === 'light' ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  localStorage.removeItem('pd-motion');
} catch {
  document.documentElement.dataset.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
