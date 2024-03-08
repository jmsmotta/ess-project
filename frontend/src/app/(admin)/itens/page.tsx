"use client";
import React, { useState } from "react";
import { ItensStyles } from "./styles";
import {
  BlacLine,
  Previous,
  Next,
  Add,
  Look,
  Fix,
} from "./assets";
import { ApiItens } from "@/services/itens";
import { Modal, Modal2 } from '@/components/creations/modals'

export default function Itens() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    const totalItems = 1; // Adjust this based on the total number of items
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - 3));
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const [createdItem, setCreateItem] = useState(null);
  const [items, setItems] = useState([]); // State to store fetched items


  const handleItemClick = (itemIndex: any) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === itemIndex ? null : itemIndex
    );
    setCreateItem(null); // Disable createdItem when an item is clicked
  };

  const getItens = async () => {
    try {
      const itens = await ApiItens.getItens();
      console.log("itens");
      console.log(itens);
    } catch (error) {
      console.error("Erro ao obter informações:", error);
    }
  };

  const handleAddClick = (itemIndex: any) => {
    setCreateItem((prevCreateItem) =>
      prevCreateItem === itemIndex ? null : itemIndex
    );
    setSelectedItem(null); // Disable selectedItem when add is clicked
  };
  return (
    <div style={ItensStyles.container}>
      <img
        src={BlacLine.src}
        alt="Linha preta"
        style={{ width: "318px", height: "27px" }}
      />
      <text style={ItensStyles.title}>Adicionar Itens</text>
      <div>
        <h1 style={ItensStyles.categoytStyle}>Blusas</h1>
        <div style={ItensStyles.categoriesContainer}>
          <div style={ItensStyles.arrowsContainer}>
            <img
              src={Previous.src}
              alt="Anterior"
              style={{ width: "60px", height: "78px", cursor: "pointer" }}
              onClick={handlePreviousClick}
            />
            <img
              src={Fix.src}
              alt=""
              style={{ width: "60px", height: "78px" }}
            />
          </div>
          <div style={ItensStyles.itensContainer}>
            {[0, 1, 2, 3].map((itemIndex) => (
              <div
                key={currentIndex + itemIndex}
                onClick={() => handleItemClick(itemIndex)}
              >
                <img
                  src={Look.src}
                  alt={`Look ${currentIndex + itemIndex}`}
                  style={{ width: "170px", height: "200px" }}
                />
                <h2 style={ItensStyles.itensName}>
                  Nome Peça {currentIndex + itemIndex + 1}{" "}
                </h2>
              </div>
            ))}
          </div>
          <div style={ItensStyles.arrowsContainer}>
            <img
              src={Next.src}
              alt="Próximo"
              style={{ width: "60px", height: "78px", cursor: "pointer" }}
              onClick={handleNextClick}
            />
            <img
              src={Add.src}
              alt="Adicionar"
              style={{ width: "60px", height: "78px", cursor: "pointer" }}
              onClick={() => handleAddClick(1)}
            />
          </div>
        </div>
        {selectedItem !== null && (
                  <Modal />

        )}
        {createdItem !== null && (
                  <Modal2 />

        )}
      </div>
    </div>
  );
}
