# Purpose

Examplar applications for learning React Native development concepts.

# Setup (for MacOS)

Facebook wrote this [Getting Started Guide](https://facebook.github.io/react-native/docs/getting-started.html) for React Native apps. It provides instructions for iOS and Android, which are summarised here.

## iOS

1. Install XCode [here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).

2. Install node, watchman, and the react-natice CLI
```
	brew install node
	brew install watchman
	npm install -g react-native-cli
```

3. Run the app
```
	./node_modules/react-native/packager/packager.sh & (Optional) 
	react-native run-ios
```
![](https://github.com/jeandamore/Finanz/blob/master/pics/ios_home.png)
![](https://github.com/jeandamore/Finanz/blob/master/pics/ios_dog.png)

## Android

1. Install Java [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and Android Sudio [here](https://developer.android.com/studio/index.html). (installation instructions [here](https://developer.android.com/studio/install.html))

2. Setup Android development environment (SDK, Emulator) as per the Facebook documentation [here]((https://facebook.github.io/react-native/docs/getting-started.html).

3. With the current version of Android Studio for MacOS (2.3.2), the only emulator (AVD) installed is an Android 7.0 (API 25) x86. You will need an AVD that runs with Adroid 6.0 (API 23) and x86_64 archicture. To install it use the Tools > Android > SDK Manager and Toold > Android > AVD Manager to install Android 6.0 API 23, and create (or modify) an emulator to use this OS. Once done start the emulator. 

4. Run the Android app
```
	react-native run-android
```

![](https://github.com/jeandamore/Finanz/blob/master/pics/and_home.png)
![](https://github.com/jeandamore/Finanz/blob/master/pics/and_cat.png)
