import { Platform } from "react-native";


export default {
  search: Platform.OS === 'ios' ? 'ios-search' : 'md-search'
}