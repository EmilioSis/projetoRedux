import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import HeaderThreeButton from '../../components/HeaderThreeButton';
import MaterialButton from '../../components/MaterialButton';
import MaterialInput from '../../components/MaterialInput';
import MaterialCheckBox from '../../components/MaterialCheckBox';

let margin = 10;

function LoginStyle12() {
  return (
    <ImageBackground
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
      style={{flex: 1, backgroundColor: 'gray'}}>
      <HeaderThreeButton
        title="Sign In"
        navPress={() => alert('teste')}
        searchPress={() => alert('Clicou')}
        morePress={() => alert('Clicou')}
      />
      <View style={{flex: 1}}>
        <View style={{flex: 1, margin: margin, justifyContent: 'center'}}>
          <View style={{padding: margin, backgroundColor: 'white'}}>
            <View
              style={{
                width: 86,
                height: 86,
                marginTop: -60,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
                borderRadius: 50,
              }}>
              <Image
                source={require('../../assets/icon/ic_diamond.png')}
                style={{height: 50, width: 50, resizeMode: 'contain'}}
              />
            </View>
            <MaterialInput bgColor="#f1f5f7" placeholder="Username" />
            <MaterialInput
              bgColor="#f1f5f7"
              placeholder="Password"
              isPassword={true}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: margin,
              }}>
              <MaterialCheckBox title="Remember me" />
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => alert('Clicou')}>
                <Text style={{fontSize: 14, textAlign: 'center'}}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <MaterialButton
            title="Sign In"
            style={{backgroundColor: '#ff5722', marginTop: 25}}
            buttonPress={() => alert('Clicou')}
          />
          <MaterialButton
            title="Sign In with Facebook"
            style={{backgroundColor: '#3f569a', marginTop: margin}}
            buttonPress={() => alert('Clicou')}
          />
        </View>
        <MaterialButton
          title="Sign Up"
          style={{
            marginHorizontal: margin,
            marginBottom: margin,
            backgroundColor: 'white',
          }}
          buttonPress={() => alert('Clicou')}
        />
      </View>
    </ImageBackground>
  );
}

export default LoginStyle12;
