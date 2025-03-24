import "./globals.css";
import Sidebar from "./components/sideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="md:flex md:flex-row">
        <Sidebar />
        <div className="md:flex-1">{children}</div>
      </body>
    </html>
  );
}
