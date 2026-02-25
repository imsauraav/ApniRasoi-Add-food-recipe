
import React, { useState } from "react";
import RecipeItems from "../components/RecipeItems";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import InputForm from "../components/InputForm";
import banner from "../assets/banner.png";

export default function Home() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const addRecipe = () => {
    let token = localStorage.getItem("token");
    token ? navigate("/addRecipe") : setIsOpen(true);
  };

  return (
    <>
      <div style={{ width: "100%", overflowX: "hidden" }}>

        {/* HERO */}
        <section className="hero-section">
          <div className="hero-inner">

            {/* BANNER */}
            <div className="hero-right">
              <img src={banner} alt="banner" />
            </div>

            {/* TEXT */}
            <div className="hero-left">
              <h1>Cook. Share. Smile 😋</h1>

              <p>
                Welcome to <b>ApniRasoi</b> — where normal people cook legendary food 😄  
                From secret masalas to late-night Maggi — every recipe matters.  
                Share yours, steal ideas, and enjoy food together ❤️
              </p>

              <button onClick={addRecipe}>🍳 Share Your Recipe</button>
            </div>

          </div>
        </section>

        {isOpen && (
          <Modal onClose={() => setIsOpen(false)}>
            <InputForm setIsOpen={() => setIsOpen(false)} />
          </Modal>
        )}

        {/* RECIPES */}
        <section className="recipe-section">
          <h2>🔥 Recipes</h2>
          <RecipeItems />
        </section>

      </div>
    </>
  );
}
