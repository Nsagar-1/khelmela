import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase_config"; // Adjust path as needed

// TO GET DATA FROM FIREBASE

const getData = async (docsName) => {
  try {
    if (!docsName) {
      console.error("Invalid docsName:", docsName);
      return [];
    }

    const getRef = collection(db, docsName);
    const data = await getDocs(getRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

//TO SEND send data to firebase  sendData (docsName , object )

const createData = async (docsName, dataToSend) => {
  try {
    const getRef = collection(db, docsName);
    const docRef = await addDoc(getRef, dataToSend); // This auto-generates an ID
    console.log("Data sent successfully:", dataToSend, "with ID:", docRef.id);
    return docRef.id; // Returning the document ID if needed
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

// To update changes  updateData = (docsname , id , newdata)

const updateData = async (docsName, docID, updatedData) => {
  try {
    const docRef = doc(db, docsName, docID); // Reference the specific document
    await updateDoc(docRef, updatedData); // Update only specified fields
    console.log("User data updated successfully:", updatedData);
    return updateData;
  } catch (error) {
    console.error("Error updating document:", error);
    return error;
  }
};

//To delete data (** OBJECT ** )

const deleteData = async (docsName, docID) => {
  try {
    const docRef = doc(db, docsName, docID); // Reference to the specific document
    await deleteDoc(docRef); // Deletes the document
    console.log(`Document with ID: ${docID} deleted successfully`);
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};

export { createData, getData, updateData, deleteData }; //exporting function
