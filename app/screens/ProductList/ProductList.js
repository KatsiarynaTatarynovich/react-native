import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import { styles } from './styles';

import ProductListItem from './../../components/ProductListItem';

class ProductList extends Component {
    state = {
        data: [],
        isFetching: false,
    };

    getApiData = () => {
        fetch('http://ecsc00a02fb3.epam.com/rest/V1/products?searchCriteria[pageSize]=15')
            .then((response) => response.json())
            .then((responseJson) =>
            {
                this.setState({
                    data: responseJson.items,
                    isFetching: false,
                });
                console.log(this.state.data);
            });
    };

    componentDidMount() {
        this.getApiData();
    }

    redirectToItem = (title, id, description) => {
        this.props.navigation.navigate('Product', {
            title,
            id,
            description
        });
    };

    keyExtractor = item => item.id.toString();

    renderItems = ({ item }) => (
        <ProductListItem
            redirectToItem={this.redirectToItem}
            title={item.name}
            id={item.id}
            description={item.description}
        />
    );

    onRefresh = () => {
        this.setState({
                isFetching: true
            },
            function() {
                this.getApiData();
            }
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Products</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItems}
                    keyExtractor={this.keyExtractor}
                    style={styles.flatList}
                    refreshing={this.state.isFetching}
                    onRefresh={() => this.onRefresh()}
                />
            </View>
        );
    }
}

export default ProductList;