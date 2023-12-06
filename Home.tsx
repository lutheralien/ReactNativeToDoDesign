/* eslint-disable prettier/prettier */
import {faXbox} from '@fortawesome/free-brands-svg-icons';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {faBellSlash, faBuilding, faHeartPulse, faHouse, faLocationDot, faPlusCircle, faTicketSimple, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.box1}>
            <View style={styles.toDoContent}>
              <Text style={styles.toDoContenth3}>To do list</Text>
              <Text style={styles.toDoContenth4}>
                Today <FontAwesomeIcon icon={faCalendar} style={styles.toDoContenth4iconContainer}/>
              </Text>
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.boxIconcontainer}>
              <FontAwesomeIcon icon={faTicketSimple} style={styles.fontAwesomeBox} />
              <Text style={styles.boxText}>Dashboard project for school</Text>
            </View>
          </View>
          <View style={styles.box3}>
            <View style={styles.boxIconcontainer}>
              <FontAwesomeIcon icon={faLocationDot} style={styles.fontAwesomeBox}/>
              <Text style={styles.boxText}>Meeting Mr. Brian O' Conor</Text>
            </View>
          </View>
          <View style={styles.box4}>
            <View style={styles.boxIconcontainer}>
              <FontAwesomeIcon icon={faBuilding} style={styles.fontAwesomeBox}/>
              <Text style={styles.boxText}>Go to Bank office</Text>
            </View>
          </View>
        </View>
        <View style={styles.foot}>
          <View style={styles.boxf1}>
            <Text style={styles.boxf1Text}>Past Activity</Text>
          </View>
          <View style={styles.boxf2}>
            <Text style={styles.boxfText}>5 Mon</Text>
            <Text>Strikom Library Project</Text>
            <Text style={styles.pseudoMissing}>Missing</Text>
          </View>
          <View style={styles.boxf3}>
            <Text style={styles.boxfText}>5 Mon</Text>
            <Text>Design Thinking Workshop</Text>
            <Text style={styles.pseudoSucces}>Success</Text>
          </View>
          <View style={styles.boxf4}>
            <View>
              <FontAwesomeIcon icon={faHouse} size={30}/>
            </View>
            <View>
              <FontAwesomeIcon icon={faHeartPulse}  size={30}/>
            </View>
            <View>
              <FontAwesomeIcon icon={faPlusCircle} size={30}/>
            </View>
            <View>
              <FontAwesomeIcon icon={faBellSlash} size={30}/>
            </View>
            <View>
              <FontAwesomeIcon icon={faUserAlt} size={30}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    backgroundColor: 'rgb(11, 11, 66)',
    flex: 1,
    width: '100%',
  },
  head: {
    flex: 1,
    backgroundColor: 'rgb(11, 11, 66)',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
  },
  foot: {
    flex: 1,
    backgroundColor: 'rgb(11, 11, 66)',
    width: '100%',
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  box1: {
    height: 60,
    width: '100%',
    marginHorizontal: 'auto',
    marginTop: 0,
    marginBottom: 10,
    color: '#fff',
  },
  box2: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 0,
    marginHorizontal: 'auto',
    marginBottom: 10,
    borderRadius: 10,
  },
  boxText: {
    color: '#333',
    marginRight: 20,
  },
  fontAwesomeBox: {
    marginRight: 30,
  },
  boxIconcontainer: {
    flexDirection: 'row',
  },
  box3: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 0,
    marginHorizontal: 'auto',
    marginBottom: 10,
    borderRadius: 10,
  },
  box3Text: {
    color: '#333',
  },
  box4: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 0,
    marginHorizontal: 'auto',
    marginBottom: 10,
    borderRadius: 10,
  },
  box4Text: {
    color: '#333',
  },
  toDoContent: {
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
  },
  toDoContenth3: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  toDoContenth4: {
    fontSize: 23,
    fontWeight: 'bold',
    justifyContent: 'space-evenly',
  },
  toDoContenth4iconContainer: {
    color: '#fff',
  },
  boxf1: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    marginTop: 0,
    marginHorizontal: 'auto',
    marginBottom: 10,
    backgroundColor: 'rgb(11, 11, 66)',
  },
  boxf1Text:{
    fontSize: 27,
  },
  boxf2: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 0,
    marginHorizontal: 'auto',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(22, 22, 67)',
    flexDirection: 'row',
  },
  boxfText: {
    marginRight: 20,
  },

  boxf3: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 0,
    marginHorizontal: 'auto',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(22, 22, 67)',
    flexDirection: 'row',

  },
  boxf4: {
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 0,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    backgroundColor: 'rgb(22, 22, 67)',
    color: 'gray',
    fontSize: 100,
    marginBottom: 12,
  },
  boxf4Icon:{
    fontSize: 30,
  },

  pseudoSucces: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 5,
    position: 'relative',
    bottom: 29,
    left: 65,
    backgroundColor: 'green',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  pseudoMissing: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 5,
    position: 'relative',
    bottom: 29,
    left: 65,
    backgroundColor: 'red',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default Home;
