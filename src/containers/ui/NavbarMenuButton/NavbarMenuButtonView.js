/**
 * Navbar Menu Button
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/* Component ==================================================================== */
const NavbarMenuButton = ({ toggleSideMenu, user }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={{ top: -2 , height: 32 , width: 32}}
    hitSlop={{ top: 7, right: 7, bottom: 7, left: 7 }}
  >
    <Icon name={(user && user.email) ? 'ios-contact' : 'ios-contact-outline'} size={30} color={'#FFF'}  onPress={toggleSideMenu}/>

  </TouchableOpacity>
);

NavbarMenuButton.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.String,
  }),
};

NavbarMenuButton.defaultProps = {
  user: null,
};
/* onPress={toggleSideMenu}
 <Icon name={(user && user.email) ? 'ios-contact' : 'ios-contact-outline'} size={30}
 color={'#FFF'} />

 /* Export Component ==================================================================== */
export default NavbarMenuButton;
