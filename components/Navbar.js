import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          harm.
        </Link>
        
        <div className="space-x-8">
          <Link href="/works" className="hover:text-gray-600">
            Works
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link 
            href="mailto:harmdehaas@gmail.com" 
            className="hover:text-gray-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
} 