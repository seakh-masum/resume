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

export { checkDeviceTypeMobile, checkDarkMode };
