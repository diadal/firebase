Quasar Firebase Messaging App Extension
===

# Install
```bash
yarn add firebase
yarn add @diadal/quasar-app-extension-firebase-messaging
quasar ext invoke @diadal/firebase-messaging
```

# Setup
Create a file named `firebase-messaging-sw.js` in `src/assets`
with below contents

```js
import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';
import { onMessage } from 'firebase/messaging';


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
