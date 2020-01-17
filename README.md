# React Native Template LS

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cd4ca9beaa8b4b00a33d9d4538078709)](https://app.codacy.com/manual/leandrosimoes/react-native-template-ls?utm_source=github.com&utm_medium=referral&utm_content=leandrosimoes/react-native-template-ls&utm_campaign=Badge_Grade_Dashboard)
[![npm version](https://badge.fury.io/js/react-native-template-ls.svg)](https://badge.fury.io/js/react-native-template-ls)
![Node.js Package](https://github.com/leandrosimoes/react-native-template-ls/workflows/Node%2Ejs%20Package/badge.svg)

This is my react-native initial setup that I have been using when I have to build a new application from scratch.

## Istalling

`react-native init YOUR_APPLICATION_NAME --template ls`

## Besides the default dependencies, what other dependencies are included?

```json
{
    "@types/prop-types": "^15.7.3",
    "@types/styled-components": "^4.1.19",
    "axios": "^0.19.0",
    "prop-types": "^15.7.2",
    "react-native-gesture-handler": "^1.4.1",
    "react-native-reanimated": "^1.3.0",
    "react-native-screens": "^1.0.0-alpha.23",
    "react-navigation": "3.13.0",
    "react-redux": "^7.1.1",
    "reactotron-core-client": "^2.8.6",
    "reactotron-react-native": "^4.0.2",
    "redux": "^4.0.4",
    "redux-thunk": "^2.3.0",
    "styled-components": "^4.4.0"
}
```

## Besides the default DEV dependencies, what other DEV dependencies are included?

```json
{
    "babel-plugin-root-import": "^6.4.1",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-defaults": "^9.0.0",
    "eslint-config-prettier": "^6.3.0",
    "eslint-import-resolver-babel-plugin-root-import": "^1.1.1",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-react": "^7.15.0",
    "eslint-plugin-react-hooks": "^2.1.1",
    "prettier": "^1.18.2",
    "reactotron-redux": "^3.1.2"
}
```

## Aditional configurations

### Android

#### This is necessary to enable the the react-native-gesture-handler (for example the gestures to open the drawer navigation)

`android/app/src/main/java/com/YOUR_APPLICATION_NAME/MainActivity.java`
```java
package com.your_application_name;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "YOUR_APPLICATION_NAME";
  }

  + @Override
  + protected ReactActivityDelegate createReactActivityDelegate() {
  +   return new ReactActivityDelegate(this, getMainComponentName()) {
  +     @Override
  +     protected ReactRootView createRootView() {
  +       return new RNGestureHandlerEnabledRootView(MainActivity.this);
  +     }
  +   };
  + }
}

```

#### To debug with Reactotron

Execute the command `adb reverse tcp:9090 tcp:9090` before start the bundling the application

### IOS

Don't forget to execute the `pod install` command inside the `ios` folder

### Last React and React Native version tested:

```json
{
  "react": "16.9.0",
  "react-native": "0.61.1"
}
```
