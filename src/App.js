import React, { useState, useEffect } from "react";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { BrowserView, MobileView } from "react-device-detect";
import { FaWhatsapp } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";

function App() {
  const [catego, setCatego] = useState([]);
  const [ite, setIte] = useState([]);

  useEffect(() => {
    // console.log("CATEGORIES ");
    fetch("http://192.34.109.55/BlaseExtra/Api/QRGETCATEGORIES", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rest: "sadat",
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responsejson) {
        console.log(responsejson.CategoryList);
        setCatego(responsejson.CategoryList);
      });
  }, []);

  const showData = (VALUE) => {
    // console.log(VALUE);
    fetch("http://192.34.109.55/BlaseExtra/Api/QRGELLALL", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mode: "R",
        rest: "sadat",
        category: VALUE,
        code: "0",
        nameEN: "",
        nameAR: "",
        description: "",
        price: 0,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responsejson) {
        console.log(responsejson.ProductsManagement);
        setIte(responsejson.ProductsManagement);
      });
  };

  return (
    <div className="flex-container">
      <BrowserView>
        <main>
          <section className="menu section">
            <div className="title">
              <h2>
                Sadat Resto menu list <FaQrcode style={{ fontSize: "20px" }} />
              </h2>
              <h4 className="Subtitle">Choose a Category </h4>
              <div className="underline"></div>
            </div>
            {/* CATEGORIES START */}
            <div className="child">
              {catego?.map((item, index) => {
                return (
                  <button
                    type="button"
                    className="filter-btn"
                    key={index}
                    onClick={() => showData(item.name)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </section>
        </main>
      </BrowserView>
      <MobileView>
        <main>
          <section className="menu section">
            <div className="title">
              <br></br>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: "black",
                  marginTop: "-10vh",
                }}
              >
                Sadat menu list <FaQrcode style={{ fontSize: "20px" }} />
              </p>
              <h4 className="MobileSubtitle"> Choose a Category</h4>
              <div className="Mobileunderline"></div>
            </div>
            {/* CATEGORIES START */}

            <div className="Gridbox">
              {catego?.map((item, index) => {
                return (
                  <button
                    type="button"
                    className="mobilebutton"
                    key={index}
                    onClick={() => showData(item.name)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </section>
        </main>
      </MobileView>

      <BrowserView>
        <div className="section-center">
          {ite?.map((item, index) => {
            return (
              <article className="menu-item">
                <img
                  className="photo"
                  src="https://i.redd.it/vne3691qg8h91.png"
                />
                <div className="item-info">
                  <header>
                    <h4> {item.nameEN}</h4>
                    <h4> {item.nameAR}</h4>
                  </header>
                  <p className="item-text">
                    <p style={{ color: "black" }}>{item.description}</p>
                    <text className="priceCurrency">
                      {" "}
                      Price: {item.price} {item.cur}
                    </text>
                  </p>
                  <button className="button-52">
                    <a
                      href={
                        "https://wa.me/96101339569?text=Hello, I would like to order " +
                        [item.nameEN]
                      }
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "0.85em",
                      }}
                    >
                      Order {item.nameEN} <FaWhatsapp />
                    </a>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </BrowserView>
      <MobileView>
        <div className="Mobilesection-center">
          {ite?.map((item, index) => {
            return (
              <article className="menu-item">
                <img
                  className="photo"
                  src="https://i.redd.it/vne3691qg8h91.png"
                />
                <div className="Mobitem-info">
                  <header>
                    <h4> {item.nameEN}</h4>
                    <h4> {item.nameAR}</h4>
                  </header>
                  <p className="item-text">
                    <p style={{ color: "black" }}>{item.description}</p>

                    <text className="priceCurrency">
                      {" "}
                      Price: {item.price} {item.cur}
                    </text>
                  </p>
                  <button title={"Order via Whatsapp"} className="button-52">
                    <a
                      href={
                        "https://wa.me/96103339569?text=Hello, I would like to order " +
                        [item.nameEN]
                      }
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "1.1em",
                        // fontFamily: "cursive",
                        fontWeight: "bold",
                      }}
                    >
                      {item.nameEN} <FaWhatsapp />
                    </a>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </MobileView>
      <ScrollUpButton EasingType="easeOutCubic" AnimationDuration={200} />
    </div>
  );
}

export default App;
