"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const Heading = () => {
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
            <Button>
                Enter Flowtion
                <ChevronRight />
            </Button>
        </div>
    )
}
