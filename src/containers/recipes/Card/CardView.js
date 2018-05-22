/**
 * Recipe View Screen
 *  - The individual recipe screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Card, Text, Spacer } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  favourite: {
    position: 'absolute',
    top: -50,
    right: 0,
  },
});

/* Component ==================================================================== */
class RecipeCard extends Component {
  static componentName = 'RecipeCard';

  static propTypes = {
    id: PropTypes.string.isRequired,
    imagelink: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    onPress: PropTypes.func,
    onPressFavourite: PropTypes.func,
    isFavourite: PropTypes.bool,
  }

  static defaultProps = {
    onPress: null,
    onPressFavourite: null,
    isFavourite: null,
    createdAt: '',
  }

  render = () => {
    const { title, subtitle, imagelink, onPress, onPressFavourite,
            isFavourite, createdAt, writer, articletype } = this.props;
    const date = new Date(createdAt);
    const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const createdDate = `${monthNamesShort[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <Card image={imagelink && { uri: imagelink }} >
          <View >
            <Text h4> {articletype} </Text>
            <Text h3 style={{ color: '#212121' }} >{title}</Text>
            <Text style={{ fontSize: 12, color: '#484848' }}>{subtitle}</Text>
            <View style={{ marginTop: 10 }}>
              <Text>
                <Text style={{ fontWeight: '700', fontSize: 10 }}>{writer}</Text>
                {'  '}
                <Text style={{ fontSize: 10 }}>{createdDate}</Text>
              </Text>
            </View>

            {!!onPressFavourite &&
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPressFavourite}
                style={[styles.favourite]}
              >
                <Icon
                  raised
                  name={'star-border'}
                  color={isFavourite ? '#FFFFFF' : '#7A7978'}
                  containerStyle={{
                    backgroundColor: isFavourite ? '#7A7978' : '#FFFFFF',
                  }}
                />
              </TouchableOpacity>
              }
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

/* Export Component ==================================================================== */
export default RecipeCard;
