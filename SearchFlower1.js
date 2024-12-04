import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchFlower1 = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Hàng mới');

  const flowers = [
    { id: 1, name: 'Sự sang trọng', price: '149.000đ', image: require('../Appbanhoa/Image/flower1.png') },
    { id: 2, name: 'Sự sang trọng', price: '149.000đ', image: require('../Appbanhoa/Image/flower2.png') },
    { id: 3, name: 'Sự lãng mạn', price: '149.000đ', image: require('../Appbanhoa/Image/flower3.png') },
    { id: 4, name: 'Sự sang trọng', price: '149.000đ', image: require('../Appbanhoa/Image/flower4.png') },
    { id: 5, name: 'Sự sang trọng', price: '149.000đ', image: require('../Appbanhoa/Image/flower5.png') },
    { id: 6, name: 'Sự sang trọng', price: '149.000đ', image: require('../Appbanhoa/Image/flower6.png') },
  ];

  // Lọc danh sách hoa theo từ khóa tìm kiếm
  const filteredFlowers = flowers.filter(flower =>
    flower.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = async (flower) => {
    try {
      let cart = await AsyncStorage.getItem('cart');
      cart = cart ? JSON.parse(cart) : [];
      cart.push(flower);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      Alert.alert('Thông báo', 'Sản phẩm đã được thêm vào giỏ hàng.');
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể thêm sản phẩm vào giỏ hàng.');
    }
  };

  // Hàm xử lý khi nhấn vào danh mục
  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    if (category === 'Hoa hồng Đà Lạt') {
      navigation.navigate('SearchFlower2');
    } else if (category === 'Hồng Ngoại Thương') {
      navigation.navigate('SearchFlower3');
    } else {
      // Quay về danh mục hiện tại nếu là "Hàng mới"
      setSelectedCategory('Hàng mới');
    }
  };

  // Hàm xử lý khi nhấn vào hoa
  const handleFlowerPress = (flower) => {
    // Chuyển đến màn hình chi tiết hoa và truyền thông tin hoa
    navigation.navigate('Detail', { flower });
  };

  return (
    <View style={styles.container}>
      {/* Header Search Bar */}
      <View style={styles.searchHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <MaterialCommunityIcons name="magnify" size={24} color="#aaa" style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="Tìm kiếm sản phẩm"
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Giohang')}>
          <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {['Hàng mới', 'Hoa hồng Đà Lạt', 'Hồng Ngoại Thương', 'Hoa Hồng Cổ'].map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => handleCategoryPress(category)} // Gọi hàm xử lý khi nhấn
          >
            <Text style={selectedCategory === category ? styles.categoryTextActive : styles.categoryText}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Products */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.productsContainer}>
        <View style={styles.productsRow}>
          {filteredFlowers.map((flower) => (
            <View key={flower.id} style={styles.productCard}>
              <TouchableOpacity onPress={() => handleFlowerPress(flower)}>
                <Image source={flower.image} style={styles.productImage} />
                <Text style={styles.productName}>{flower.name}</Text>
                <Text style={styles.productPrice}>{flower.price}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(flower)}
              >
                <FontAwesome name="plus" size={16} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  categoryButton: {
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    color: '#777',
  },
  categoryTextActive: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
  productsContainer: {
    paddingHorizontal: 20,
  },
  productsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'pink',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchFlower1;
