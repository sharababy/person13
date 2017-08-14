import React from 'react';
import { List,View, FlatList, StyleSheet, Text } from 'react-native';
import StateRow from './StateRow'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  outerContainer: {
    flex: 1,
  },
  pageHeaderText:{
    paddingTop:12,
    paddingBottom:12,
    color:'#FFFFFF',
    fontSize:19,
    textAlign:'left',
    textAlignVertical:'center',
    fontFamily:'sans-serif',
    backgroundColor:'#394648',
    paddingLeft:10,
  },
  
});

class StatusList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
          {
            key:0,
            name:"Vedant Bassi",
          },
          {
            key:1,
            name:"Jeffery Jacob",
          },
          {
            key:2,
            name:"Akshay Kumar",
          },
          {
            key:3,
            name:"Adithya Prakash",
          },
          {
            key:4,
            name:"Viraj Sonatkar",
          },
          {
            key:5,
            name:"Gowtham Munukutla",
          },
          {
            key:6,
            name:"Dharmesh Harsha",
          },
          {
            key:7,
            name:"Sachin Putta",
          },
          

        ],
    };
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <Text style={styles.pageHeaderText}> States of Being </Text>
        
        <FlatList
          style={styles.container}
          data={this.state.data}
      
          renderItem={({item}) =>
           (
            <StateRow data={item} />
          )
          }
        />

      </View>
    );
  }
}

export default StatusList;