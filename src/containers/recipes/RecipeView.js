/**
 * Recipe View Screen
 *  - The individual recipe screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import {
    View,
    Image,
    ScrollView,
    StyleSheet,
    WebView,
    TouchableOpacity,
    Linking,
} from 'react-native';
import AppWebView from '../../components/general/WebView';


// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Card, Spacer, Text } from '@ui/';

const styles = StyleSheet.create({
  featuredImage: {
    left: 0,
    right: 0,
    height: AppSizes.screen.height * 0.2,
    resizeMode: 'cover',
  },
  fullPage: {
    height: 400,
    width: '100%',
  },
});

/* Component ==================================================================== */
class RecipeView extends Component {
  static componentName = 'RecipeView';

  static propTypes = {
    recipe: PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      imagelink: PropTypes.string,
      articleurl: PropTypes.string,
      ingredients: PropTypes.arrayOf(PropTypes.string),
      method: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  }

    /**
     * Ingredients
     */
  renderIngredients = (ingredients) => {
    const jsx = [];
    let iterator = 1;

    ingredients.forEach((item) => {
      jsx.push(
        <View key={`ingredient-${iterator}`} style={[AppStyles.row]}>
          <View><Text> - </Text></View>
          <View style={[AppStyles.paddingLeftSml, AppStyles.flex1]}>
            <Text>{item.toString()}</Text>
          </View>
        </View>,
            );
      iterator += 1;
    });

    return jsx;
  }
    /**
     * Method
     */
  renderMethod = (method) => {
    const jsx = [];
    let iterator = 1;

    method.forEach((item) => {
      jsx.push(
        <View key={`method-${iterator}`} style={[AppStyles.row]}>
          <View><Text> {iterator}. </Text></View>
          <View style={[AppStyles.paddingBottomSml, AppStyles.paddingLeftSml, AppStyles.flex1]}>
            <Text>{item.toString()}</Text>
          </View>
        </View>,
            );
      iterator += 1;
    });

    return jsx;
  }

  render = () => {
    const { articleurl } = this.props.recipe;

    return (
      <View style={[AppStyles.container]}>
        <AppWebView url={articleurl} />
        <TouchableOpacity
            onPress={() => { Linking.openURL(articleurl); }}
          style={{ position: 'absolute', bottom: 20, right: 0, backgroundColor: '#0E4EF8' }}
        >
          <Text  style={{fontSize: 14, color: '#FFF', fontWeight: 'bold', padding: 10}}>
              Go To Article
          </Text>

        </TouchableOpacity>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default RecipeView;
