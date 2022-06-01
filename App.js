import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QRCodeScreen from './src/screen/QRCodeScreen';
import {SocketProvider} from './src/context/socket';

export default function App() {
  return (
    <SocketProvider>
      <View style={styles.container}>
        <QRCodeScreen />
        <StatusBar style="auto" />
      </View>
    </SocketProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
