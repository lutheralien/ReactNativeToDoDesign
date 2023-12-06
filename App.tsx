import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import Home from './Home';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
