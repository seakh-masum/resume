import { collection, query, orderBy, QuerySnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

const firebaseQuery = (url: string, orderParams = "isActive") => {
  return query(collection(db, url), orderBy(orderParams, "desc"));
};

const firebaseDataMapping = (querySnapshot: QuerySnapshot) => {
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export { firebaseQuery, firebaseDataMapping };
