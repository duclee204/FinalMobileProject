import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import Chao from './Chao';
import Gioithieu1 from './Gioithieu1'; // Import màn hình Gioithieu1
import Gioithieu2 from './Gioithieu2';
import Gioithieu3 from './Gioithieu3';
import Dangnhap from './Dangnhap';
import Dangky from './Dangky';
import Xacminhsdt from './Xacminhsdt';
import Quenmatkhau from './Quenmatkhau';
import Nhapmaxacminh from './Nhapmaxacminh';
import Taomatkhaumoi from './Taomatkhaumoi';
import Giohang from './Giohang';
import SearchFlower1 from './SearchFlower1';
import SearchFlower2 from './SearchFlower2';
import SearchFlower3 from './SearchFlower3';
import MainTabs from './MainTabs'; // Import MainTabs mới tạo
import Address from './Address';
import Paypal from './Paypal';
import Confirmation from './Confirmation';
import Trangchu from './Trangchu';
import Detail from './Detail';
import Yeuthich from './Yeuthich';
import OrdersScreen from './OrdersScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <Stack.Navigator 
            initialRouteName="Onboarding"
            screenOptions={{
              headerShown: false,  // Ẩn tiêu đề và nút quay lại cho tất cả các màn hình
              gestureEnabled: false // Vô hiệu hóa cử chỉ quay lại cho tất cả các màn hình
            }}
          >
            <Stack.Screen name="Onboarding" component={Chao} />
            <Stack.Screen name="Gioithieu1" component={Gioithieu1} />
            <Stack.Screen name="Gioithieu2" component={Gioithieu2} />
            <Stack.Screen name="Gioithieu3" component={Gioithieu3} />
            <Stack.Screen name="Dangnhap" component={Dangnhap} />
            <Stack.Screen name="Dangky" component={Dangky} />
            <Stack.Screen name="Xacminhsdt" component={Xacminhsdt} />
            <Stack.Screen name="Quenmatkhau" component={Quenmatkhau} />
            <Stack.Screen name="Nhapmaxacminh" component={Nhapmaxacminh} />
            <Stack.Screen name="Taomatkhaumoi" component={Taomatkhaumoi} />
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="SearchFlower1" component={SearchFlower1} />
            <Stack.Screen name="SearchFlower2" component={SearchFlower2} />
            <Stack.Screen name="SearchFlower3" component={SearchFlower3} />
            <Stack.Screen name="Giohang" component={Giohang} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="Paypal" component={Paypal} />
            <Stack.Screen name="Confirmation" component={Confirmation} />
            <Stack.Screen name="Trangchu" component={Trangchu} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Yeuthich" component={Yeuthich} />
            <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
          </Stack.Navigator>
        </View>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}
