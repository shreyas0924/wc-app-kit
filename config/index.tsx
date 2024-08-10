import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia, arbitrum, polygon, base } from "wagmi/chains";

export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!;

const metadata = {
  name: "ChainSub",
  description:
    "A decentralized content subscription platform powered by blockchain technology. Seamlessly create wallets, purchase crypto, and access premium content with integrated Web3 functionality. Featuring email-based authentication, social logins, and multi-chain support, our platform offers content creators and consumers a secure, flexible, and user-friendly ecosystem for sharing and monetizing digital media.A decentralized con",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet, sepolia, polygon, base, arbitrum] as const;

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
    socials: ["google", "github"],
    showWallets: true,
    walletFeatures: true,
  },
});
