
(function(){
  const year = document.querySelector('[data-year]');
  if(year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('a[href="#top"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}));
})();
