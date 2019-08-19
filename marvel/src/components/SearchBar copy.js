import React,{ Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        platform="ios"
      />
    );
  }
}

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
  //export default search;
