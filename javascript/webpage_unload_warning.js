window.addEventListener('beforeunload',e=> {
  let h1 = document.querySelector('body > h1')
  if (!h1 || 'Reloading...' !== h1.innerText) {
    e.preventDefault();
    e.returnValue = 'Are you sure you want to leave Webui?';
  }
});