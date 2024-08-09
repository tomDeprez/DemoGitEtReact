import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ProductItem from './ProductItem';
import Products from "../../../assets/products.json";

export default function ProductList() {
    const [ObjProducts, setProductsList] = useState(Products);

    function suppProductInList(id) {
        let ObjProductsList = [];

        for (let index = 0; index < ObjProducts.length; index++) {
            const element = ObjProducts[index];
            if (element.id != id) {
                ObjProductsList.push(element);
            }
        }

        setProductsList(ObjProductsList);
    }
    return (
        <View>
            {ObjProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    IsButnSupp={true}
                    onPressSupp={()=>{suppProductInList(product.id)}}
                />
            ))}
        </View>
    );
}
