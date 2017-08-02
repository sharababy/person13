import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';

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
  rowContainer:{
    flex: 1,
    flexDirection:'column',
  },
  row:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:15,
    paddingBottom:15,
  },
  rowElement1:{
    color:'#000',
    flex: 1,
    fontSize:16,
    textAlign:'left',
    textAlignVertical:'center'
  },
  rowElement2:{
    flex: 1,
    fontSize:13,
    textAlign:'left',
    textAlignVertical:'center',
    //borderWidth:1,
  },
  rowElement3:{
    flex: 1,
    fontSize:11,
    textAlign:'left',
    textAlignVertical:'center',
    color:'#878787',
    //borderWidth:1,
  },
  box1:{
    flexDirection:'column',
    marginLeft:15,
    //width:100,
    //borderWidth:1,
  },
  box2:{
    width:70,
    flexDirection:'column',
    justifyContent:'center',
    //borderWidth:1,
    
  },
  divider:{
    flex:1,
    borderTopWidth:1,
    borderTopColor:'#eee',
    marginLeft:10,
    marginRight:10,
    
  }

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
            <View style={styles.rowContainer}>
              <View style={styles.row} >
                <View style={styles.box1}>
                  <Text style={styles.rowElement1}>{data.name}</Text>
                  <Text style={styles.rowElement3}>as of {data.time} , {data.date}</Text>
                </View>
                <View style={styles.box2}>
                  <Text style={styles.rowElement2}>{data.status}</Text>
                </View>
                
              </View>
              <View style={styles.divider}></View>
            </View>
          )
          }
        />
      </View>
    );
  }
}

export default StatusList;