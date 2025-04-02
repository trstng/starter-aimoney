import Link from "next/link"
import { Button } from "./button"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Nav() {
  return (
    <nav className="border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-xl font-bold text-white">
                AI Money
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button 
              className="
                bg-gradient-to-r from-blue-600 to-blue-400 
                hover:from-blue-500 hover:to-blue-300
                transform hover:scale-105 transition-all duration-300
                shadow-[0_0_20px_rgba(59,130,246,0.5)]
                hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
                rounded-xl
                animate-pulse hover:animate-none
                border border-blue-400/50
                text-sm px-4 py-2 font-semibold
              "
            >
              Login
            </Button>
          </div>
          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open main menu</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 