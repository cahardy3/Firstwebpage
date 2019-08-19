import React,{ Component } from 'react';
import { TextInput, Text, View } from 'react-native';

class SearchTerm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

render() {
  return (
    <View style={styles.containerStyle}>
      <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
    </View>
  )
};
}
console.log(this.state.text)
const styles = {
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 1,
      shadowColor: '#000',
      height: 30,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
  }
};
  export default SearchTerm;
