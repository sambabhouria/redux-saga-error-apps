import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ErrorGenerator from './components/ErrorGenerator'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })

ReactDOM.render(<ErrorGenerator value={store.getState()} action={action} />, document.getElementById('root'));


reportWebVitals();
