import { addDoc, collection, db, getDocs, query, orderBy, limit, startAfter } from './firebase'


//create collection element
export const createFB = async (obj, collectionName) => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}


//read collection

export const readFB = async (collectionName, lastVisible = null, pageSize = 10) => {
    const colRef = collection(db, collectionName);

    let postsQuery = query(
        colRef,
        orderBy("id", "desc"),
        limit(pageSize)
    );

    if (lastVisible) {
        postsQuery = query(postsQuery, startAfter(lastVisible));
    }

    try {
        const querySnapshot = await getDocs(postsQuery);
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
        return { data, lastDoc };
    } catch (error) {
        console.error("Error fetching documents:", error);
        return { data: [], lastDoc: null };
    }
};
