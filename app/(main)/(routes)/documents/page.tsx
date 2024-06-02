"use client"

import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/clerk-react"
import { PlusCircle } from "lucide-react"

const DocumentsPage = () => {
    const { user } = useUser()
    const create = useMutation(api.documents.create)

    const onCreate = () => {
        const promise = create({ title: "Untitled" })

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note.",
        })
    }

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos; Flowtion
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" /> Create a note
            </Button>
        </div>
    )
}
export default DocumentsPage
