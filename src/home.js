import React from "react";
import "./styles/home.scss";
import Product from "./product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Prime/XCM_Manual_ORIGIN_1262586_1338074_US_US_Desktop_gateway_3327793_3000x1200_2X_en_US._CB406715884_.jpg"
          height="600px"
          width="1500px"
          data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Prime/XCM_Manual_ORIGIN_1262586_1338074_US_US_Desktop_gateway_3327793_3000x1200_2X_en_US._CB406715884_.jpg"
          alt="amazon-hero"
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id="2321431"
            title="Epiphone Les Paul Special VE (Ebony)"
            price="29.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/71FerXXWlZL._AC_UL960_FMwebp_QL65_.jpg"
          />
          {/* Product */}
          <Product
            id="421331"
            title="Echo Show 8 -- HD smart display with Alexa – stay connected with video calling - Charcoal"
            price="104.99"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51xbLqRpczL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="531532"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price="1099.99"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
          />
          {/* Product */}
          <Product
            id="96475346"
            title="ECOVACS DEEBOT N79S Robot Vacuum Cleaner with Max Power Suction, Alexa Connectivity, App Controls, Self-Charging for Hard Surface Floors & Thin Carpets (Renewed)"
            price="129.95"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZHt7-93CL._AC_SL1500_.jpg"
          />
          {/* Product */}
          <Product
            id="64362"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con"
            price="409.99"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="64364"
            title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
            price="497.99"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
