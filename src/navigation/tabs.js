/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Placeholder from '@components/general/Placeholder';
import Error from '@components/general/Error';
import Favourites from '@components/general/Favourites';
import StyleGuide from '@containers/StyleGuideView';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import RecipeView from '@containers/recipes/RecipeView';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
    renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

const navbarPropsTabsNoTop = {
    ...AppConfig.navbarPropsNoBar,
    // renderLeftButton: () => <NavbarMenuButton />,
    sceneStyle: {
        ...AppConfig.navbarPropsNoBar.sceneStyle,
        paddingBottom: AppSizes.tabbarHeight,
    },
};


/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95} >
    <Scene
      key={'feed'}
      //  component={Recipes}
      icon={props => TabIcon({ ...props, icon: 'home' })}
    >
      <Scene
        {...navbarPropsTabs}
        titleStyle={{ display: 'none' }}
        key={'recipesListing'}
        component={Recipes}
        analyticsDesc={'Recipes: Browse Recipes'}
      />
      <Scene
        {...navbarPropsTabs}
        key={'recipeView'}
        component={RecipeView}
        getTitle={props => ((props.title) ? props.title : 'View Recipe')}
        analyticsDesc={'RecipeView: View Recipe'}
      />
    </Scene>

    <Scene
      key={'favoriteListing'}
      {...navbarPropsTabs}
      title={'Favorites'}
      component={Favourites}
      icon={props => TabIcon({ ...props, icon: 'star' })}
    />

    {/* <Scene */}
    {/* key={'error'} */}
    {/* {...navbarPropsTabs} */}
    {/* title={'Example Error'} */}
    {/* component={Error} */}
    {/* icon={props => TabIcon({ ...props, icon: 'error' })} */}
    {/* analyticsDesc={'Error: Example Error'} */}
    {/* /> */}

    {/* <Scene */}
    {/* key={'styleGuide'} */}
    {/* {...navbarPropsTabs} */}
    {/* title={'Style Guide'} */}
    {/* component={StyleGuide} */}
    {/* icon={props => TabIcon({ ...props, icon: 'speaker-notes' })} */}
    {/* analyticsDesc={'StyleGuide: Style Guide'} */}
    {/* /> */}
  </Scene>
);

export default scenes;
