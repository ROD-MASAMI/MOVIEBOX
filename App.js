import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import CalendarScreen from './app/screens/Calendar';
import Upload from './app/screens/Upload';
import Document from './app/screens/Document';
import TabBar from './app/navigations/Tabs';


export default function App() {
  return (
    <Document />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
