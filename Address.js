import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Import RadioButton từ react-native-paper

const stores = [
  {
    id: '1',
    name: 'Thiên đường hoa cs1',
    address: 'Vạn Phúc, Hà Đông, Hà Nội',
    phone: '+628123456789',
    image: require('../Appbanhoa/Image/iconnha.png'), // Thêm đường dẫn đến hình ảnh
  },
  {
    id: '2',
    name: 'Thiên đường hoa cs2',
    address: 'Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh',
    phone: '+628987654321',
    image: require('../Appbanhoa/Image/iconnha.png'), // Thêm đường dẫn đến hình ảnh
  },
];

const DeliveryScreen = ({ navigation }) => {
  const [selectedDelivery, setSelectedDelivery] = useState('storePickup');
  const [selectedStore, setSelectedStore] = useState('1');

  const renderStore = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.storeContainer,
        selectedStore === item.id && styles.storeSelected,
      ]}
      onPress={() => setSelectedStore(item.id)}
    >
      {/* Hiển thị hình ảnh của cửa hàng */}
      <Image source={item.image} style={styles.storeImage} />
  
      <View style={styles.storeDetails}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeAddress}>{item.address}</Text>
        <Text style={styles.storePhone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      {/* Header with Progress */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../Appbanhoa/Image/iconnha.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đặt địa chỉ</Text>
      </View>
      

      {/* Delivery Options */}
      <Text style={styles.sectionTitle}>Tùy chọn giao hàng</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setSelectedDelivery(newValue)}
        value={selectedDelivery}
      >
        <View style={styles.radioOption}>
          <RadioButton value="storePickup" color="#ff1493" />
          <View>
            <Text style={styles.optionTitle}>Nhận tại cửa hàng</Text>
            <Text style={styles.optionDescription}>
              bạn cần đến cửa hàng của chúng tôi để lấy sản phẩm
            </Text>
          </View>
        </View>
        <View style={styles.radioOption}>
          <RadioButton value="meetPoint" color="#ff1493" />
          <View>
            <Text style={styles.optionTitle}>Tại điểm hẹn</Text>
            <Text style={styles.optionDescription}>
              chúng tôi giao hàng bạn mua đến điểm hẹn
            </Text>
          </View>
        </View>
        <View style={styles.radioOption}>
          <RadioButton value="homeDelivery" color="#ff1493" />
          <View>
            <Text style={styles.optionTitle}>Giao hàng tận nhà</Text>
            <Text style={styles.optionDescription}>
              đơn hàng sẽ được giao tận nhà trong bán kính 10 km tính từ cửa hàng chúng tôi
            </Text>
          </View>
        </View>
      </RadioButton.Group>

      {/* Store Selection */}
      <Text style={styles.sectionTitle}>Chọn cửa hàng bạn muốn</Text>
      <FlatList
        data={stores}
        renderItem={renderStore}
        keyExtractor={(item) => item.id}
      />

      {/* Continue Button */}
<TouchableOpacity
  style={styles.continueButton}
  onPress={() => {
    // Điều hướng đến màn hình Paypal
    navigation.navigate('Paypal');
  }}
>
  <Text style={styles.continueButtonText}>Tiếp tục thanh toán</Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 14,
    color: '#ff1493',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
  },
  storeContainer: {
    flexDirection: 'row', // Sắp xếp các phần tử theo hàng ngang
    alignItems: 'center', // Căn giữa theo trục dọc
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  storeImage: {
    width: 50, // Đặt chiều rộng của hình ảnh
    height: 50, // Đặt chiều cao của hình ảnh
    borderRadius: 25, // Làm tròn góc
    marginRight: 15, // Khoảng cách giữa hình ảnh và thông tin cửa hàng
  },
  storeDetails: {
    flex: 1, // Cho phép thông tin cửa hàng chiếm hết không gian còn lại
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff1493',
  },
  storeAddress: {
    fontSize: 14,
    color: '#666',
  },
  storePhone: {
    fontSize: 14,
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#ff1493',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  storeImage: {
    width: 30, // Đặt chiều rộng của hình ảnh nhỏ hơn
    height: 30, // Đặt chiều cao của hình ảnh nhỏ hơn
    borderRadius: 20, // Làm tròn góc với kích thước phù hợp
    marginRight: 15, // Khoảng cách giữa hình ảnh và thông tin cửa hàng
  },
});

export default DeliveryScreen;
