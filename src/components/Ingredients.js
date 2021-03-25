import React, { useState, useEffect } from "react";
// import { HiFingerPrint } from "react-icons/hi";
import ingredients from "../ingredients.json";
import { Container, Paper, Chip } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles"
// import ReactDOM from "react-dom";
// import data from "../ingredients";
const Ingredients = (props) => {
  const id = parseInt(props.match.params.id);
  const thisIngredient = ingredients.filter(
    (ingredient) => ingredient.id === id
  );
  //   const classes = useStyles();

  return (
    <div>Hello</div>
    // <Container maxWidth="sm">
    //   <Paper elevation={3}>
    //     <h2>{thisIngredient[0].Name}</h2>
    //     <div>
    //       <Chip label={`id: ${thisIngredient[0].id}`}></Chip>
    //       <Chip label={`Name: ${thisIngredient[0].Name}`}></Chip>
    //     </div>
    //   </Paper>
    // </Container>
  );
};
export default Ingredients;
