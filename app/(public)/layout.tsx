export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="h-full dark:b-dark">{children}</div>
}
