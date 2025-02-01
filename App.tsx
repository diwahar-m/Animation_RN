import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/RootNavigation";


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}


export default App;
