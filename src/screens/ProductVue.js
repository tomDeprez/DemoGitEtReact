import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { getUserApi } from '../api/userApi';
import ProductList from '../components/product/ProductList';

export default function ProductVue({ navigation }) {

  return (
    <View>
      <ProductList></ProductList>
    </View>
  );
}
