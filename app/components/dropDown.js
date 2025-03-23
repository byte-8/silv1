"use client";
import { useState } from "react";

export default function Dropdown({ items, onSelect, placeholder }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = items.filter((item) =>
    item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (item) => {
    setSelectedItem(item); //
    setSearchTerm(""); //
    setIsOpen(false); //
    onSelect(item); //
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); //
    if (selectedItem) {
      setSelectedItem(null); //
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={selectedItem ? selectedItem.item_name : searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredItems.map((item) => (
            <div
              key={item.shortname}
              onClick={() => handleSelect(item)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.item_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
