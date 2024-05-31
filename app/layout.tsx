import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Flowtion",
    description: "A better note taking app for the future",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/logo.svg",
                href: "/logo.svg",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/logo-dark.svg",
                href: "/logo-dark.svg",
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    storageKey="flowtion-theme"
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
