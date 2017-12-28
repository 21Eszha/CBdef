import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler, Text, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addNavigationHelpers,
  StackNavigator,
  NavigationActions,
} from 'react-navigation';
import ActionCreators from './redux/actions';
//General
import Home from './containers/Main';
import HelpMenu from './containers/HelpMenu';
import IntroMenu from './containers/IntroMenu';
import GreetingMenu from './containers/GreetingMenu';
import Menulis from './containers/Menulis';

export const AppNavigator = StackNavigator({
  Home: { screen: Home },
  HelpMenu: { screen: HelpMenu },
  IntroMenu: { screen: IntroMenu },
  GreetingMenu: { screen: GreetingMenu },
  Menulis: { screen: Menulis },
});

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.onBackPress = this.onBackPress.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress() {
    const { dispatch, nav } = this.props;
    if (this.isRootScreen(nav)) return false;
    dispatch(NavigationActions.back());
    return true;
  }

  isRootScreen(navigator) {
    if (navigator.index == null) {
      return true;
    }

    if (navigator.index > 0) {
      return false;
    }

    return (
      !navigator.routes ||
      !navigator.routes.find(route => !this.isRootScreen(route))
    );
  }

  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          ...bindActionCreators(ActionCreators, this.props.dispatch),
        })}
        screenProps={this.props}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

AppContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(mapStateToProps)(AppContainer);
