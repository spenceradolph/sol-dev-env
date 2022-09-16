import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { FC, ReactNode, useCallback, useMemo } from 'react';

// https://github.com/solana-labs/wallet-adapter#setup

export const WalletContext: FC<{ children: ReactNode }> = ({ children }) => {
	// The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
	const network = WalletAdapterNetwork.Devnet;

	const endpoint = useMemo(() => clusterApiUrl(network), [network]);

	const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

	const onError = useCallback((error: WalletError) => {
		console.error(error);
	}, []);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} onError={onError} autoConnect>
				<WalletModalProvider>{children}</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
};
