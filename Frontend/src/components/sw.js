self.addEventListener('push', function (event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Nova Notificação';
    const options = {
      body: data.body || 'Você recebeu uma nova mensagem!',
      icon: '/logo192.png', // Substitua pelo ícone do seu site
      badge: '/badge.png',
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });
  
  self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    // Personalize as ações de clique na notificação, se necessário
    event.waitUntil(
      clients.openWindow('/') // Altere para a URL desejada ao clicar na notificação
    );
  });  