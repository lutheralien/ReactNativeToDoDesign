/* eslint-disable prettier/prettier */
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import {
  faBellSlash,
  faHeartPulse,
  faHouse,
  faPlusCircle,
  faSquare,
  faUserAlt,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Vibration,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';

const Home: React.FC = () => {
  const [openModal, setopenModal] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const getDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${month}-${year}-${day}`;
  };

  const renderModal: React.FC = () => {
    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View style={styles.modalBox}>
        <View style={styles.btns}>
        <TouchableOpacity onPress={handleAddToDo}>
        <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={handleCancelClick}>
            <FontAwesomeIcon icon={faXmark} size={30} style={styles.addIcon}/>
          </TouchableOpacity>
        </View>
           <TextInput style={styles.modalView}
        placeholder="Type here to translate!"
        onChangeText={newText => setTextInput(newText)}
        defaultValue={textInput}
      />
        </View>
      </Modal>
    );
  };

  const FallBack: React.FC = () => {
    return (
      <Text>Enter Items TODO</Text>
    )
  };



  const handlePlusClick = () => {
    Vibration.vibrate(20);
    console.log('pressed');
    setopenModal(true);
  };
  const handleCancelClick = () => {
    Vibration.vibrate(30);
    console.log('pressed cancel');
    setopenModal(false);
  };
  const handleAddToDo = () => {
    Vibration.vibrate(20);
    if (textInput === '' ){
      alert('enter text');
      return;
    }

    const id = Date.now().toString();
    setToDoList([...toDoList, {id, title: textInput}]);

   //POST to API to add To DO
  //  axios.post('http://localhost:3001/add-to-do', {id,title: textInput},{
  //   'Content-Type': 'application/json'}).then(res=>{
  //   console.log(res);
  //  }).catch(err=>{
  //   Alert.alert('error adding data')
  //  });
  fetch('http://10.0.3.2:3001/add-to-do', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers if required
  },
  body: JSON.stringify({id,title: textInput}),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Assuming the backend responds with JSON
  })
  .then(data => {
    console.log('Data successfully sent to the backend:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
    setTextInput('');
    setopenModal(false);
  };
  const handleDeleteToDo = id =>{
    Vibration.vibrate(20);
    const updatedToDoList = toDoList.filter((todo)=>todo.id !== id);
    setToDoList(updatedToDoList);
  };
  const renderTodos = ({item})=>{
   return (
     <View style={styles.box2}>
            <View style={styles.boxIconcontainer}>
            <TouchableOpacity onPress={()=>handleDeleteToDo(item.id)}>
           <FontAwesomeIcon
            icon={faSquare}
            style={{...styles.fontAwesomeBox, color: 'green'}}
          />
            </TouchableOpacity>
          <Text style={styles.boxText}> {item.title} </Text>
        </View>
      </View>
      );
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.box1}>
            <View style={styles.toDoContent}>
              <Text style={styles.toDoContenth3}>To do list</Text>
              <Text style={styles.toDoContenth4}>
                {getDate()}{' '}
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={styles.toDoContenth4iconContainer}
                />
              </Text>
            </View>
          </View>
        <FlatList data={toDoList} renderItem={renderTodos} />
        {
          toDoList.length === 0 && <FallBack />
        }
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
              <FontAwesomeIcon icon={faHouse} size={30} />
            </View>
            <View>
              <FontAwesomeIcon icon={faHeartPulse} size={30} />
            </View>
            <View>
              <TouchableOpacity onPress={handlePlusClick}>
                <FontAwesomeIcon icon={faPlusCircle} size={30} />
              </TouchableOpacity>
            </View>
            <View>
              <FontAwesomeIcon icon={faBellSlash} size={30} />
            </View>
            <View>
              <FontAwesomeIcon icon={faUserAlt} size={30} />
            </View>
          </View>
        </View>
      </View>
      {renderModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
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
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
  },
  foot: {
    flex: 1,
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
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 12,
    width: 340,
  },
  boxText: {
    color: '#333',
    marginRight: 20,
    flex: 1,
  },
  fontAwesomeBox: {
    marginRight: 30,
    flex: 1,
    padding: 10,
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
  boxf1Text: {
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
  boxf4Icon: {
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
  modalBox: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',

  },
  modalView: {
    backgroundColor: '#fff',
    width: '100%',
    color:'#444',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  addIcon: {
    color: '#fff',
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  saveText: {
    marginRight: 100,
    fontSize: 20,
    color: '#fff',
  },
  logo: {
    width: 66,
    height: 58,
     backgroundColor: 'red',
  },
});

export default Home;
