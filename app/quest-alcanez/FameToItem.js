import { useState } from "react";

export default function FameToItem({ selectedItem, setResult }) {
  const [currentFame, setCurrentFame] = useState(0);
  const [targetFame, setTargetFame] = useState(0);

  const handleSubmit = () => {
    const fneed = targetFame - currentFame;
    if (fneed <= 0) {
      alert("Target fame harus lebih besar dari fame sekarang!");
      return;
    }

    const totQ = Math.ceil(fneed / selectedItem.fame);
    const totF = totQ * selectedItem.fame;
    const totItem = totQ * selectedItem.quantity;
    const stackSize = 600;
    const totS = Math.floor(totItem / stackSize);
    const sisa = totItem % stackSize;

    setResult({
      totF,
      totItem,
      totS,
      sisa,
    });
  };

  return (
    <div>
      <div className="mb-4">
        <label>Fame Sekarang</label>
        <input
          type="number"
          value={currentFame}
          onChange={(e) => setCurrentFame(parseInt(e.target.value) || 0)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label>Fame Target</label>
        <input
          type="number"
          value={targetFame}
          onChange={(e) => setTargetFame(parseInt(e.target.value) || 0)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:cursor-pointer"
      >
        Hitung
      </button>
    </div>
  );
}
