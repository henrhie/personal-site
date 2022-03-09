import React from 'react';
import ItemCard from './item-card';
import VscodeIcon from '../../assets/icons8-visual-studio-code-2019 2.svg';
import ReactNativeIcon from '../../assets/icons8-react-a-javascript-library-for-building-user-interfaces (1).svg';

export default function ProjectsPage() {
	return (
		<div
			style={{
				position: 'relative',
				top: '-5rem',
				width: '46rem',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
				}}
			>
				<ItemCard
					icon={VscodeIcon}
					project_name='Note.js'
					project_desc='Note.js is a vscode extension that allows developers to quickly
 						  prototype their frontend projects in vscode'
					tools={['vscode', 'javascript', 'react', 'frontend', 'extension']}
					link='https://github.com/henrhie/Note.js'
				/>
				<ItemCard
					icon={ReactNativeIcon}
					project_name='React Native SHA'
					project_desc='React Native SHA is a Blazing fast ⚡⚡⚡ Secure Hash Algorithm solution for React Native with direct C++ bindings'
					tools={['react native', 'c++', 'java', 'javascript', 'android']}
					link='https://github.com/henrhie/react-native-sha'
				/>
				<ItemCard
					icon={ReactNativeIcon}
					project_name='React Native SHA'
					project_desc='React Native SHA is a Blazing fast ⚡⚡⚡ Secure Hash Algorithm solution for React Native with direct C++ bindings'
					tools={['react native', 'c++', 'java', 'javascript', 'android']}
					link='https://github.com/henrhie/react-native-sha'
				/>
			</div>
		</div>
	);
}
