import { addDoc, collection, db, getDocs, query } from './firebase'


//create collection element
export const createFB = async (obj, collectionName) => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}


//read collection
export const readFB = async (collectionName) => {
    const colRef = collection(db, collectionName);
    try {
        const querySnapshot = await getDocs(colRef);
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data;
    } catch (error) {
        console.error("Error fetching documents:", error);
        return [];
    }
};