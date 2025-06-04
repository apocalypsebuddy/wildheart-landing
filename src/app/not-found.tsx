import { Container } from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="relative w-64 h-64 mb-8">
          <Image
            src="/img/favicon.png"
            alt="WildHeart Logo"
            fill
            className="object-contain"
          />
        </div>
        
        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl xl:text-6xl dark:text-white">
          Page Not Found
        </h1>
        
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          The page you&apos;re looking for seems to have wandered off into the wild.
          Let&apos;s get you back on track!
        </p>

        <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-8">
          <Link
            href="/"
            className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 text-lg font-medium text-center text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Container>
  );
} 