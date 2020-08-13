import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import SearchStack from './searchStack';
import HomeStack from './homeStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Search: {
        screen: SearchStack
    },
});

export default createAppContainer(RootDrawerNavigator);