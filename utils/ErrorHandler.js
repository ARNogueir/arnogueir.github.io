/**
 * Error Handler
 * Trata erros de forma centralizada e consistente
 */

class ErrorHandler {
    static handle(error, context = '') {
        const timestamp = new Date().toISOString();
        const message = error.message || String(error);

        const errorLog = {
            timestamp,
            context,
            message,
            stack: error.stack
        };

        // Log no console (apenas em desenvolvimento)
        if (typeof console !== 'undefined') {
            console.error(`[${timestamp}] ${context}:`, message);
        }

        // Aqui poderias enviar para um serviço de logging externo
        // await LoggingService.log(errorLog);

        return errorLog;
    }

    static showUserMessage(message) {
        // Mostra mensagem amigável ao utilizador
        const notification = document.createElement('div');
        notification.className = 'error-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff6b6b;
            color: white;
            padding: 16px;
            border-radius: 8px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
}

