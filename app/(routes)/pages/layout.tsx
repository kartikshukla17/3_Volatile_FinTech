
import { Navbar } from "@/components/ui/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div>
            <Navbar/>
            {children}
        </div>
  )
}
