import { collection, query, orderBy } from 'firebase/firestore';
import { db } from '../services/firebase';

const checkDarkMode = () => {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		return true;
	}
	return false;
};

const firebaseQuery = (url) => {
	return query(collection(db, url), orderBy('order', 'asc'));
};

const firebaseDataMapping = (querySnapshot) => {
	return querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
};

const timestampToDate = (timestamp) => {
 if (!timestamp) return '';
 const date = timestamp.toDate();
 return date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
 });
};

export { checkDarkMode, firebaseQuery, firebaseDataMapping, timestampToDate };
