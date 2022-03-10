import Caption from '../../assets/image-caption.jpg';
import Translation from '../../assets/translate.jpg';
import CycleGan from '../../assets/cyclegan.jpg';
import XRay from '../../assets/x-ray.jpg';
import Torchvision from '../../assets/torchvisions.jpg';
import LossFunctions from '../../assets/pytorch-loss-functions.png';

import VscodeIcon from '../../assets/icons8-visual-studio-code-2019 2.svg';
import ReactNativeIcon from '../../assets/icons8-react-a-javascript-library-for-building-user-interfaces (1).svg';

export const blogs = [
	{
		image: Caption,
		blogTitle: 'Image captioning with AI',
		blogDesc:
			"In this tutorial we'll break down how to develop an automated image captioning system step-by-step using TensorFlow and Keras.",
		blogUrl: 'https://blog.paperspace.com/image-captioning-with-ai/',
	},
	{
		image: Translation,
		blogTitle: 'Neural Machine Translation with TensorFlow',
		blogDesc:
			"Learn how to build build a recurrent neural network to do French to English translation using Google's open-source machine learning library, TensorFlow.​​",
		blogUrl:
			'https://blog.paperspace.com/neural-machine-translation-with-tensorflow/',
	},
	{
		image: CycleGan,
		blogTitle: 'Unpaired Image to Image Translation with CycleGAN',
		blogDesc:
			'This article gives insights into the working mechanism of a Generative Adversarial Network and one of its popular variants, the Cycle Consistent Adversarial Network.',
		blogUrl:
			'https://blog.paperspace.com/unpaired-image-to-image-translation-with-cyclegan/',
	},
	{
		image: XRay,
		blogTitle:
			'Detecting and Localizing Pneumonia from Chest X-Ray Scans with PyTorch',
		blogDesc:
			'In this post, we’ll build a machine learning pipeline to classify whether a patient has Pneumonia or not from chest x-ray images and then draw a heat-map on areas that the model used to make these decisions.',
		blogUrl:
			'https://blog.paperspace.com/detecting-and-localizing-pneumonia-from-chest-x-ray-scans-with-pytorch/',
	},
	{
		image: Torchvision,
		blogTitle: 'Going beyond torchvision models',
		blogDesc:
			'Learn how to get access to models that have not yet been added to the Torchvision framework.',
		blogUrl: 'https://blog.paperspace.com/going-beyond-torchvision-models/',
	},
	{
		image: LossFunctions,
		blogTitle: 'PyTorch Loss Functions',
		blogDesc:
			'Follow this guide to learn about the various loss functions available to use with PyTorch neural networks, and see how you can directly implement a custom loss function in their stead.',
		blogUrl: 'https://blog.paperspace.com/pytorch-loss-functions/',
	},
];

export const projects = [
	{
		project_title: 'Note.js',
		image: VscodeIcon,
		tags: ['vscode', 'javascript', 'react', 'frontend', 'extension'],
		projectDesc:
			'Note.js is a vscode extension that allows developers to quickly prototype their frontend projects in vscode',
		projectUrl: 'https://github.com/henrhie/Note.js',
	},
	{
		project_title: 'React Native SHA',
		image: ReactNativeIcon,
		tags: ['react native', 'c++', 'java', 'javascript', 'android'],
		projectDesc:
			'React Native SHA is a Blazing fast ⚡⚡⚡ Secure Hash Algorithm solution for React Native with direct C++ bindings',
		projectUrl: 'https://github.com/henrhie/react-native-sha',
	},
	{
		project_title: 'Note.js',
		image: VscodeIcon,
		tags: ['vscode', 'javascript', 'react', 'frontend', 'extension'],
		projectDesc:
			'Note.js is a vscode extension that allows developers to quickly prototype their frontend projects in vscode',
		projectUrl: 'https://github.com/henrhie/Note.js',
	},
];

export const experiences = [
	{
		company: 'Stanbic Bank',
		role: 'Software Engineer',
	},
	{
		company: 'Superworld',
		role: 'Frontend Engineer',
	},
	{
		company: 'Facebook',
		role: 'Software Engineering Mentorship Program',
	},
];
