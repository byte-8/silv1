import Link from "next/link";
export default function Sidebar() {
  return (
    <div className="bg-gray-200 text-black w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Sil V1</h2>
      <ul>
        <Link
          href="../quest-center"
          className="block hover:bg-gray-500 p-2 rounded hover:text-white"
        >
          Quest Center
        </Link>
        <Link
          href="../quest-letter"
          className="block hover:bg-gray-500 p-2 rounded hover:text-white"
        >
          Quest Letter
        </Link>
      </ul>
    </div>
  );
}
