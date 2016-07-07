import { Navigator } from 'react-native';

// Custom navigation bar
export default class NavigationBar extends Navigator.NavigationBar {
  render() {
    const routes = this.props.navState.routeStack;

    if (routes.length) {
      let route = routes[routes.length - 1];
      if (route.display === false) {
        return null;
      }
    }
    return super.render();
  }
}
