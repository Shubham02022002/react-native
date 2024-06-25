import React from 'react';

import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  with: 64,
  height: 80,
};

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hello world !</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
