import "@expo/metro-runtime"; // Necessary for Fast Refresh on Web
import { registerRootComponent } from "expo";
import React from "react";

import { App } from "./src/App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// Wrap App to satisfy the expected component type (avoid TS error if App is typed as () => void)
const Root = () => {
	// Use React.createElement to avoid JSX typing issues if App isn't typed as a React component.
	return React.createElement(App as any);
};

registerRootComponent(Root);
