import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { YellowBox } from 'react-native'
import reducers from '~/store/ducks'
import Reactotron from '~/reactotron'

YellowBox.ignoreWarnings(['Async Storage has been extracted'])

/* eslint-disable-next-line no-undef */
const store = __DEV__
    ? createStore(
          reducers,
          compose(
              applyMiddleware(thunkMiddleware),
              Reactotron.createEnhancer()
          )
      )
    : createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
