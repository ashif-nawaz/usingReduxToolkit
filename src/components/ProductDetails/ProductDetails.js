import React from "react";
import { useParams } from "react-router-dom";
import Section from "../UI/Section";

const ProductDetails = (props) => {
  const { productId } = useParams();

  return <Section>
            {productId}
       </Section>;
};

export default ProductDetails;
