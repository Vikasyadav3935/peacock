import {View,Text} from 'react-native';
import TabNavigator from './src/AppNavigator/TabNavigator';
import ContextProvider from './src/Components/ContextProvider';


const App = () => {
  

  return (
   <ContextProvider>
    <TabNavigator/>
    </ContextProvider>
  )
};

export default App;
