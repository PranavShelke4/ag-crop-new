import React from "react";
import Header from "../Component/Home/Header";
import CustomersLove from "../Component/Home/CustomersLove";
import ProductsServices from "../Component/Home/ProductsServices";
import WeImproving from "../Component/Home/WeImproving";
import OurClient from "../Component/Home/OurClients";

function Home() {
  return (
    <>
      <Header />
      <CustomersLove />
      <ProductsServices />
      <WeImproving />
      <OurClient />
    </>
  );
}

export default Home;
