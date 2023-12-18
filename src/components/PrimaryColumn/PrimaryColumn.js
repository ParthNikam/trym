import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    minHeight: "100vh",
    maxWidth: "38rem",
    gap: theme.spacing(1),
    margin: "0 auto", // Center horizontally
    justifyContent: "top", // Center vertically
  },
}));

const PrimaryColumn = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Divider orientation="vertical" flexItem />
      <div className={classes.root}>{children}</div>
      <Divider orientation="vertical" flexItem />
    </>
  );
};

PrimaryColumn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrimaryColumn;
