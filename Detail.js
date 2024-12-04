import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const FlowerDetailScreen = ({ navigation }) => {
    const [quantity, setQuantity] = useState(1);
  
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };
  
    return (
      <ScrollView style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Use navigation to go back
        >
          <Image
            source={require('../Appbanhoa/Image/v.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
  
        {/* Flower Image and Info */}
        <Image
          source={require('../Appbanhoa/Image/flowerDetail.png')}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Bó hoa Derby</Text>
          <Text style={styles.description}>
            Bao quanh những bông hồng, những bông hoa nhỏ xinh trang nhã tạo thêm nét thanh lịch cho sự sắp xếp.
            Hương thơm ngọt ngào, thời gian bảo quản: 1 ngày.
          </Text>
          <Text style={styles.price}>128.000đ</Text>
        </View>

      {/* Bố cục */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bố cục</Text>
        <View style={styles.optionsContainer}>
          {[ 
            { id: 1, name: 'Hoa hồng', quantity: 3, image: require('../Appbanhoa/Image/a1.png') },
            { id: 2, name: 'Hoa hồng trắng', quantity: 7, image: require('../Appbanhoa/Image/a2.png') },
            { id: 3, name: 'Hoa nhài', quantity: 10, image: require('../Appbanhoa/Image/a3.png') },
            { id: 4, name: 'Hoa cúc', quantity: 12, image: require('../Appbanhoa/Image/a4.png') },
          ].map((item) => (
            <TouchableOpacity key={item.id} style={styles.option}>
              {/* Hình ảnh hoa */}
              <Image source={item.image} style={styles.optionImage} />
              <View style={styles.optionInfo}>
                {/* Thông tin hoa */}
                <Text style={styles.optionText}>{item.name}</Text>
                <Text style={styles.optionQuantity}>{item.quantity} chiếc</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Mua thêm */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mua thêm (optional)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.extraContainer}>
          {[ 
            { id: 1, name: 'Greeting card', price: '1.000đ', image: require('../Appbanhoa/Image/a1.png') },
            { id: 2, name: 'Extra wrapping', price: '1.000đ', image: require('../Appbanhoa/Image/a5.png') },
            { id: 3, name: 'Custom ribbon', price: '1.000đ', image: require('../Appbanhoa/Image/a6.png') },
          ].map((item) => (
            <View key={item.id} style={styles.extraItem}>
              <View style={styles.extraContent}>
                <Image source={item.image} style={styles.extraImage} />
                <View style={styles.extraInfo}>
                  <Text style={styles.extraName}>{item.name}</Text>
                  <Text style={styles.extraPrice}>{item.price}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Số lượng và nút thêm vào giỏ hàng */}
      <View style={styles.footer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart - {128000 * quantity}đ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 10,
      marginTop:20,
    },
    backIcon: {
      width: 30,
      height: 30,
      tintColor: '#333', // Màu icon
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
    },
    infoContainer: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#666',
      marginBottom: 10,
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#E91E63',
    },
    section: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    optionsContainer: {
        flexDirection: 'column', // Xếp theo chiều dọc
        alignItems: 'center',
      },
      option: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row', // Xếp theo hàng ngang: Hình ảnh bên trái, thông tin bên phải
      },
      optionImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10, // Khoảng cách giữa hình ảnh và thông tin
      },
      optionInfo: {
        flexDirection: 'column', // Thông tin nằm theo chiều dọc
        justifyContent: 'center',
      },
      optionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      optionQuantity: {
        fontSize: 14,
        color: '#666',
      },
      extraContainer: {
        flexDirection: 'row', // Xếp các item theo hàng ngang
        paddingVertical: 10, // Khoảng cách dọc của container
        paddingLeft: 10, // Khoảng cách bên trái
      },
      
      extraItem: {
        alignItems: 'center', // Căn giữa các item theo chiều ngang
        marginRight: 15, // Khoảng cách giữa các item
        width: 100, // Đặt chiều rộng của mỗi item (có thể thay đổi)
      },
      
      extraImage: {
        width: 110, // Kích thước hình ảnh của mỗi món đồ
        height: 80,
        borderRadius: 10, // Bo góc của hình ảnh
        marginBottom: 10, // Khoảng cách giữa hình ảnh và tên sản phẩm
      },
      
      extraName: {
        fontSize: 14, // Kích thước chữ cho tên sản phẩm
        color: '#333', // Màu sắc chữ
        textAlign: 'center', // Căn giữa tên sản phẩm
      },
      
      extraPrice: {
        fontSize: 14, // Kích thước chữ cho giá
        color: '#E91E63', // Màu sắc chữ cho giá
        textAlign: 'center', // Căn giữa giá sản phẩm
      },
      footer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
      },
      quantityButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
      },
      backIcon: {
        width: 30,
        height: 30,
      
        
      },
      quantityButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      quantity: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 10,
      },
      addToCartButton: {
        flex: 1,
        backgroundColor: '#E91E63',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      addToCartText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      },
     
    });

export default FlowerDetailScreen;
