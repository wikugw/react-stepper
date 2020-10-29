import React, { useState, useEffect } from 'react';
import App from './App';
import db from './firebase';
import firebase from 'firebase';

export const multiStepContext = React.createContext();

const StepContext = () => {

  const initialFieldValues = {
    name: '',
    status: '',
    no_hp: '',
    email: '',
    mafa: '',
    mifa: '',
    facebook: '',
    twitter: '',
    instagram: '',
  };

  const [step, setStep] = useState(0);
  const [currentData, setCurrentData] = useState(initialFieldValues);
  const [finalData, setFinalData] = useState([]);

  const [currentID, setCurrentID] = useState(null);

  const incrementStep = () => {
    setStep(step + 1)
  }

  const decrementStep = () => {
    setStep(step - 1)
  }

  const changeValue = (event) => {
    setCurrentData({
      ...currentData,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    db.collection('biodata').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setFinalData(snapshot.docs.map(doc => ({ id: doc.id, biodata: doc.data() })))
    });
  }, [])

  const submitData = () => {
    // var check = finalData.findIndex(finalData => finalData.email === currentID);
    // console.log('ceh'.check);
    if (currentID) {
      db.collection("biodata").doc(currentID).update({
        ...currentData,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    } else {
      db.collection('biodata').add({
        ...currentData,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
    setCurrentData(initialFieldValues);
    setStep(0);
    setCurrentID(null);
  }

  const update = (id) => {
    db.collection("biodata").doc(id).get().then(function (doc) {
      if (doc.exists) {
        setCurrentData(doc.data());
        setCurrentID(id);
      } else {
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  const destroy = (id) => {
    if (window.confirm('U sure want to delete this record??')) {
      console.log(id);
      db.collection("biodata").doc(id).delete().then(function () {
        setCurrentID(null);
      }).catch(function (error) {
        console.error("Error removing document: ", error);
      });
    }
  }

  console.log(finalData);

  return (
    <multiStepContext.Provider value={{ destroy, currentID, update, submitData, incrementStep, decrementStep, changeValue, step, setStep, currentData, setCurrentData, finalData, setFinalData }}>
      <App />
    </multiStepContext.Provider>
  )
}

export default StepContext;