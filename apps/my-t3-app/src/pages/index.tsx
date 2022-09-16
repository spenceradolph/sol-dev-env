import type { NextPage } from 'next';
import Head from 'next/head';
// import { api } from '../utils/trpc';

const Home: NextPage = () => {
	// const { data } = api.example.hello.useQuery({ text: 'from tRPC' });

	return (
		<>
			<Head>
				<title>Solana Testing!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>Hello!</div>
		</>
	);
};

export default Home;
