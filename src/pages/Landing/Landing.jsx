import React from "react";
import LayOut from "../../componets/LayOut/LayOut";
import CarouselEffect from "../../componets/Carousel/Carousel";
import Category from "../../componets/Category/Category";
import Product from "../../componets/Products/Product";

function Landing() {
  return (
    <div>
      <LayOut>
        <CarouselEffect />
        <Category />
        <Product />
      </LayOut>
    </div>
  );
}

export default Landing;
