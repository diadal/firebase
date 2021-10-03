Quasar Firebase Messaging App Extension
===

# Install
```bash
yarn add firebase
yarn add quasar-app-extension-firebase-messaging
quasar ext invoke firebase-messaging
```

# Setup
Create a file named `firebase-messaging-sw.js` in `src-pwa`
The package will concatenate the firebase imports at its start

```js
const firebaseConfig = {....};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
});

onBackgroundMessage(messaging, (payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/icons/favicon-32x32.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

```

Also, make the entry `firebase-messaging-sw.js` the entry service worker for your pwa
```js
// replace line
register(process.env.SERVICE_WORKER_FILE, {
--->
// by
register('firebase-messaging-sw.js', {
```
