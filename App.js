import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
// import * as firebase from 'firebase'
import reducer from './src/redux/reducers'
import AppContainer from './src/AppRouter'

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
// Initialize Firebase
/*const config = {
  apiKey: 'AIzaSyDYRItyFxvvhuh0C5Nhti2uVDj_Vfik9bU',
  authDomain: 'melijoapp-e449a.firebaseapp.com',
  databaseURL: 'https://melijoapp-e449a.firebaseio.com',
  projectId: 'melijoapp-e449a',
  storageBucket: 'melijoapp-e449a.appspot.com',
  messagingSenderId: '999835972333',
}
firebase.initializeApp(config)*/

const middlewares = [thunkMiddleware]
if (__DEV__) {
  const logger = createLogger()
  middlewares.push(logger)
}

function configureStores(initialState) {
  const enhancer = compose(applyMiddleware(...middlewares))
  return createStore(reducer, initialState, enhancer)
}

const store = configureStores({})

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default App
