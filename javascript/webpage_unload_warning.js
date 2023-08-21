window.addEventListener('beforeunload', (event) => {
  if (document.body.innerHTML.includes('Reloading...')) {
    return;
  }

  event.returnValue = 'Are you sure you want to leave Webui?';
});
