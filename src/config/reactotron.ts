import Reactotron from "reactotron-react-native";

let reactotron = null;

if (__DEV__) {
  const reactotron = Reactotron.configure({
    name: "Unymos",
  })
    .useReactNative()
    .connect();
}

export default reactotron;
