export default function ModeSwitcher({ mode, setMode }) {
  return (
    <div className="flex gap-4 mb-4 mt-4">
      <button
        onClick={() => setMode("fame-to-item")}
        className={`px-4 py-2 rounded-md hover:cursor-pointer ${
          mode === "fame-to-item" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        🎯 Hitung dari Fame
      </button>
      <button
        onClick={() => setMode("item-to-fame")}
        className={`px-4 py-2 rounded-md hover:cursor-pointer ${
          mode === "item-to-fame" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        📦 Hitung dari Item
      </button>
    </div>
  );
}
