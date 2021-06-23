import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

const useStyles = makeStyles({
  Title: {
    fontSize: "0.95rem",
  },

  Description: {
    fontSize: "0.7rem",
  },

  CardActions: {
    marginBottom: "0.5rem",
  },

  AddToCart: {
    fontSize: "0.7rem",
    margin: "auto",
    textTransform: "capitalize",
  },
});

const Item = ({ item, isCart }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addToCartHandler = (e) => {
    dispatch(cartActions.addToCart(item));
  };

  const removeFromCartHandler = (e) => {
    dispatch(cartActions.removeFromCart(item));
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card>
        <Link to={`/product/${item.id}`}>
          <CardMedia
            component="img"
            height="200"
            image="https://source.unsplash.com/random"
          />
        </Link>
        <CardContent>
          <Typography
            variant="h6"
            align="center"
            component="p"
            className={classes.Title}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            component="p"
            className={classes.Description}
          >
            {item.short_description}
          </Typography>
        </CardContent>
        <CardActions className={classes.CardActions}>
          {!isCart ? (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              disableElevation
              className={classes.AddToCart}
              onClick={addToCartHandler}
            >
              +Cart
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              disableElevation
              className={classes.AddToCart}
              onClick={removeFromCartHandler}
            >
              -Remove
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
