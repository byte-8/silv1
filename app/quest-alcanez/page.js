"use client";
import { useEffect, useState } from "react";
import Dropdown from "../components/dropDown";
import ModeSwitcher from "../components/modeSwitcher";
import ItemToFame from "./ItemToFame";
import FameToItem from "./FameToItem";
import alca from "./alca.json";

export default function QuestAlca() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [mode, setMode] = useState("fame-to-item");
  const [result, setResult] = useState(null);

  // reset
  useEffect(() => {
    setResult(null);
  }, [mode]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow bg-white rounded-md">
      <h1 className="text-xl font-bold mb-4">Alcanez Quest Manager</h1>
      <Dropdown
        items={alca}
        onSelect={(item) => {
          setSelectedItem(item);
          setResult(null);
        }}
        placeholder="Pilih Item Quest ..."
      />
      {selectedItem && (
        <>
          <ModeSwitcher mode={mode} setMode={setMode} />
          {mode === "fame-to-item" ? (
            <FameToItem selectedItem={selectedItem} setResult={setResult} />
          ) : (
            <ItemToFame selectedItem={selectedItem} setResult={setResult} />
          )}
        </>
      )}

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded text-sm">
          <h2 className="font-semibold mb-2">Hasil:</h2>
          {mode === "fame-to-item" ? (
            <>
              {/* fti */}

              <p>
                Banyak item yang dibutuhkan: {result.totItem}
                {result.totS > 0
                  ? ` (${result.totS} stack${
                      result.sisa > 0 ? `, ${result.sisa} pcs` : ""
                    })`
                  : ""}
              </p>
              <p>Total Fame didapat: {result.totF}</p>
            </>
          ) : (
            <>
              {/* itf */}
              <p>Total Fame yang bisa diperoleh: {result.totalFame}</p>
              <p>Total Quest: {result.jumlahQuest}</p>
              <p>Sisa item tidak terpakai: {result.sisa}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
