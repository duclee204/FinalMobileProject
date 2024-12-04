import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';//cho phép sử dụng navigation để điều hướng màn hình.

// Khai báo thành phần OTP
const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill('')); //otp được khởi tạo dưới dạng mảng 6 phần tử
  const [timer, setTimer] = useState(60); // timer dùng để đếm ngược thời gian cho phép gửi lại mã OTP.
  const refs = useRef([]); //lưu các tham chiếu đến các ô nhập OTP
  const navigation = useNavigation(); // Sử dụng hook này để điều hướng

// khởi tạo bộ đếm thời gian
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Hàm xử lý khi người dùng nhập mã OTP
  /* Nếu người dùng nhập đủ 1 ký tự vào một ô và không phải ô cuối cùng, 
  hàm sẽ tự động chuyển sang ô tiếp theo */
  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    if (text.length === 1 && index < 5) {
      refs.current[index + 1].focus();
    }
    setOtp(newOtp);
  };

  // hàm xử lý phím xóa
  // Khi người dùng nhấn phím "Backspace", hàm sẽ xóa ký tự hiện tại tại ô đó
  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] !== '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  // Hàm để xử lý khi nhấn nút "Xác minh
  // Sau khi người dùng nhấn nút "Xác minh", ứng dụng sẽ chuyển hướng đến màn hình Dangnhap
  const handleVerify = () => {
    navigation.navigate('Dangnhap');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xác minh số điện thoại</Text>
      <Text style={styles.subtitle}>
        Chúng tôi đã gửi mã xác minh tới số điện thoại của bạn. Vui lòng nhập mã để tiếp tục.
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            value={value}
            ref={(ref) => (refs.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Xác minh</Text>
      </TouchableOpacity>
      <Text style={styles.timerText}>
        Vui lòng kiểm tra tin nhắn của bạn để nhận mã OTP.
      </Text>
      <TouchableOpacity disabled={timer > 0} onPress={() => setTimer(60)}>
        <Text style={[styles.resendText, timer > 0 ? styles.disabledResend : {}]}>
          {timer > 0 ? `Gửi lại mã (${timer}s)` : 'Gửi lại mã'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  verifyButton: {
    backgroundColor: '#f58fa4',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  resendText: {
    fontSize: 14,
    color: '#f58fa4',
  },
  disabledResend: {
    color: '#ccc',
  },
});

export default OTPVerification;
