"use client";
import { useState } from "react";
import DropDown from "../components/dropDown";
import quest from "./quest.json";

export default function QuestCenter({}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentFame, setCurrentFame] = useState(0);
  const [targetFame, setTargetFame] = useState(0);
  const [result, setResult] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
    // console.log(item);
  };

  const handleCurrentFameChange = (e) => {
    const val = parseInt(e.target.value);
    setCurrentFame(val >= 0 ? val : 0);
  };

  const handleTargetFameChange = (e) => {
    const val = parseInt(e.target.value);
    setTargetFame(val >= 0 ? val : 0);
  };

  const handleSub = () => {
    if (!selectedItem) {
      alert("Pilih Item Quest terlebih dahulu!");
      return;
    }

    //math
    const fneed = targetFame - currentFame;
    if (fneed <= 0) {
      alert("Target fame harus lebih besar dari fame sekarang!");
      return;
    }
    const totQ = Math.ceil(fneed / selectedItem.fame);
    const totFd = totQ * selectedItem.fame;
    const totCeg = totQ * selectedItem.cegel;
    const totIt = totQ * selectedItem.quantity;
    //
    const sS = 300;
    const totS = Math.floor(totIt / sS);
    const sisa = totIt % sS;

    setResult({
      totFd,
      totCeg,
      totIt,
      totS,
      sisa,
    });
  };

  return (
    <div className="h-auto w-3/4 shadow-lg p-10 mx-auto rounded">
      <h2>Pilih Quest</h2>
      <DropDown
        items={quest}
        onSelect={handleSelect}
        placeholder="Search items ..."
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
            <h2>Fame Sekarang</h2>
            <input
              type="number"
              placeholder="Masukkan Fame Sekarang"
              value={targetFame}
              onChange={handleTargetFameChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSub}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Submit
          </button>
        </div>
      )}

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">Hasil Perhitungan:</h3>
          <p>
            Banyak item yang dibutuhkan: {result.totIt}
            {result.totS > 0
              ? ` (${result.totS} stak${
                  result.sisa > 0 ? `, ${result.sisa} pcs` : ""
                })`
              : ""}
          </p>
          <p>Jumlah fame yang didapat: {result.totFd}</p>
          <p>Jumlah cegel yang didapat: {result.totCeg}</p>
        </div>
      )}
      <p className="text-red-600 pt-5">*Limit quest setiap seal ps berbeda .</p>
    </div>
  );
}
