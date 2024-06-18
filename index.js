(() => {
    let isInited = false;

    document.addEventListener('keypress', function(event) {
        if (event.code === 'KeyT' && !isInited) {
            const channel = prompt('Введите имя канала');
            if (!channel) {
                alert('Нет имени калана :(');
                return;
            }

            var iframe = document.createElement('iframe');
            
            iframe.src = `https://www.giambaj.it/twitch/jchat/v2/?channel=${channel}&animate=true&fade=30&size=1&font=1&shadow=1`;
            iframe.width = '30%';
            iframe.height = '95%';
            
            iframe.style.position = 'absolute';
            iframe.style.top = '0px';
            iframe.style.right = '0px';
            iframe.style.border = 'none';
            iframe.style.opacity = '0.5';
            
            document.body.appendChild(iframe);
            alert('READY.');
        }
    });
})();
