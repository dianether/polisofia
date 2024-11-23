import { addDoc, collection, db } from './firebase'

export const createFB = async (obj, collectionName) => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef,obj);
    return data.id;
}