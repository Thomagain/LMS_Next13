
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="min-h-screen bg-gray-600">
                {children}
            </div>
        </section>
    )
}
