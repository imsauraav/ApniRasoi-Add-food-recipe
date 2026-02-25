
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import InputForm from "./InputForm";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(token ? false : true);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setIsLogin(token ? false : true);
  }, [token]);

  const checkLogin = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(true);
      window.location.reload();
    } else setIsOpen(true);
  };

  return (
    <>
      <header style={styles.navbar}>
        <div style={styles.logoBox}>
          <img src={logo} alt="logo" style={styles.logoImg} />
          <h2 style={styles.logoText}>ApniRasoi</h2>
        </div>

        <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
          ☰
        </div>

        <ul className={`menu ${mobileMenu ? "open" : ""}`}>
          <li><NavLink to="/" className="navlink">Home</NavLink></li>

          <li onClick={() => isLogin && setIsOpen(true)}>
            <NavLink to={!isLogin ? "/myRecipe" : "/"} className="navlink">My Recipe</NavLink>
          </li>

          <li onClick={() => isLogin && setIsOpen(true)}>
            <NavLink to={!isLogin ? "/favRecipe" : "/"} className="navlink">Favourites</NavLink>
          </li>

          <li onClick={checkLogin}>
            <span className="navlink">
              {isLogin ? "Login" : "Logout"}
              {user?.email && <span style={styles.email}> ({user.email})</span>}
            </span>
          </li>
        </ul>
      </header>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}

<style>{`
.navlink{
text-decoration:none;
color:#222;
font-weight:500;
}

.navlink:hover{color:#FF6B00}

.navlink::after{display:none!important}

.menu{
display:flex;
gap:24px;
align-items:center;
list-style:none;
}

.hamburger{
display:none;
font-size:26px;
cursor:pointer;
}

@media(max-width:768px){

.menu{
display:none;
flex-direction:column;
background:white;
position:absolute;
right:20px;
top:90px;
padding:15px;
box-shadow:0 5px 15px rgba(0,0,0,.1);
border-radius:8px;
}

.menu.open{display:flex}

/* 🔥 MOBILE ITEMS DARK + BOLD */
.menu .navlink{
color:#000 !important;
font-weight:700;
}

/* 🔴 LOGIN / LOGOUT RED */
.menu li:last-child .navlink{
color:red !important;
font-weight:700;
}

.hamburger{display:block}
}
`}</style>
    </>
  );
}

const styles = {
  navbar:{
    width:"100%",
    padding:"2px 40px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    background:"#fff",
    borderBottom:"2px solid #eee",
    position:"sticky",
    top:0,
    zIndex:100
  },

  logoBox:{display:"flex",alignItems:"center",gap:"6px"},
  logoImg:{height:"80px",width:"80px"},
  logoText:{color:"#FF6B00",fontWeight:"700",fontSize:"26px"},
  email:{fontSize:"13px",color:"#666"}
};








