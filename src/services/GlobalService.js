import { collection, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const checkDeviceTypeMobile = () => {
	return window.innerWidth <= 700 && window.innerHeight <= 900 ? true : false;
};

const checkDarkMode = () => {
	let isDarkMode = false;
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		isDarkMode = true;
	}
	return isDarkMode;
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

export {
	checkDeviceTypeMobile,
	checkDarkMode,
	firebaseQuery,
	firebaseDataMapping,
};
