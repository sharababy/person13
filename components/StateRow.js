import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  
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

class StateRow extends React.Component {
  render() {
    return (
            <View style={styles.rowContainer}>
              <View style={styles.row} >
                <View style={styles.box1}>
                  <Text style={styles.rowElement1}>{this.props.data.name}</Text>
                  <Text style={styles.rowElement3}>as of {this.props.data.time} , {this.props.data.date}</Text>
                </View>
                <View style={styles.box2}>
                  <Text style={styles.rowElement2}>{this.props.data.status}</Text>
                </View>
                
              </View>
              <View style={styles.divider}></View>
            </View>
    );
  }
}

export default StateRow;