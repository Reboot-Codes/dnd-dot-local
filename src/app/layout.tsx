import NavBar from "../components/navigation/NavBar";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        <div className="mt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
