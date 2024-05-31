"use client"

import { useConvexAuth } from "convex/react"
import { SignInButton } from "@clerk/clerk-react"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"
import Link from "next/link"

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3x1 sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. Unified. Welcome to
                <span className="underline"> Flowtion</span>
            </h1>
            <h2 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotion is the connected workspace where <br />
                better, faster work happens.
            </h2>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                        Enter Flowtion
                        <ChevronRight />
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get Jotion Free
                        <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}
