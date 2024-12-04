import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TaoMatKhauMoi = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleContinue = () => {
    if (newPassword === '' || confirmPassword === '') {
      alert('Vui lòng nhập đầy đủ thông tin.');
    } else if (newPassword !== confirmPassword) {
      alert('Mật khẩu không khớp. Vui lòng thử lại.');
    } else {
      // Tiếp tục xử lý logic tạo mật khẩu mới ở đây
      alert('Mật khẩu đã được thay đổi thành công!');
      // Chuyển hướng sang trang tiếp theo nếu cần thiết
       navigation.navigate('Dangnhap');
    }
  };

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialCommunityIcons name="chevron-left" size={24} color="#ff8a80" />
        <Text style={styles.backButtonText}>Tạo mật khẩu mới</Text>
      </TouchableOpacity>

      {/* Biểu tượng khóa */}
      <View style={styles.iconContainer}>
        <Image 
          source={require('../Appbanhoa/Image/Quenmatkhau.png')} // Đặt đường dẫn đúng đến ảnh biểu tượng khóa
          style={styles.iconImage}
        />
      </View>

      {/* Hướng dẫn */}
      <Text style={styles.instructionText}>
        Mật khẩu mới phải khác so với mật khẩu trước đó
      </Text>

      {/* Trường nhập liệu mật khẩu mới */}
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu mới"
        secureTextEntry
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />

      {/* Trường nhập lại mật khẩu mới */}
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu mới"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      {/* Nút Tiếp tục */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f5',
    padding: 20,
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: {
    color: '#ff8a80',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  iconImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  instructionText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#999',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    backgroundColor: '#fde8e8',
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#ff8a80',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TaoMatKhauMoi;
