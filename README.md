## IT52 Mobile App
Project mobile solution for get latest news about IT Events in Nizhny Novgorod.

### Installation and Running
Application based on React Native, you must have `react-native-cli` package and latest Android SDK.
[More Info Here](https://facebook.github.io/react-native/docs/getting-started.html)

For running this app enter in your terminal:
```
react-native run-android
```

### Project Structure
All sources of app in `src/` folder

```
└── src
    ├── App.js // main file for start app
    ├── api // helpers for app
    │   ├── index.js
    │   └── locale.js
    ├── constants
    │   └── styles.js
    ├── containers
    │   ├── EventList // component list of events
    │   │   ├── Event.js
    │   │   └── index.js
    │   ├── EventView // component show details event
    │   │   └── index.js
    │   └── Navigator.js // routing component
    └── redux // reducers for work with data and actions in app
        ├── index.js
        └── modules
            ├── events.js
            └── navigation.js
```

### Roadmap
Current local plans you can see [here](ROADMAP.md)
