function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const page = document.getElementById('page-' + name);
  const nav  = document.getElementById('nav-' + name);

  if (page) page.classList.add('active');
  if (nav)  nav.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
