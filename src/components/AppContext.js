import React from 'react';

export const AppContext = React.createContext({ store: 0 });

export const ContextProvider = ({ children }) => {
	const [store, setStore] = React.useState(0);

	const [actions, setActions] = React.useState({
		setCurrentTab: (tabNumber) => setStore(tabNumber),
	});

	return (
		<AppContext.Provider value={{ store, actions }}>
			{children}
		</AppContext.Provider>
	);
};
