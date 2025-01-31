import { useEffect, useState } from "react";
import { collection, getDocs  , addDoc  , updateDoc , doc , deleteDoc} from "firebase/firestore";
import { db } from "./firebase_config"; // Adjust path as needed

// TO GET DATA FROM FIREBASE


const getData = (docsName: string | undefined) => {
    const [filteredData, setFilteredData] = useState<any[]>([]);
    
    useEffect(() => {
        const findData = async () => {
            try {
                if (!docsName || typeof docsName !== "string") {
                    console.error("Invalid docsName:", docsName);
                    return; // Prevent calling Firestore with invalid input
                }

                const getRef = collection(db, docsName);
                const data = await getDocs(getRef);
                const filtered = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setFilteredData(filtered); // Update state
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        findData();
    }, [docsName]); // Re-run if `docsName` changes

    return filteredData;
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
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };


  //To delete data (** OBJECT ** )


const deleteData = async (docsName, docID ) => {
    try {
      const docRef = doc(db, docsName, docID); // Reference to the specific document
      await deleteDoc(docRef ); // Deletes the document
      console.log(`Document with ID: ${docID} deleted successfully`);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  

  
export { createData  , getData , updateData , deleteData };  //exporting function 
