import React from 'react';
import LandingPage from '../components/landing-page';
import { ContextProvider } from './AppContext';

const App = () => {
	return (
		<ContextProvider>
			<LandingPage />
		</ContextProvider>
	);
};

export default App;
