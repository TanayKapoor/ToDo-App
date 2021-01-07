# Todo App
React and firebase based ToDo application.

## This app includes
 - React (Custom Hooks, Context)
 - Firebase
 - ~~React Testing Library~~
 
## Dependencies used
- firebase - 8.0.2
- moment - 2.24.0
- prop-types - 15.7.2

All dependencies are located in package.json, to make sure you have all of them run command
```
npm i
```
   ## Starting scripts
```
    npm start 
    npm buid
    npm test
    npm eject
```

This project is made to get a better understanding of React.

You can make contribution to project by raising an issue.

## Clone this repository

    git clone https://github.com/TanayKapoor/ToDo-App.git TODO-APP

## Before running
Before running create a file 

> firebase.js

in root directory with following code
```js
    import firebase from 'firebase/app'  
    import 'firebase/firestore';  
    const firebaseConfig = firebase.initializeApp({  
      apiKey: 'Your api key',  
      authDomain: 'Your Auth Domain',  
      databaseURL: 'Your Database URL',  
      projectId: 'Your Project ID',  
      storageBucket: 'Your storage bucket',  
      messagingSenderId: 'Your Sender ID',  
      appId: 'Your App ID',  
    });  
      export {firebaseConfig as firebase};
```
This code will be provided to you by firebase.

> Make sure to index your database before adding your user id to files. Random userId used by me in this project is '0TD1uiFZSC'


