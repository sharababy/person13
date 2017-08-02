import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
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

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
          {
            name:"Vedant Bassi",
            status:"Alive",
            date:"2 August 2017",
            time:"10:39 am",
          },
          {
            name:"Jeffery Jacob",
            status:"Sad",
            date:"1 August 2017",
            time:"1:12 am",
          },
          {
            name:"Akshay Kumar",
            status:"In Class",
            date:"30 July 2017",
            time:"9:23 pm",
          },
          {
            name:"Adithya Prakash",
            status:"Travelling",
            date:"2 August 2017",
            time:"6:50 pm",
          },
          {
            name:"Viraj Sonatkar",
            status:"in My Room",
            date:"31 July 2017",
            time:"11:09 pm",
          },
          {
            name:"Gowtham Munukutla",
            status:"Working",
            date:"28 July 2017",
            time:"6:01 am",
          },
          {
            name:"Dharmesh Harsha",
            status:"Music Club",
            date:"2 August 2017",
            time:"7:34 pm",
          },
          

        ]),
    };
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <Text style={styles.pageHeaderText}> States of Being </Text>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) =>
           (
            <StateRow data={data} />
          )
          }
        />
      </View>
    );
  }
}

export default StatusList;