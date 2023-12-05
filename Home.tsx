/* eslint-disable prettier/prettier */
import {faXbox} from '@fortawesome/free-brands-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Home: React.FC = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <View>
        <View>
          <View>
            <View>
              <Text>To do list</Text>
              <Text>
                Today <FontAwesomeIcon icon={faXbox} />
              </Text>
            </View>
          </View>
          <View>
            <View>
              <FontAwesomeIcon icon={faXbox} />
              <Text>Dashboard project for school</Text>
            </View>
          </View>
          <View>
            <View>
              <FontAwesomeIcon icon={faXbox} />
              <Text>Meeting Mr. Brian O' Conor</Text>
            </View>
          </View>
          <View>
            <View>
              <FontAwesomeIcon icon={faXbox} />
              <Text>Go to Bank office</Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text>Past Activity</Text>
          </View>
          <View>
            <Text>5 Mon</Text>
            <Text>Strikom Library Project</Text>
          </View>
          <View style={styles.boxf3}>
            <Text>5 Mon</Text>
            <Text>Design Thinking Workshop</Text>
          </View>
          <View style={styles.boxf4}>
            <View>
              <FontAwesomeIcon icon={faHouse} />
            </View>
            <View>
              <FontAwesomeIcon icon={faHeart} />
            </View>
            <View>
              <FontAwesomeIcon icon={faHeart} />
            </View>
            <View>
              <FontAwesomeIcon icon={faHouse} />
            </View>
            <View>
              <FontAwesomeIcon icon={faHouse} />
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
    height: 100,
  },
  container: {
    backgroundColor: 'rgb(11, 11, 66)',
    height: 100,
    width: 40,
  },
  head: {
    height: 50,
    backgroundColor: 'rgb(11, 11, 66)',
    width: 100,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  foot: {
    height: 50,
    backgroundColor: 'rgb(11, 11, 66)',
    width: 100,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  box1: {
    height: 60,
    width: 90,
    // margin: '0 auto',
    marginBottom: 10,
    color: '#fff',
  },
  box1h3: {
    position: 'relative',
    top: 0,
    left: -49,
  },
  box1h4: {
    position: 'relative',
    top: 0,
    right: -43,
  },
  box2: {
    height: 60,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    // margin: 0 auto,
    marginBottom: 10,
    borderRadius: 10,
  },
  box2Iconcontainer: {
    position: 'relative',
    right: 70,
  },
  box3: {
    height: 60,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    // margin: 0 auto,
    marginBottom: 10,
    borderRadius: 10,
  },
  box3Iconcontaner: {
    position: 'relative',
    right: 70,
  },
  box4: {
    height: 60,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    // margin: 0 auto,
    marginBottom: 10,
  },
  box4Iconcontaner: {
    position: 'relative',
    right: 105,
  },
  toDoContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  toDoContenth3: {
    marginLeft: 50,
  },
  toDoContenth4: {
    marginRight: 50,
    fontSize: 13,
  },
  toDoContenth4iconContainer: {
    marginLeft: 10,
  },
  boxf1: {
    height: 60,
    backgroundColor: 'rgb(11, 11, 66)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 90,
    // margin: 0 auto,
    marginBottom: 10,
    color: '#fff',
  },
  boxf2: {
    height: 60,
    backgroundColor: 'rgb(22, 22, 67)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    // margin: 0 auto,
    marginBottom: 10,
    color: '#fff',
    borderRadius: 10,
  },
  boxf2p: {
    position: 'relative',
    right: 80,
  },
  boxf2after: {
    content: 'Missing',
    fontSize: 12,
    color: '#fff',
    marginLeft: 5,
    position: 'relative',
    bottom: 29,
    left: 80,
    backgroundColor: 'red',
    borderRadius: 6,
    // padding: 5 15,
  },
  boxf3: {
    height: 60,
    backgroundColor: 'rgb(22, 22, 67)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    // margin: 0 auto,
    marginBottom: 10,
    color: '#fff',
    borderRadius: 10,
  },
  boxf3p: {
    position: 'relative',
    right: 80,
  },
  boxf3after: {
    content: 'Success',
    fontSize: 12,
    color: '#fff',
    marginLeft: 5,
    position: 'relative',
    bottom: 29,
    left: 80,
    backgroundColor: 'red',
    borderRadius: 6,
    // padding: 5 15,
  },
  boxf4: {
    height: 60,
    backgroundColor: 'rgb(34, 34, 121)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 100,
    // margin: 0 auto,
    marginBottom: 10,
    color: 'gray',
  },
});

export default Home;
