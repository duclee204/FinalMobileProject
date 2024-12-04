import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const menuItems = [
  { title: 'Đơn hàng' },
  { title: 'Lịch sử mua hàng' },
  { title: 'Hoa yêu thích' },
  { title: 'Địa chỉ của bạn' },
  { title: 'Đổi mật khẩu' },
  { title: 'Cài đặt tài khoản' },
  { title: 'Danh sách quà tặng' },
  { title: 'Tích điểm' },
  { title: 'Ví xu' },
];

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo và các biểu tượng */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Trangchu')}>  {/* Chuyển hướng về trang chủ */}
          <View style={styles.headerImageContainer}>
            <Image
              source={require('../Appbanhoa/Image/Logo.png')} // Thay đổi đường dẫn đến ảnh bạn đã tải lên
              style={styles.headerImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Giohang')}>
            <MaterialCommunityIcons name="cart-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tiếp tục các thành phần khác của Profile */}
      <View style={styles.header}>
        {/* Avatar và tên người dùng */}
        <View style={styles.userInfo}>
          <Image
            source={require('../Appbanhoa/Image/avatar.png')}
            style={styles.avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.username}>congduc0101</Text>
            <Text style={styles.userStats}>99 Người theo dõi | 10 Đang theo dõi</Text>
          </View>
        </View>
      </View>

      {/* Thanh công cụ */}
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.toolbarButton}>
          <Image source={require('../Appbanhoa/Image/The.png')} style={styles.icon} />
          <Text style={styles.toolbarText}>Công nợ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolbarButton}>
          <Image source={require('../Appbanhoa/Image/Tichdiem.png')} style={styles.icon} />
          <Text style={styles.toolbarText}>Tích điểm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolbarButton}>
          <Image source={require('../Appbanhoa/Image/vixu.png')} style={styles.icon} />
          <Text style={styles.toolbarText}>Ví xu</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách chức năng */}
      <ScrollView style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              if (item.title === 'Hoa yêu thích') {
                // Điều hướng đến màn hình "Yeuthich"
                navigation.navigate('Yeuthich');
              }

              if (item.title === 'Lịch sử mua hàng') {
                // Điều hướng đến màn hình "OrdersScreen"
                navigation.navigate('OrdersScreen');
              }
              // Thêm các điều hướng khác nếu cần
            }}
          >
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 35,
  },
  headerImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 35,
    height: 30,
    marginLeft: 10, // Khoảng cách giữa các biểu tượng
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userDetails: {
    marginLeft: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStats: {
    fontSize: 14,
    color: '#777',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  toolbarButton: {
    alignItems: 'center',
  },
  toolbarText: {
    marginTop: 5,
    fontSize: 12,
    color: '#777',
    marginLeft: 10,
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Profile;
