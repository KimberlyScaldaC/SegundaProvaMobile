
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardMovie from './src/components/CardMovie';
import CadastroPage from './src/pages/CadastroPage';
import LoginPage from './src/pages/LoginPage';
import MoverCard from './src/pages/MoverCard';
import MoviePages from './src/pages/MoviePages';
import RecuperacaoPage from './src/pages/RecuperacaoPage';


const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MoviePages' component={MoviePages} options={{headerShown: false}}/>
        <Stack.Screen name='CardMovie' component={CardMovie} />
        <Stack.Screen name='LoginPage' component={LoginPage} />
        <Stack.Screen name='RecuperacaoPage' component={RecuperacaoPage} />
        <Stack.Screen name='CadastroPage' component={CadastroPage} />
        <Stack.Screen name='MoverCard' component={MoverCard}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
