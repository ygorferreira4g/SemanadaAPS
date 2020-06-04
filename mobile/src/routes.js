import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile' ;

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Local Guides'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
    }, {
        defaulNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: null,
            headerStyle: {
                backgroudColor: '#7D40E7',
            },
        }
    })
);

export default Routes;
