import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import { styles } from './styles';

import ProductListItem from './../../components/ProductListItem';

const ITEMS_PER_PAGE = 12;

class ProductList extends Component {
    state = {
        items: [],
        isFetching: false,
        page: 1,
        maxNumberOfPages: 0,
    };

    getApiData = () => {
        return fetch(`http://ecsc00a02fb3.epam.com/rest/V1/products?searchCriteria[currentPage]=${this.state.page}&searchCriteria[pageSize]=${ITEMS_PER_PAGE}`)
            .then((response) => response.json())
            .then((responseJson) =>
            {
                this.setState({
                    items: responseJson.items,
                    isFetching: false,
                });

                return responseJson;
            });
    };

    componentDidMount() {
        this.getApiData()
            .then((responseJson) => {
                this.setState({
                    maxNumberOfPages: Math.ceil(responseJson.total_count / ITEMS_PER_PAGE)
                });
            });
    }

    onScrollHandler = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.addRecords(this.state.page);
        });
    };

    addRecords = (page) => {
        if (page <= this.state.maxNumberOfPages) {
            const oldItems = this.state.items;

            this.getApiData()
                .then(() => {
                    this.setState({
                        items: [...oldItems, ...this.state.items]
                    });
                });

        }
    };

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
            isFetching: true,
            page: 1,
            items: [],
        }, () => {
            this.getApiData();
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Products</Text>
                <FlatList
                    data={this.state.items}
                    renderItem={this.renderItems}
                    keyExtractor={this.keyExtractor}
                    style={styles.flatList}
                    refreshing={this.state.isFetching}
                    onRefresh={() => this.onRefresh()}
                    onEndReached={this.onScrollHandler}
                    onEndReachedThreshold={0.5}
                />
            </View>
        );
    }
}

export default ProductList;