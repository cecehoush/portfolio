import React from 'react';

const styles = {
  container: {
    backgroundColor: '#1D2D44',
    color: '#fff',
    minHeight: '100vh', 
  },
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    {children}
  </div>
);

export default Layout;