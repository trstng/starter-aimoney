import { Button } from "@/components/ui/button"
import { Nav } from "@/components/ui/nav"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
      <Nav />
      
      {/* Hero Section */}
      <section className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block relative w-full aspect-square rounded-lg overflow-hidden lg:mt-12">
              <Image
                src="/images/image.png"
                alt="AI Money - Financial Technology"
                width={600}
                height={600}
                className="object-contain w-full h-full hover:scale-105 transition-all duration-500"
                priority
              />
            </div>
            <div className="text-left lg:-mt-12">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                10x Your Output
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              AI agents and automations are changing everything—faster than ever. So don’t be shy! Join the community, introduce yourself, and shoot me a DM about what you’re working on or trying to build with AI. Whether you're a entrepreneur, investor or general AI enthusiast you will be able to find a place here to pull the AI lever for you!


              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link 
                  href="https://www.skool.com/ai-money-9552/about?ref=f6521837e2b34879b835e15c06a800d6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="
                      bg-gradient-to-r from-blue-600 to-blue-400 
                      hover:from-blue-500 hover:to-blue-300
                      text-lg px-8 py-6 font-semibold
                      transform hover:scale-105 transition-all duration-300
                      shadow-[0_0_20px_rgba(59,130,246,0.5)]
                      hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
                      rounded-xl
                      animate-pulse hover:animate-none
                      border border-blue-400/50
                    "
                  >
                    Start Your AI Journey
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* AI Trading Feature */}
            <div className="rounded-lg bg-gray-700 p-6 shadow-lg border border-gray-600">
              <h3 className="text-lg font-semibold text-white">AI-Powered Trading</h3>
              <p className="mt-2 text-gray-300">
                Leverage advanced algorithms for smarter investment decisions
              </p>
            </div>

            {/* Financial Analysis Feature */}
            <div className="rounded-lg bg-gray-700 p-6 shadow-lg border border-gray-600">
              <h3 className="text-lg font-semibold text-white">Smart Financial Analysis</h3>
              <p className="mt-2 text-gray-300">
                Get personalized insights into your financial portfolio
              </p>
            </div>

            {/* Market Predictions Feature */}
            <div className="rounded-lg bg-gray-700 p-6 shadow-lg border border-gray-600">
              <h3 className="text-lg font-semibold text-white">Market Predictions</h3>
              <p className="mt-2 text-gray-300">
                Stay ahead with AI-driven market trend analysis
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
