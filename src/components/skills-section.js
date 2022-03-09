import React from 'react';
import IconWithTextButton from './button';

import ReactIcon from '../../assets/react-icon.png';
import ReactNativeIcon from '../../assets/react-native-icon.png';
import TypescriptIcon from '../../assets/typescript-icon.png';
import GraphqlIcon from '../../assets/graphql-icon.png';
import CplusplusIcon from '../../assets/cplusplus-icon.png';
import ReduxIcon from '../../assets/redux-icon.png';
import JavascriptIcon from '../../assets/javascript-icon.png';
import WebpackIcon from '../../assets/webpack-icon.png';

function SkillsSection() {
	return (
		<div style={{ marginLeft: '2.7rem', marginTop: '1.2rem' }}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					width: '77%',
				}}
			>
				<IconWithTextButton
					text='React'
					Icon={ReactIcon}
					borderRadius='18rem'
					_border
					imageSize='30rem'
					skillButton
					hoverColor='#5DD3F3'
					font='monaco'
				/>
				<IconWithTextButton
					text='Redux'
					Icon={ReduxIcon}
					borderRadius='6.25rem'
					_border
					imageSize='30rem'
					skillButton
					hoverColor='#7027A0'
					font='inter-semibold'
				/>
				<IconWithTextButton
					text='React Native'
					Icon={ReactNativeIcon}
					borderRadius='6.25rem'
					_border
					imageSize='30rem'
					skillButton
					hoverColor='#7041A9'
					font='inter-semibold'
				/>
				<IconWithTextButton
					text='Typescript'
					Icon={TypescriptIcon}
					borderRadius='6.25rem'
					_border
					imageSize='30rem'
					skillButton
					hoverColor='#2f74c0'
					font='inter-semibold'
				/>
				<IconWithTextButton
					text='Graphql'
					Icon={GraphqlIcon}
					borderRadius='6.25rem'
					_border
					imageSize='30rem'
					skillButton
					hoverColor='#FF4081'
					font='inter-semibold'
				/>
				<IconWithTextButton
					text='Javascript'
					Icon={JavascriptIcon}
					borderRadius='6.25rem'
					_border
					imageSize='30rem'
					skillButton
					hoverColor='#EAD41C'
					font='inter-semibold'
				/>

				<IconWithTextButton
					text='C++'
					Icon={CplusplusIcon}
					borderRadius='6.25rem'
					_border
					imageSize='30rem'
					skillButton
					hoverColor='#0060AA'
					font='inter-semibold'
				/>
				<IconWithTextButton
					text='Webpack'
					Icon={WebpackIcon}
					borderRadius='6.25rem'
					_border
					imageSize='30rem'
					skillButton
					hoverColor='#26C6DA'
					font='inter-semibold'
				/>
			</div>
		</div>
	);
}

export default SkillsSection;
