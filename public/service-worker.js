self.addEventListener('push', (event) => {
    console.log("New notification");
    let notification = event.data.json();
    self.registration.showNotification(
      notification.title, 
      notification.options
    ); 
  });
  