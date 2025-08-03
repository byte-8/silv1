import { useState } from "react";

export default function ItemToFame({ selectedItem, setResult }) {
  const [jumlahItem, setJumlahItem] = useState(0);

  const handleSubmit = () => {
    const jumlahQuest = Math.floor(jumlahItem / selectedItem.quantity);
    const sisa = jumlahItem % selectedItem.quantity;
    const totalFame = jumlahQuest * selectedItem.fame;

    setResult({
      jumlahQuest,
      totalFame,
      sisa,
    });
  };

  return (
    <div>
      <div className="mb-4">
        <label>Jumlah Item Dimiliki</label>
        <input
          type="number"
          value={jumlahItem}
          onChange={(e) => setJumlahItem(parseInt(e.target.value) || 0)}
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
