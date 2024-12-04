import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Import RadioButton từ react-native-paper

const PaymentSetup = ({ navigation }) => {
  const [selectedPayment, setSelectedPayment] = useState('creditCard');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../Appbanhoa/Image/vixu.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thiết lập thanh toán</Text>
      </View>

      {/* Payment Options */}
      <RadioButton.Group
        onValueChange={(newValue) => setSelectedPayment(newValue)}
        value={selectedPayment}
      >
        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => setSelectedPayment('creditCard')}
        >
          <RadioButton value="creditCard" color="#ff1493" />
          <Text style={styles.paymentText}>Thẻ tín dụng/Ghi nợ</Text>
          <Image source={require('../Appbanhoa/Image/Tron.png')} style={styles.paymentIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => setSelectedPayment('paypal')}
        >
          <RadioButton value="paypal" color="#ff1493" />
          <Text style={styles.paymentText}>Paypal</Text>
          <Image source={require('../Appbanhoa/Image/P.png')} style={styles.paymentIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => setSelectedPayment('bankTransfer')}
        >
          <RadioButton value="bankTransfer" color="#ff1493" />
          <Text style={styles.paymentText}>Chuyển khoản ngân hàng</Text>
          <Image source={require('../Appbanhoa/Image/Nha.png')} style={styles.paymentIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => setSelectedPayment('cash')}
        >
          <RadioButton value="cash" color="#ff1493" />
          <Text style={styles.paymentText}>Tiền mặt</Text>
          <Image source={require('../Appbanhoa/Image/Tien.png')} style={styles.paymentIcon} />
        </TouchableOpacity>
      </RadioButton.Group>

      {/* Confirm Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          alert(`Bạn đã chọn phương thức thanh toán: ${selectedPayment}`);
          // Chuyển sang màn hình xác nhận đơn hàng
          navigation.navigate('Confirmation'); // Điều hướng sang màn hình xác nhận đơn hàng
        }}
      >
        <Text style={styles.confirmButtonText}>Xác nhận đơn hàng</Text>
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
    marginTop:30,
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
    marginVertical: 20,
  },
  progressStep: {
    fontSize: 14,
    color: '#ff1493',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff0f5',
    borderRadius: 10,
    marginBottom: 15,
  },
  paymentText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  paymentIcon: {
    width: 24,
    height: 24,
  },
  confirmButton: {
    backgroundColor: '#ff1493',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentSetup;
