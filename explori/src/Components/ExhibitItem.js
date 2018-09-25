/**
ExhibitItem.js

Renders a item for a exhibit

**/

// React JS
import React, { Component } from "react";

// Styling for JavaScript
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

//Models
import Collection from "../Models/Collection";

//Material elements
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//Routing
import { Link } from "react-router-dom";

//styling
const styles = {
  card: {
    minWidth: 245
  },
  title: {
    marginBottom: 16,
    padding: "8px"
  },
  view_item_link: {
    textDecoration: "none",
    color: "#000000"
  },
  actions: {}
};

// Displays info regarding Collection
// Takes in Collection as a prop (collection)

//declares the exhibit item
class ExhibitItem extends Component {
  constructor(props) {
    super(props);
  }

  //render the component
  render() {
    const { classes, collection } = this.props;

    return (
      <div className="ExhibitItem">
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="headline"
              component="h2"
              className={classes.title}
            >
              {collection.name}
            </Typography>
          </CardContent>

          <CardActions className={classes.actions}>
            <Link className={classes.view_item_link} push to="/view-item">
              <Button size="small">View</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

//helper for styling
ExhibitItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExhibitItem);
