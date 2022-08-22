import React, { useState, useEffect } from "react";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { BrowserView, MobileView } from "react-device-detect";
import { FaWhatsapp } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";

function App() {
  const [catego, setCatego] = useState([]);
  const [ite, setIte] = useState([]);

  useEffect(() => {
    fetch("http://192.34.109.55/BlaseExtra/Api/QRGETCATEGORIES/", {
      method: "POST",
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
        // console.log(responsejson.CategoryList);
        setCatego(responsejson.CategoryList);
      });
  }, []);

  const showData = (VALUE) => {
    fetch("http://192.34.109.55/BlaseExtra/Api/QRGELLALL/", {
      method: "POST",
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
        // console.log(responsejson.ProductsManagement);
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
                  src="https://i.redd.it/30ihenxui7j91.jpg"
                />
                <div className="item-info">
                  <header>
                    <h4> {item.nameEN}</h4>
                    <h4 style={{ fontWeight: "bold" }}> {item.nameAR}</h4>
                  </header>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottom: "0.5px solid DarkGoldenRod",
                    }}
                  >
                    <h5
                      style={{
                        fontStyle: "italic",
                        fontWeight: "500",
                        marginRight: "5px",
                      }}
                    >
                      Category
                    </h5>
                    <h5 style={{ fontStyle: "italic", fontWeight: "500" }}>
                      {item.category}
                    </h5>
                  </div>

                  <div className="item-text">
                    <h5 style={{ color: "black" }}>{item.description}</h5>
                    <h5 className="priceCurrency">
                      {" "}
                      Price: {item.price} {item.cur}
                    </h5>
                  </div>
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
                <div className="container-div">
                  <img
                    className="photomobile"
                    src="https://i.redd.it/30ihenxui7j91.jpg"
                  />
                </div>

                <div className="Mobitem-info">
                  <header>
                    <h4> {item.nameEN}</h4>
                    <h4> {item.nameAR}</h4>
                  </header>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottom: "0.5px solid DarkGoldenRod",
                      flexWrap: "wrap",
                    }}
                  >
                    <h5
                      style={{
                        fontStyle: "italic",
                        fontWeight: "500",
                      }}
                    >
                      Category
                    </h5>
                    <h5
                      style={{
                        fontStyle: "italic",
                        fontWeight: "500",
                        marginLeft: "13px",
                      }}
                    >
                      {item.category}
                    </h5>
                  </div>
                  <div className="item-text">
                    <h5 style={{ color: "black" }}>{item.description}</h5>

                    <h5 className="priceCurrency">
                      {" "}
                      Price: {item.price} {item.cur}
                    </h5>
                  </div>
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

