import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QRCodeScreen from './src/screen/QRCodeScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <QRCodeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
