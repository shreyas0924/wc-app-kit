import { BitcoinIcon, CodeIcon, GlobeIcon, NetworkIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Decentralized Content Subscription Platform
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Revolutionize the way you access and pay for content with our
              decentralized platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-2 text-primary-foreground">
                  <NetworkIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Decentralized Content</h3>
              </div>
              <p className="text-muted-foreground">
                Leverage IPFS, Arweave, or Filecoin for censorship-resistant
                content storage.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-2 text-primary-foreground">
                  <BitcoinIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Crypto Payments</h3>
              </div>
              <p className="text-muted-foreground">
                Support various cryptocurrencies for flexible global payments,
                with Coinbase On-Ramp integration.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-2 text-primary-foreground">
                  <CodeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Smart Contracts</h3>
              </div>
              <p className="text-muted-foreground">
                Utilize smart contracts to automate subscription management,
                access control, and renewals.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-2 text-primary-foreground">
                  <GlobeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Global Reach</h3>
              </div>
              <p className="text-muted-foreground">
                Empower creators and consumers worldwide with our decentralized
                platform.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/placeholder.svg"
            width={800}
            height={600}
            alt="Decentralized Content Subscription Platform"
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </div>
  );
}
