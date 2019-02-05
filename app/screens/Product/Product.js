import React, { Component } from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';

import Location from '../../components/Location';
import ProductItem from '../../components/ProductItem';

const CustomLayoutAnimation = {
  duration: 300,
  create: {
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.linear,
  },
  update: {
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.linear,
  },
  delete: {
      duration: 200,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.linear,
  }
};

class Product extends Component {
    constructor(props) {
        super(props);

        const {navigation} = this.props;

        this.title = JSON.stringify(navigation.getParam('title'));
        this.locationInfo = navigation.getParam('locationInfo');
        this.description = JSON.stringify(navigation.getParam('description'));

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    state = {
        isMapVisible: false
    };

    redirect = () => {
        this.props.navigation.navigate('ProductList', {
            screen: 'ProductList'
        });
    };

    openMap = () => {
        LayoutAnimation.configureNext(CustomLayoutAnimation);

        this.setState({
            isMapVisible: true
        });
    };

    render() {
        return (
            <React.Fragment>
                { this.state.isMapVisible ?
                    <Location
                        locationInfo={this.locationInfo}
                    /> :
                    <ProductItem
                        redirect={this.redirect}
                        openMap={this.openMap}
                        title={this.title}
                        description={this.description}
                    />
                }
            </React.Fragment>
        );
    }
}

export default Product;