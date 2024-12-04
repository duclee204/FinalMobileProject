import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const TrangChu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../Appbanhoa/Image/Logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Giohang')}>
          <MaterialCommunityIcons name="cart-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Hãy cùng tìm hoa của bạn</Text>

      {/* Search Bar */}
      <TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate('SearchFlower1')}>
        <MaterialCommunityIcons name="magnify" size={24} color="#aaa" />
        <TextInput 
          placeholder="Bạn muốn tìm gì?" 
          style={styles.searchInput} 
          editable={false} // Không cho chỉnh sửa để tránh nhập nội dung
          pointerEvents="none" // Loại bỏ khả năng tương tác để sự kiện TouchableOpacity hoạt động
        />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
  {/* Danh mục sự kiện */}
  <View style={styles.categoryContainer}>
    <Text style={styles.sectionTitle}>Danh mục sự kiện</Text>
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      nestedScrollEnabled
    >
      {['Lãng mạn', 'Lễ cưới', 'Sinh nhật', 'Tốt nghiệp'].map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryButton}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>

  {/* Dành riêng cho bạn */}
  <View style={styles.recommendedSection}>
    <Text style={styles.sectionTitle}>Dành riêng cho bạn</Text>
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      nestedScrollEnabled
    >
      {/* Thẻ khuyến mãi */}
      <View style={styles.promoCard}>
        <Image source={require('../Appbanhoa/Image/Danhrieng1.png')} style={styles.promoImage} />
        <View style={styles.promoTextContainer}>
          <Text style={styles.promoText}>Giảm 30% cho các mặt hàng</Text>
          <Text style={styles.promoSubText}>cho mọi bó hoa và bạn cần sử dụng phương thức thanh toán chuyển khoản</Text>
          <Text style={styles.promoLink}>xem thêm</Text>
        </View>
            </View>
            <View style={styles.promoCard}>
              <Image source={require('../Appbanhoa/Image/Danhrieng2.png')} style={styles.promoImage} />
              <View style={styles.promoTextContainer}>
                <Text style={styles.promoText}>Miễn phí</Text>
                <Text style={styles.promoSubText}>chỉ với giá trị đơn hàng tối thiểu 50.000đ</Text>
                <Text style={styles.promoLink}>xem thêm</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Tạo bó hoa của bạn */}
        <View style={styles.createSection}>
          <Image source={require('../Appbanhoa/Image/CreateBackground.png')} style={styles.createBackground} />
          <View style={styles.createOverlay}>
            <Text style={styles.createTitle}>Tạo bó hoa của riêng bạn</Text>
            <Text style={styles.createDescription}>Thể hiện bản thân bằng cách tạo ra bó hoa độc đáo của riêng bạn</Text>
          </View>
        </View>

        {/* Hàng mới về */}
        <View style={styles.newArrivalSection}>
          <Text style={styles.sectionTitle}>Hàng mới về</Text>
          <View style={styles.productCard}>
            <Image source={require('../Appbanhoa/Image/Hoahong.png')} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Hoa hồng</Text>
              <Text style={styles.productDescription}>dành tặng cho người thực sự yêu hoa hồng đỏ</Text>
              <Text style={styles.productPrice}>75.000đ</Text>
            </View>
            <FontAwesome name="heart-o" size={24} color="pink" />
          </View>
          <View style={styles.productCard}>
            <Image source={require('../Appbanhoa/Image/BohoaDerby.png')} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Bó hoa Derby</Text>
              <Text style={styles.productDescription}>Kích thước trung bình đến lớn với màu vàng cao cấp và xanh tươi</Text>
              <Text style={styles.productPrice}>125.000đ</Text>
            </View>
            <FontAwesome name="heart-o" size={24} color="pink" />
          </View>
        </View>

        {/* Sản phẩm */}
        <Text style={styles.sectionTitle}>Sản phẩm</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productCardSmall}>
            <Image source={require('../Appbanhoa/Image/flower9.png')} style={styles.productImageSmall} />
            <FontAwesome name="heart-o" size={24} color="pink" style={styles.heartIconSmall} />
          </View>
          <View style={styles.productCardSmall}>
            <Image source={require('../Appbanhoa/Image/flower8.png')} style={styles.productImageSmall} />
            <FontAwesome name="heart-o" size={24} color="pink" style={styles.heartIconSmall} />
          </View>
        </ScrollView>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 20,
  },
  categoryContainer: {
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#555',
  },
  recommendedSection: {
    marginBottom: 10,
  },
  promoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    width: 200,
  },
  promoImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  promoTextContainer: {
    padding: 10,
  },
  promoText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  promoSubText: {
    fontSize: 12,
    color: '#999',
    marginVertical: 5,
  },
  promoLink: {
    color: '#007BFF',
    fontSize: 12,
  },
  createSection: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  createBackground: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  createOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 20,
  },
  createTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  createDescription: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  newArrivalSection: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productDescription: {
    fontSize: 12,
    color: '#999',
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#ff8a80',
  },
  productCardSmall: {
    marginHorizontal: 10,
    position: 'relative',
  },
  productImageSmall: {
    width: 150,
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  heartIconSmall: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#f2f2f2',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
  },
});

export default TrangChu;
