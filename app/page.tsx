// app/page.tsx
import ShortenForm from "@/components/shorten-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-8">

        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-2">
            Link Shrink Pro
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            A professional link shortener built with Next.js 14, Prisma, and Tailwind.
            Simple, fast, and open source.
          </p>
        </div>

        <ShortenForm />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-500">
          <div className="p-6 bg-white shadow-sm border rounded-xl">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Lightning Fast</h3>
            <p>Redirects happen on the server edge for maximum performance.</p>
          </div>
          <div className="p-6 bg-white shadow-sm border rounded-xl">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Secure</h3>
            <p>Input validation and safe database queries prevent malicious data.</p>
          </div>
          <div className="p-6 bg-white shadow-sm border rounded-xl">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Analytics Ready</h3>
            <p>Built-in click tracking to measure link engagement.</p>
          </div>
        </div>

      </div>
    </main>
  );
}