window.addEventListener('beforeunload', (event) => {
    event.returnValue = 'Are you sure you want to leave Webui?';
});