import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Facebook } from 'expo';
import { Button } from 'react-native-elements';
import { loginUser } from '../actions/user';

const backgroundImage = require('../assets/images/login-bg.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    marginTop: 51,
    flex: 1,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    flex: 1,
  },
  loginButtonFb: {
    backgroundColor: '#3c5898',
    height: 48,
    width: 288,
    justifyContent: 'center',
    borderRadius: 30,
  },
  subtitle: {
    color: '#fff',
    fontFamily: 'MontserratRegular',
    fontSize: 22,
  },
  title: {
    color: '#fff',
    fontFamily: 'MontserratExtraBold',
    fontSize: 41,
  },
  text_bottom: {
    color: '#fff',
    fontFamily: 'MontserratRegular',
    fontSize: 14,
    paddingTop: 16,
  },
});

class Login extends React.Component {
  loginUser = () => {
    const req = {
      email: 'test@email.com',
      firstName: 'luke',
      lastName: 'the duke',
      token: 'doijvwrwioj',
    };
    this.props.serverAuth(req);
    this.props.navigation.navigate('Home');
  };

  render () {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Trash Walk</Text>
            <Text style={styles.subtitle}>keep the earth clean</Text>
          </View>
          <View style={styles.footer}>
            <Button
              Button
              icon={{
                name: 'facebook',
                type: 'font-awesome',
              }}
              fontFamily="MontserratBold"
              title="Luke is a dick"
              buttonStyle={styles.loginButtonFb}
              onPress={this.loginUser}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  serverAuth: data => dispatch(loginUser(data)),
});

Login.propTypes = {
  serverAuth: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.objectOf(PropTypes.any),
  ])).isRequired,

};

export default connect(null, mapDispatchToProps)(Login);
