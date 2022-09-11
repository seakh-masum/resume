import { createContext } from 'react';

const isMobile =
	window.innerWidth <= 700 && window.innerHeight <= 900 ? true : false;

export const ResponsiveContext = createContext(isMobile);
