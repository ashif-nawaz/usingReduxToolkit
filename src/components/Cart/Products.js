import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Item from "../Shop/Item";

const Products = (props) => {
  const cartSlice = useSelector((state) => state.cart);

  let content = <Typography align='center' variant='h6' component='h6' color="secondary">Your cart is empty.</Typography>;

  if (cartSlice.items.length > 0) {
    content = (
      <Grid container spacing={8}>
        {cartSlice.items.map((item) => {
          return <Item key={item.id} item={item} isCart={true} />;
        })}
      </Grid>
    );
  }

  return content;
};

export default Products;
