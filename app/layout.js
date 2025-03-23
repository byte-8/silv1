import "./globals.css";
import Sidebar from "./components/sideBar";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex bg-white ${roboto.className}`}>
        <Sidebar />
        <div className="flex-1 p-8 bg-white">{children}</div>
      </body>
    </html>
  );
}
