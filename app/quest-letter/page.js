"use client";
import { useState } from "react";
import DropDown from "../components/dropDown";
import quest from "./letter.json";

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
    const totL = Math.ceil(fneed / selectedItem.fame);
    const totFd = totL * selectedItem.fame;
    const totCeg = totL * selectedItem.cegel;
    const totIt = totL * selectedItem.quantity;
    const iName = selectedItem.item_quest;

    //
    const totRes = `${totIt} ${iName}`;
    //
    const sS = 300;
    const totS = Math.floor(totIt / sS);
    const sisa = totIt % sS;

    setResult({
      totL,
      totFd,
      totCeg,
      totRes,
      totS,
      sisa,
    });
  };

  return (
    <div className="h-auto w-2/3 shadow-sm p-10 mx-auto rounded mt-10">
      <h2>Pilih Letter</h2>
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
        <div className="mt-4 p-4 bg-gray-100 rounded-md text-sm md:text-lg">
          <h3 className="text-sm md:text-lg font-semibold">
            Hasil Perhitungan:
          </h3>
          <p>
            Banyak item yang dibutuhkan: {result.totRes}
            {result.totS > 0
              ? ` (${result.totS} stack${
                  result.sisa > 0 ? `, ${result.sisa} pcs` : ""
                })`
              : ""}
          </p>
          <p>Jumlah fame yang didapat: {result.totFd}</p>
          <p>Jumlah cegel yang didapat: {result.totCeg}</p>
        </div>
      )}
    </div>
  );
}
