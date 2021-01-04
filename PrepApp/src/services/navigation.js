import { NavigationActions } from '@react-navigation/compat';

let nav;

function setTopLevelNavigator(navigatorRef) {
   nav = navigatorRef;
}

function navigate(routeName, params) {
   nav.dispatch(NavigationActions.navigate({ routeName, params }));
}

export default {
   setTopLevelNavigator,
   navigate,
};