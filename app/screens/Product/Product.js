import React, { Component } from 'react';

import Location from '../../components/Location';
import ProductItem from '../../components/ProductItem';

class Product extends Component {
    constructor(props) {
        super(props);

        const {navigation} = this.props;

        this.title = JSON.stringify(navigation.getParam('title'));
        this.locationInfo = navigation.getParam('locationInfo');
        this.description = JSON.stringify(navigation.getParam('description'));
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
        this.setState({
            isMapVisible: true
        })
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