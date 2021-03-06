import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalStyles } from "../../../utils/styles";
import useStyles from "./productViewStyles";
import { useReactContext } from "../../../contexts/ReactContext";
import {
  Box,
  Button,
  Card,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Slide,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const ProductView = () => {
  const { products, handleAddToCart } = useReactContext();
  const [quantity, setQuantity] = useState(1);

  const productId = useParams();

  const globalStyles = useGlobalStyles();
  const viewStyles = useStyles();

  return (
    <div className={viewStyles.content}>
      <div className={viewStyles.toolbar} />
      {products.map(
        (product) =>
          product.id === productId.id && (
            <Slide key={product.name} direction="up" in={true}>
              <Grid container spacing={1} xl={8} className={viewStyles.center}>
                <Grid item md={6}>
                  <img
                    src={product.media.source}
                    alt={product.name}
                    className={viewStyles.largeImage}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  <List>
                    <ListItem>
                      <Typography
                        gutterBottom
                        variant="h6"
                        color="textPrimary"
                        component="h1"
                      >
                        {product.name}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Box
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      ></Box>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Card>
                    <List>
                      <ListItem>
                        <Grid container>
                          <Grid item xs={6}>
                            Price
                          </Grid>
                          <Grid item xs={6}>
                            {product.price.formatted_with_symbol}
                          </Grid>
                        </Grid>
                      </ListItem>

                      <ListItem>
                        <Grid alignItems="center" container>
                          <Grid item xs={6}>
                            Status
                          </Grid>
                          <Grid item xs={6}>
                            {/* <Button color='primary' onClick={() => handleAddToCart(product.id, quantity)}>Buy</Button> */}
                            {product.quantity > 0 ? (
                              <Alert icon={false} severity="success">
                                In Stock
                              </Alert>
                            ) : (
                              <Alert icon={false} severity="error">
                                Unavailable
                              </Alert>
                            )}
                          </Grid>
                        </Grid>
                      </ListItem>
                      {product.quantity > 0 && (
                        <>
                          <ListItem>
                            <Grid container justify="flex-end">
                              <Grid item xs={6}>
                                Quantity
                              </Grid>
                              <Grid item xs={6}>
                                <Select
                                  labelId="quanitity-label"
                                  id="quanitity"
                                  fullWidth
                                  onChange={(e) => setQuantity(e.target.value)}
                                  value={quantity}
                                >
                                  {[...Array(product.quantity).keys()].map(
                                    (x) => (
                                      <MenuItem key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </MenuItem>
                                    )
                                  )}
                                </Select>
                              </Grid>
                            </Grid>
                          </ListItem>
                          <ListItem>
                            <Button
                              type="button"
                              fullWidth
                              variant="contained"
                              color="primary"
                              onClick={() =>
                                handleAddToCart(product.id, quantity)
                              }
                            >
                              Add to cart
                            </Button>
                          </ListItem>
                        </>
                      )}
                    </List>
                  </Card>
                </Grid>
              </Grid>
            </Slide>
          )
      )}
    </div>
  );
};

export default ProductView;
