import * as React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import colors from '../constants/Colors'

export interface SearchResult {
  // id: any
  name: string
}

interface Props {
  data: SearchResult[]
}

export class SearchResults extends React.Component<Props> {
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    )
  }
}

const styles = StyleSheet.create({
  item: {
    color: colors.text
  }
})