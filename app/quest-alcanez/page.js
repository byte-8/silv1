"use client";

import { useState } from "react";
import Dropdown from "../components/dropDown";
import alca from "./alca.json";

export default function QuestAlca({}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentFame, setCurrentFame] = useState(0);
  const [targetFame, setTargetFame] = useState(0);
  const [result, setResult] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleSubmit = () => {
    if (!selectedItem) {
      alert("Pilih Item Quest Terlebih Dahulu!");
      return;
    }

    const fneed = targetFame - currentFame;
    if (fneed <= 0) {
      alert("target fame harus lebih besar");
      return;
    }

    //math res
    const totQ = Math.ceil(fneed / selectedItem.fame);
    const totF = totQ * selectedItem.fame;
    const totItem = totQ * selectedItem.quantity;
    const sS = 600;
    const totS = Math.floor(totItem / sS);
    const sisa = totItem % sS;

    setResult({
      totF,
      totItem,
      totS,
      sisa,
    });
  };

  const handleCurrentFameChange = (e) => {
    const val = parseInt(e.target.value);
    setCurrentFame(val >= 0 ? val : 0);
  };

  const handleTargetFameChange = (e) => {
    const val = parseInt(e.target.value);
    setTargetFame(val >= 0 ? val : 0);
  };

  return (
    <div className="h-auto w-2/3 shadow-sm p-10 mx-auto rounded mt-10">
      <h2>Alcanez quest manager</h2>
      <Dropdown
        items={alca}
        onSelect={handleSelect}
        placeholder="Pilih Item Quest ..."
      />

      {selectedItem && (
        <div className="mt-4">
          <div className="mb-4">
            <h2>Fame Sekarang</h2>
            <input
              type="number"
              placeholder="Masukkan Fame Sekarang"
              value={currentFame}
              onChange={handleCurrentFameChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ========== */}
          <div className="mb-4">
            <h2>Fame Target</h2>
            <input
              type="number"
              placeholder="Masukkan Fame Target"
              value={targetFame}
              onChange={handleTargetFameChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Submit
          </button>
        </div>
      )}

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md text-sm md:text-lg">
          <h3 className="text-sm md:text-lg font-semibold">
            Hasil Perhitungan:
          </h3>
          <p>
            Banyak item yang dibutuhkan: {result.totItem}
            {result.totS > 0
              ? ` (${result.totS} stack${
                  result.sisa > 0 ? `, ${result.sisa} pcs` : ""
                })`
              : ""}
          </p>
          <p>Jumlah fame yang didapat: {result.totF}</p>
        </div>
      )}
    </div>
  );
}
