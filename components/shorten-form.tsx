// components/shorten-form.tsx
"use client";

import { useState } from "react";
import { Copy, Link as LinkIcon, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ShortenForm() {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setShortUrl("");

        try {
            const res = await fetch("/api/shorten", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            // Construct full URL based on current window location
            const fullShortUrl = `${window.location.origin}/${data.shortCode}`;
            setShortUrl(fullShortUrl);
            setUrl(""); // Clear input
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shortUrl);
        alert("Copied to clipboard!");
    };

    return (
        <div className="w-full max-w-xl space-y-8">
            <form onSubmit={handleSubmit} className="relative">
                <div className="relative flex items-center">
                    <LinkIcon className="absolute left-4 text-gray-400 w-5 h-5" />
                    <input
                        type="url"
                        placeholder="Paste your long URL here..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="absolute right-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Shorten"}
                    </button>
                </div>
                {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
            </form>

            {shortUrl && (
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg flex items-center justify-between animate-in fade-in slide-in-from-top-4">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <ArrowRight className="text-green-600 w-5 h-5 flex-shrink-0" />
                        <a
                            href={shortUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-800 font-medium hover:underline truncate"
                        >
                            {shortUrl}
                        </a>
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-green-100 rounded-full transition-colors text-green-700"
                        title="Copy to clipboard"
                    >
                        <Copy className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
}