import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-t from-gray-900 to-gray-800 text-white">
      <h1 className="mb-4 text-5xl font-bold">404 - Page Not Found</h1>
      <p className="mb-8 text-lg">Oops! Looks like you&apos;re lost.</p>
      <Link href="/dashboard" className="text-blue-500 underline hover:text-blue-700">
        Go back home
      </Link>
    </div>
  );
}
