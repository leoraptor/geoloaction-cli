/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

// const {goodbyejava} = NativeModules;

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

interface CalendarModule {
  createCalendarEvent(name: string, location: string): Number;
  printNumbers(): Number;
}
const {CalendarModule} = NativeModules as {CalendarModule: CalendarModule};

// const CalendarModule = NativeModules.CalendarModule;
// const geomagneticFieldEmitter = new NativeEventEmitter(CalendarModule);
function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const onPress = () => {
    console.log(CalendarModule.printNumbers(), 'this is from java');
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View>
        <Text
          onPress={onPress}
          style={isDarkMode ? styles.texthelloDark : styles.texthelloDarkLight}>
          Cendrol People<Text style={styles.dot}>.</Text>
        </Text>
        <Text
          onPress={() => {
            console.log(CalendarModule.seeThisNumber());
          }}
          style={isDarkMode ? styles.texthelloDark : styles.texthelloDarkLight}>
          Can you see the number
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  texthelloDark: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  texthelloDarkLight: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  dot: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'limegreen',
  },
});

export default App;
