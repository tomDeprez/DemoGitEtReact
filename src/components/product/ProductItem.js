import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function ProductItem({IsButnSupp, price, name, image, onPressSupp}) {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: image }} // Replace with actual image URL
                style={styles.image}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}€</Text>
            <Button title="View" onPress={() => {}} color="#00AFC1" />
                {
                    (IsButnSupp && <Button title="Supp" onPress={onPressSupp} color="red" />)
                }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    name: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '500',
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
    }
});
