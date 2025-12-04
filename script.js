 
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
 
    const href = link.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

 
(function highlightActive(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });
})();
