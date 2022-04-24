# React Native Template LS

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/65da41dfd6854b9e96785078f42172ad)](https://www.codacy.com/gh/leandrosimoes/react-native-template-ls/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=leandrosimoes/react-native-template-ls&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/react-native-template-ls.svg)](https://badge.fury.io/js/react-native-template-ls)
![Node.js Package](https://github.com/leandrosimoes/react-native-template-ls/workflows/Node%2Ejs%20Package/badge.svg)

Leandro Simões React Native Template

## Installation

`react-native init YOUR_APPLICATION_NAME --template ls`

PS: You must use the `@react-native-community/cli` instead of `react-native-cli`.

## Aditional configurations

### Android

#### This is necessary to enable the react-native-gesture-handler (E.g. pen the drawer navigation gestures)

`android/app/src/main/java/com/YOUR_APPLICATION_NAME/MainActivity.java`
```java
package com.your_application_name;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {
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

### IOS

Don't forget to execute the `pod install` command inside the `ios` folder

### Last React and React Native version tested:

```json
{
  "react": "17.0.2",
  "react-native": "0.65.0",
}
```
