/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const GooglePdfViewer = ({route}) => {
  const {pdfUrl} = route.params;

  // Encode URL to handle special characters
  const encodedPdfUrl = encodeURIComponent(pdfUrl);
  const googlePdfUrl = `https://docs.google.com/gview?url=${encodedPdfUrl}`

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: googlePdfUrl}}
        style={styles.webView}
        onError={error => console.log('Error loading PDF:', error)}
        onLoad={() => console.log('PDF loaded successfully')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default GooglePdfViewer;
