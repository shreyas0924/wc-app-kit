import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!;

const metadata = {
  name: "BUIDL The new Internet",
  description: "AppKit",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet, sepolia] as const;

const wagmiOptions = {};

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  auth: {
    email: true,
    socials: ["google", "github", "farcaster", "x"],
    showWallets: true,
    walletFeatures: true
  },
  ...wagmiOptions, // Optional - Override createConfig parameters
});
