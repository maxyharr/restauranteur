import { Platform } from "react-native";

export default {
  search: Platform.OS === 'ios' ? 'ios-search' : 'md-search',
  list: Platform.OS === 'ios' ? 'ios-list' : 'md-list',
  star: Platform.OS === 'ios' ? 'ios-star' : 'md-star'
}