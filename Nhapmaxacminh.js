// Thêm import cần thiết
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const XacMinhSDT = ({ navigation, route }) => {
  const { phoneNumber } = route.params; // Nhận số điện thoại từ tham số route
  const [otp, setOtp] = useState(new Array(4).fill('')); // Sử dụng mảng để lưu trữ các ký tự OTP
  const refs = useRef([]); // Tạo tham chiếu cho các trường nhập liệu

  // Xử lý thay đổi khi người dùng nhập mã
  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Chuyển focus sang trường tiếp theo
    if (text.length === 1 && index < 3) {
      refs.current[index + 1].focus();
    }
  };

  // Xử lý xác nhận mã OTP
  const handleContinue = () => {
    const otpCode = otp.join('');
    if (otpCode === '1234') { // Giả định mã OTP đúng là '1234'
      alert('Xác minh thành công!');
      // Điều hướng đến màn hình tạo mật khẩu mới
      navigation.navigate('Taomatkhaumoi', { phoneNumber }); // Truyền số điện thoại nếu cần
    } else {
      alert('Mã OTP không đúng, vui lòng thử lại.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialCommunityIcons name="chevron-left" size={24} color="#ff8a80" />
        <Text style={styles.backButtonText}>Nhập mã xác minh</Text>
      </TouchableOpacity>

      {/* Biểu tượng thư tùy chỉnh */}
      <View style={styles.iconContainer}>
        <Image 
          source={require('../Appbanhoa/Image/Nhapmaxacminh.png')} // Đặt đường dẫn đúng đến ảnh thư tùy chỉnh
          style={styles.iconImage}
        />
      </View>

      {/* Hướng dẫn */}
      <Text style={styles.instructionText}>
        Vui lòng nhập mã xác minh được gửi về số điện thoại của bạn
      </Text>

      {/* Trường nhập liệu mã OTP */}
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, index)}
            value={otp[index]}
            ref={(ref) => (refs.current[index] = ref)}
          />
        ))}
      </View>

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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: '#fde8e8',
    marginHorizontal: 5,
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

export default XacMinhSDT;
