














// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Button, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const App = () => {
//   const [selectedApp, setSelectedApp] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const applications = [
//     { name: 'Gmail', backgroundColor: '#d44638', content: 'Gmail Login', icon: 'envelope' },
//     { name: 'Facebook', backgroundColor: '#4267B2', content: 'Facebook Login', icon: 'facebook' },
//     { name: 'Chrome', backgroundColor: '#4285F4', content: 'Chrome Login', icon: 'chrome' },
//     { name: 'Google', backgroundColor: '#34A853', content: 'Google Login', icon: 'google' },
//     { name: 'Netflix', backgroundColor: '#E50914', content: 'Netflix Login', icon: 'film' },
//     { name: 'YouTube', backgroundColor: '#FF0000', content: 'YouTube Login', icon: 'youtube' },
//     { name: 'Twitter', backgroundColor: '#1DA1F2', content: 'Twitter Login', icon: 'twitter' },
//     { name: 'Instagram', backgroundColor: '#E1306C', content: 'Instagram Login', icon: 'instagram' },
//   ];

//   const handleAppPress = (app) => {
//     setSelectedApp(app);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedApp(null);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.appContainer}>
//         {applications.map((app, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[styles.appIcon, { backgroundColor: app.backgroundColor }]}
//             onPress={() => handleAppPress(app)}
//           >
//             <Icon name={app.icon} size={40} color="#fff" style={styles.icon} />
//             <Text style={styles.appText}>{app.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>


//       {selectedApp && (
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={closeModal}
//         >
//           <View style={styles.overlayContent}>
//             <View style={styles.modalContent}>
//               <Text style={styles.contentText}>{selectedApp.content}</Text>
//               <View style={styles.loginForm}>
//                 <Text style={styles.inputLabel}>Username:</Text>
//                 <View style={styles.inputBox} />
//                 <Text style={styles.inputLabel}>Password:</Text>
//                 <View style={styles.inputBox} />
//                 <Button title="Login" onPress={closeModal} />
//               </View>
//               <Button title="Close" onPress={closeModal} />
//             </View>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     marginTop: 80,
//   },
//   appContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   appIcon: {
//     width: '40%',
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     margin: 10,
//     position: 'relative',
//   },
//   appText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   overlayContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: Dimensions.get('window').width * 0.8,
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     alignItems: 'center',
//   },
//   contentText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   loginForm: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   inputLabel: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   inputBox: {
//     width: '100%',
//     height: 40,
//     backgroundColor: '#f0f0f0',
//     marginBottom: 15,
//     borderRadius: 5,
//   },
// });

// export default App;






















// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Button, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
 
// const App = () => {
//   const [selectedApp, setSelectedApp] = useState(null);
//   const [scaleValue] = useState(new Animated.Value(1)); // Initial scale set to 1
//   const [isZoomedIn, setIsZoomedIn] = useState(false);
 
//   const applications = [
//     { name: 'Gmail', backgroundColor: '#d44638', content: 'Gmail Content',icon:'envelope' },
//     { name: 'Facebook', backgroundColor: '#4267B2', content: 'Facebook Content', icon: 'facebook' },
//     { name: 'Chrome', backgroundColor: '#4285F4', content: 'Chrome Content', icon: 'chrome' },
//     { name: 'Google', backgroundColor: '#34A853', content: 'Google Content', icon: 'google' },
//     { name: 'Netflix', backgroundColor: '#E50914', content: 'Netflix Content', icon: 'film' },
//     { name: 'YouTube', backgroundColor: '#FF0000', content: 'YouTube Content', icon: 'youtube' },
//     { name: 'Twitter', backgroundColor: '#1DA1F2', content: 'Twitter Content', icon: 'twitter' },
//     { name: 'Instagram', backgroundColor: '#E1306C', content: 'Instagram Content', icon: 'instagram' },
//   ];
 
//   const handleAppPress = (app) => {
//     setSelectedApp(app);
//     Animated.timing(scaleValue, {
//       toValue: 1.5, // Scale to 1.5x
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//     setIsZoomedIn(true);
//   };
 
//   const closeApp = () => {
//     Animated.timing(scaleValue, {
//       toValue: 1, // Reset scale to 1x
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       setSelectedApp(null);
//       setIsZoomedIn(false);
//     });
//   };
 
//   return (
// <View style={styles.container}>
// <ScrollView contentContainerStyle={styles.appContainer}>
//         {applications.map((app, index) => (
// <TouchableOpacity
//             key={index}
//             style={[
//               styles.appIcon,
//               {
//                 backgroundColor: app.backgroundColor,
//                 transform: selectedApp && selectedApp.name === app.name ? [{ scale: scaleValue }] : [{ scale: 1 }],
//                 zIndex: selectedApp && selectedApp.name === app.name ? 1 : 0,
//               }
//             ]}
//             onPress={() => handleAppPress(app)}
//             disabled={isZoomedIn && selectedApp.name !== app.name} // Disable other apps when zoomed in
// >
// <Icon name={app.icon} size={40} color="#fff" style={styles.icon} />
// <Text style={styles.appText}>{app.name}</Text>
// </TouchableOpacity>
//         ))}
// </ScrollView>
 
//       {selectedApp && isZoomedIn && (
// <View style={styles.overlayContent}>
// <Animated.View
//             style={[
//               styles.expandedContent,
//               {
//                 transform: [{ scale: scaleValue }],
//               }
//             ]}
// >
// <Text style={styles.contentText}>{selectedApp.content}</Text>
// <Button title="Close" onPress={closeApp} />
// </Animated.View>
// </View>
//       )}
// </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     marginTop:80,
//   },
//   appContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   appIcon: {
//     width: '40%',
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     margin: 10,
//     position: 'relative',
//   },
//   appText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   overlayContent: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   expandedContent: {
//     width: Dimensions.get('window').width * 0.8,
//     height: Dimensions.get('window').height * 0.8,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   contentText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });
 
// export default App;


































// Main COde
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
 
// const App = () => {
//   const applications = [
//     { name: 'Gmail', backgroundColor: '#d44638', url: 'mailto:', icon: 'envelope' },
//     { name: 'Facebook', backgroundColor: '#4267B2', url: 'https://www.facebook.com/', icon: 'facebook' },
//     { name: 'Chrome', backgroundColor: '#4285F4', url: 'googlechrome://', icon: 'chrome' },
//     { name: 'Google', backgroundColor: '#34A853', url: 'https://www.google.com', icon: 'google' },
//     { name: 'Netflix', backgroundColor: '#E50914', url: 'nflx://', icon: 'film' },
//     { name: 'YouTube', backgroundColor: '#FF0000', url: 'vnd.youtube://', icon: 'youtube' },
//     { name: 'Twitter', backgroundColor: '#1DA1F2', url: 'twitter://', icon: 'twitter' },
//     { name: 'Instagram', backgroundColor: '#E1306C', url: 'instagram://', icon: 'instagram' },
//   ];
 
//   const openApp = async (url) => {
//     try {
//       const supported = await Linking.canOpenURL(url);
//       if (supported) {
//         await Linking.openURL(url);
//       } else {
//         Alert.alert(`App not installed`, `It seems like the application is not installed on your device.`);
//       }
//     } catch (err) {
//       console.error('Failed to open URL:', err);
//     }
//   };
 
//   return (
// <ScrollView contentContainerStyle={styles.container}>
//       {applications.map((app, index) => (
// <TouchableOpacity
//           key={index}
//           style={[styles.appIcon, { backgroundColor: app.backgroundColor }]}
//           onPress={() => openApp(app.url)}
// >
// <Icon name={app.icon} size={40} color="#fff" style={styles.icon} />
// <Text style={styles.appText}>{app.name}</Text>
// </TouchableOpacity>
//       ))}
// </ScrollView>
//   );
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     padding: 10,
//     marginTop: 100,
//   },
//   appIcon: {
//     width: "40%",
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     margin: 10,
//   },
//   appText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
 
// export default App;