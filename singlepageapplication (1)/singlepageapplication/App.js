import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Button, Alert, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WebView from 'react-native-webview';
 
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState('');
 
  const applications = [
    { name: 'Gmail', backgroundColor: '#d44638', url: 'https://www.gmail.com', icon: 'envelope' },
    { name: 'Facebook', backgroundColor: '#4267B2', url: 'https://www.facebook.com/', icon: 'facebook' },
    { name: 'Chrome', backgroundColor: '#4285F4', url: 'googlechrome://', icon: 'chrome' },
{ name: 'Google', backgroundColor: '#34A853', url: 'https://www.google.com', icon: 'google' },
    { name: 'Netflix', backgroundColor: '#E50914', url: 'https://www.netflix.com/in/', icon: 'film' },
{ name: 'YouTube', backgroundColor: '#FF0000', url: 'https://www.youtube.com/', icon: 'youtube' },
{ name: 'Twitter', backgroundColor: '#1DA1F2', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'Instagram', backgroundColor: '#E1306C', url: 'https://www.instagram.com/', icon: 'instagram' },
  ];
 
  const openApp = async (url) => {
    try {
      if (url.startsWith('http') || url.startsWith('https')) {
        setWebViewUrl(url);
        setModalVisible(true);
      } else {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert('App not installed', 'It seems like the application is not installed on your device.');
        }
      }
    } catch (err) {
      console.error('Failed to open URL:', err);
    }
  };
 
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {applications.map((app, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.appIcon, { backgroundColor: app.backgroundColor }]}
            onPress={() => openApp(app.url)}
          >
            <Icon name={app.icon} size={40} color="#fff" style={styles.icon} />
            <Text style={styles.appText}>{app.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
 
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <WebView source={{ uri: webViewUrl }} style={styles.webView} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 100,
  },
  appIcon: {
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  appText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  webView: {
    flex: 1,
  },
});
 
export default App;