import React from 'react';
import IconWithTextButton from '../IconWithTextButton';

import ReactIcon from '../../../assets/icons8-react.svg';
import ReactNativeIcon from '../../../assets/icons8-reactnative.svg';
import TypescriptIcon from '../../../assets/icons8-typescript.svg';
import GraphqlIcon from '../../../assets/icons8-graphql.svg';
// import CplusplusIcon from '../../../assets/icons8-c++.svg';
// import KotlinIcon from '../../../assets/icons8-kotlin.svg';
import JavascriptIcon from '../../../assets/icons8-javascript.svg';
// import VscodeIcon from '../../../assets/icons8-visual-studio-code-2019.svg';

function SkillsSection() {
	return (
		<div style={{ marginLeft: '2.7rem', marginTop: '1.2rem' }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<IconWithTextButton
					text='React'
					Icon={ReactIcon}
					borderRadius='6.25rem'
					_border
					imageSize='18rem'
					skillButton
					textColor='#334756'
					font='inter-semibold'
				/>
				<IconWithTextButton
					text='React Native'
					Icon={ReactNativeIcon}
					borderRadius='6.25rem'
					_border
					imageSize='18rem'
					skillButton
					textColor='#334756'
					font='inter-semibold'
				/>
				<IconWithTextButton
					text='Typescript'
					Icon={TypescriptIcon}
					borderRadius='6.25rem'
					_border
					imageSize='18rem'
					skillButton
					textColor='#334756'
					font='inter-semibold'
				/>
			</div>
			<div
				style={{ display: 'flex', flexDirection: 'row', marginTop: '0.4rem' }}>
				<IconWithTextButton
					text='Graphql'
					Icon={GraphqlIcon}
					borderRadius='6.25rem'
					_border
					imageSize='18rem'
					skillButton
					textColor='#333342'
					font='inter-semibold'
				/>
				<IconWithTextButton
					text='Javascript'
					Icon={JavascriptIcon}
					borderRadius='6.25rem'
					_border
					imageSize='18rem'
					skillButton
					textColor='#333342'
					font='inter-semibold'
				/>
				{/* <IconWithTextButton
					text='Vscode'
					Icon={VscodeIcon}
					borderRadius='6.25rem'
					_border
					imageSize='18rem'
					skillButton
					textColor='#333342'
					font='inter-semibold'
				/> */}
				{/* <IconWithTextButton
					text='Kotlin'
					Icon={KotlinIcon}
					borderRadius='6.25rem'
					_border
					imageSize='18rem'
					skillButton
					textColor='#334756'
					font='inter-semibold'
				/>
				<IconWithTextButton
					text='C++'
					Icon={CplusplusIcon}
					borderRadius='6.25rem'
					_border
					imageSize='18rem'
					skillButton
					textColor='#334756'
					font='inter-semibold'
				/> */}
			</div>
		</div>
	);
}

export default SkillsSection;
