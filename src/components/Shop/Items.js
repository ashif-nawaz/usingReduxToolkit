import { Grid } from "@material-ui/core";
import React from "react";
import Item from "./Item";

const ITEMS = [
    {
        id : 'p1',
        title : 'Product1',
        short_description : 'This is product one'
    },
    {
        id : 'p2',
        title : 'Product2',
        short_description : 'This is product two'
    },
    {
        id : 'p3',
        title : 'Product3',
        short_description : 'This is product three'
    },
    {
        id : 'p4',
        title : 'Product4',
        short_description : 'This is product four'
    },
    {
        id : 'p5',
        title : 'Product5',
        short_description : 'This is product five'
    },
    {
        id : 'p6',
        title : 'Product6',
        short_description : 'This is product six'
    },
    {
        id : 'p7',
        title : 'Product7',
        short_description : 'This is product seven'
    },
    {
        id : 'p8',
        title : 'Product8',
        short_description : 'This is product eight'
    },
];


const Items = (props) => {
  return (
    <Grid container spacing={8}>
      {ITEMS.map((item) => {
        return <Item key={item.id} item={item} isCart={false} />;
      })}
    </Grid>
  );
};

export default Items;
