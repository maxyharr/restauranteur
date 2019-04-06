import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { WebBrowser } from 'expo';
import colors from '../constants/Colors'
import icons from '../constants/Icons'
import { SearchResults, SearchResult } from '../components/SearchResults'
import { Ionicons } from '@expo/vector-icons'

interface Props {}
interface State {
  searchTerm: string
  data: SearchResult[]
}

export default class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      data: [{name: 'Yolo monkeys barbershop'}]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <Ionicons style={styles.searchIcon} name={icons.search} size={20} color="#000" />
          <TextInput
            style={styles.searchBar}
            onChangeText={(searchTerm) => this.setState({searchTerm})}
            value={this.state.searchTerm}
            placeholder="Search for a place or address"
            placeholderTextColor={colors.placeholder}
          />
        </View>

        <View style={styles.searchResultsContainer}>
          <SearchResults data={this.state.data}/>
        </View>
        {this._maybeRenderDevelopmentModeWarning()}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      return (
        <Text>
          Development mode is enabled, your app will be slower but you can use useful development
          tools.
        </Text>
      );
    } else {
      return (
        <Text>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.searchBarBackground,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    borderRadius: 20,
  },
  searchIcon: {
    padding: 10
  },
  searchBar: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderRadius: 20,
    fontSize: 16,
  },
  searchResultsContainer: {
    backgroundColor: 'chartreuse'
  }
});
