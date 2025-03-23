import "./globals.css";
import Sidebar from "./components/sideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1 p-8">{children}</div>
      </body>
    </html>
  );
}
