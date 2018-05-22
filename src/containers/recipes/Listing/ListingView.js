/**
 * Recipe Listing Screen
 *  - Shows a list of receipes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ListView,
    RefreshControl,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';
import { ErrorMessages } from '@constants/';

// Containers
import CardContainer from '@containers/recipes/Card/CardContainer';

// Components
import Error from '@components/general/Error';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

/* Component ==================================================================== */
class RecipeListing extends Component {
  static componentName = 'RecipeListing';

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    reFetch: PropTypes.func,
  }

  static defaultProps = {
    reFetch: null,
  }

  constructor() {
    super();

    this.state = {
      isRefreshing: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(props.recipes),
      isRefreshing: false,
    });
  }

    /**
     * Refetch Data (Pull to Refresh)
     */
  reFetch = () => {
    if (this.props.reFetch) {
      this.setState({ isRefreshing: true });

      this.props.reFetch()
                .then(() => {
                  this.setState({ isRefreshing: false });
                });
    }
  }

  render = () => {
    const { recipes } = this.props;
    const { isRefreshing, dataSource } = this.state;

    if (!isRefreshing && (!recipes || recipes.length < 1)) {
      return <Error text={ErrorMessages.recipe404} />;
    }
        // const topRecipe = recipes.splice(0,4);
    return (
      <View >
        {/* <Swiper */}
        {/* autoplay */}
        {/* autoplayTimeout={4} */}

        {/* > */}
        {/* {topRecipe.map((r, index) => { */}
        {/* return ( */}
        {/* <View key={index} style={{flex:1}}> */}
        {/* <CardContainer recipe={r}  /> */}
        {/* </View> */}
        {/* ) */}
        {/* })} */}
        {/* </Swiper> */}
        <ListView
          initialListSize={5}
          renderRow={recipe => <CardContainer recipe={recipe} />}
          dataSource={dataSource}
          automaticallyAdjustContentInsets={false}
          refreshControl={
                      this.props.reFetch ?
                        <RefreshControl
                          refreshing={isRefreshing}
                          onRefresh={this.reFetch}
                          tintColor={AppColors.brand.primary}
                        />
                          : null
                  }
        />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default RecipeListing;
