import Caption from '../../assets/image-caption.jpg';
import Translation from '../../assets/translate.jpg';
import CycleGan from '../../assets/cyclegan.jpg';
import XRay from '../../assets/x-ray.jpg';
import Torchvision from '../../assets/torchvisions.jpg';
import LossFunctions from '../../assets/pytorch-loss-functions.png';
import Encoder from '../../assets/TensorFlow_variational_encoder1.webp';
import TfPipeline from '../../assets/tfpipeline.jpeg';

import VscodeIcon from '../../assets/icons8-visual-studio-code-2019 2.svg';
import ReactNativeIcon from '../../assets/icons8-react-a-javascript-library-for-building-user-interfaces (1).svg';

export const blogs = [
	{
		image: Caption,
		blogTitle: 'Image captioning with AI',
		blogDesc:
			"In this tutorial we'll break down how to develop an automated image captioning system step-by-step using TensorFlow and Keras.",
		blogUrl: 'https://blog.paperspace.com/image-captioning-with-ai/',
		poweredBy: 'Paperspace',
	},
	{
		image: Translation,
		blogTitle: 'Neural Machine Translation with TensorFlow',
		blogDesc:
			"Learn how to build build a recurrent neural network to do French to English translation using Google's open-source machine learning library, TensorFlow.​​",
		blogUrl:
			'https://blog.paperspace.com/neural-machine-translation-with-tensorflow/',
		poweredBy: 'Paperspace',
	},
	{
		image: CycleGan,
		blogTitle: 'Unpaired Image to Image Translation with CycleGAN',
		blogDesc:
			'This article gives insights into the working mechanism of a Generative Adversarial Network and one of its popular variants, the Cycle Consistent Adversarial Network.',
		blogUrl:
			'https://blog.paperspace.com/unpaired-image-to-image-translation-with-cyclegan/',
		poweredBy: 'Paperspace',
	},
	{
		image: XRay,
		blogTitle:
			'Detecting and Localizing Pneumonia from Chest X-Ray Scans with PyTorch',
		blogDesc:
			'In this post, we’ll build a machine learning pipeline to classify whether a patient has Pneumonia or not from chest x-ray images and then draw a heat-map on areas that the model used to make these decisions.',
		blogUrl:
			'https://blog.paperspace.com/detecting-and-localizing-pneumonia-from-chest-x-ray-scans-with-pytorch/',
		poweredBy: 'Paperspace',
	},
	{
		image: Torchvision,
		blogTitle: 'Going beyond torchvision models',
		blogDesc:
			'Learn how to get access to models that have not yet been added to the Torchvision framework.',
		blogUrl: 'https://blog.paperspace.com/going-beyond-torchvision-models/',
		poweredBy: 'Paperspace',
	},
	{
		image: LossFunctions,
		blogTitle: 'PyTorch Loss Functions',
		blogDesc:
			'Follow this guide to learn about the various loss functions available to use with PyTorch neural networks, and see how you can directly implement a custom loss function in their stead.',
		blogUrl: 'https://blog.paperspace.com/pytorch-loss-functions/',
		poweredBy: 'Paperspace',
	},
	{
		image: Encoder,
		blogTitle: 'How to Build a Variational Autoencoder with TensorFlow',
		blogDesc:
			'Learn the key parts of an autoencoder, how a variational autoencoder improves on it, and how to build and train a variational autoencoder using TensorFlow.',
		blogUrl:
			'https://www.allaboutcircuits.com/technical-articles/how-to-build-a-variational-autoencoder-with-tensorflow/',
		poweredBy: 'Allaboutcircuits',
	},
	{
		image: TfPipeline,
		blogTitle: 'Building a Data Pipeline with TensorFlow',
		blogDesc: 'Exploring the tf.data API in TensorFlow.',
		blogUrl:
			'https://heartbeat.comet.ml/building-a-data-pipeline-with-tensorflow-3047656b5095',
		poweredBy: 'Hearbeat',
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
		project_title: 'Tikity',
		image: VscodeIcon,
		tags: [
			'microservices',
			'docker',
			'kubernetes',
			'next.js',
			'redis',
			'scalability',
		],
		projectDesc:
			'Tikity is a ticket reservation platform built with scalability in mind. It uses a microservice architecture',
		projectUrl: 'https://github.com/henrhie/tikity',
	},
	{
		project_title: 'Esbuild-plugin-babel-flow',
		image: VscodeIcon,
		tags: ['esbuild', 'flow', 'babel', 'code transpilation', 'plugins'],
		projectDesc:
			"Esbuild-plugin-babel-flow under the hood uses babel's transform api and @babel/preset-flow to strip javascript code of flow annotations for safe execution in a javascript environment",
		projectUrl: 'https://github.com/henrhie/esbuild-plugin-babel-flow',
	},
	{
		project_title: 'parcel-transformer-hjson',
		image: VscodeIcon,
		tags: [
			'parcel',
			'code transpilation',
			'plugin',
			'hjson',
			'json',
			'readable',
		],
		projectDesc:
			'A Parcel plugin that allows developers to write json files as hjson (human-readable json) and import them in their javascript modules',
		projectUrl: 'https://github.com/henrhie/parcel-transformer-hjson',
	},
];

export const experiences = [
	{
		company: 'Stanbic Bank',
		role: 'Software Engineer',
		duties: [
			' Developed monitoring pipelines for on-premise servers in Splunk.',
			' Increased developer productivity by developing CI/CD pipelines using Azure Devops.',
		],
		date: 'November 2021 - Present',
	},
	{
		company: 'Superworld',
		role: 'Frontend Engineer',
		duties: [
			' Built different authentication strategies for our product’s back-end to enable users to choose from several options of authentication',
			'Built highly reusable React components for our client-side application to drastically reduce repetitive code.',
			'Collaborated with a small team of product designers, product managers and engineers to put together a build-to-production strategy for a new product on Trello.',
		],
		date: 'July - September 2020',
	},
	{
		company: 'Facebook',
		role: 'Software Engineering Mentorship Program',
		duties: [
			'Introduced to some important data structures and algorithms such as Trees and Recursions and how they areused in production code.',
			'Demonstrated technical interview skills during mock interview sessions on typical software engineering interview questions.',
			'Discussed with my technical mentor some of the tools and technologies used by Facebook to build their products and highly scalable infrastructure',
			'Introduced to ways of identifying behavioral questions and using the STAR framework to structure answers to these questions.',
		],
		date: 'June - September 2020',
	},
];
