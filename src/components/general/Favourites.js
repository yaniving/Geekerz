/**
 * Web View
 *
 * <WebView url={"http://google.com"} />
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
import { AppColors, AppStyles } from '@theme/';
import { ErrorMessages } from '@constants/';
import CardContainer from '@containers/recipes/Card/CardContainer';
import Error from '@components/general/Error';
import * as RecipeActions from '@redux/recipes/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  favourites: state.recipe.favourites || [],
  recipes: state.recipe.recipes,
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.background,
  },
});

const mapDispatchToProps = {
  getFavourites: RecipeActions.getFavourites,
};

/* Component ==================================================================== */
class Favourites extends Component {
  static componentName = 'AppWebView';

  static propTypes = {
    favourites: PropTypes.arrayOf(PropTypes.object).isRequired,
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    getFavourites: PropTypes.func.isRequired,
    reFetch: PropTypes.func,
  }

  static defaultProps = {
    favourites: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount = () => {
    let { recipes, favourites } = this.props;
    recipes = recipes.filter(res => favourites.indexOf(res.id.toString()) > -1);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(recipes),
      isRefreshing: false,
    });
  }

  componentWillReceiveProps(props) {
    let { recipes, favourites } = props;
    recipes = recipes.filter(res => favourites.indexOf(res.id.toString()) > -1);
    this.setState({ recipes });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(recipes),
      isRefreshing: false,
    });
  }

  render = () => {
    const { favourites } = this.props;
    const { isRefreshing, dataSource } = this.state;

    if (!isRefreshing && (!favourites || favourites.length < 1)) {
      return <Error text={ErrorMessages.recipe404} />;
    }
        // const topRecipe = recipes.splice(0,4);
    return (
      <View style={[AppStyles.container]}>
        <ListView
          initialListSize={5}
          renderRow={fav => <CardContainer recipe={fav} />}
          dataSource={dataSource}
          automaticallyAdjustContentInsets={false}
          refreshControl={
                        this.props.reFetch ?
                          <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={this.reFetch}
                            tintColor={AppColors.brand.primary}
                          /> : null}
        />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(Favourites);

