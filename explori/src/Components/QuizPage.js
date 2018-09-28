/**
QuizPage.js

Page of application that quizes the user if they know information about the paintings

**/

//React
import React, { Component } from "react";

//libs
import nlp from 'compromise';
import _ from 'lodash';

// Quiz Gen
import QuizGen from '../Lib/QuizGen';

// Styling for JavaScript
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

//Material components

//typography
import Typography from "@material-ui/core/Typography";

//form selection
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

//button
import Button from "@material-ui/core/Button";

//Routing
import { Redirect } from "react-router-dom";

//styling
const styles = {
  quiz_container: {
    width: 500,
    marginLeft: "auto",
    marginRight: "auto"
  },
  item_title: {
    marginTop: "16px"
  },
  quiz_prompt: {
    marginTop: "8px"
  },
  quiz_options: {
    marginTop: "32px"
  },
  submit_btn: {
    float: "right"
  }
};

//Declare the QuizPage class
class QuizPage extends Component {
  constructor(props) {
    super(props);

    //TODO pull the selected item

    let selected_collection = this.props.collections[this.props.selected_collection_idx];
    let selected_item = selected_collection.items[this.props.selected_item_idx];

    let quiz_desc = QuizGen.quiz_desc(selected_item.description);

    //set starting state
    this.state = {
      selected: "option2",
      submitted: false,
      correct: null,
      selected_item: selected_item,
      quiz_desc: quiz_desc
    };

    //binding functions
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.submit = this.submit.bind(this);

    //debugging
    console.log(selected_item);
  }



  //Submits the quiz
  submit(e) {
    let { selected } = this.state;

    let correct = false;

    if (selected == "option1") {
      correct = true;
    } else {
      correct = false;
    }

    this.setState({
      ...this.state,
      submitted: true,
      correct
    });
  }

  //Handles the Radio change
  handleRadioChange(e) {
    let { value } = e.target;

    this.setState({
      ...this.state,
      selected: value
    });
  }

  //Render the QuizPage
  render() {
    const { classes } = this.props;

    //check if we submitted the quiz
    if (this.state.submitted) {
      if (this.state.correct) {
        return <Redirect push to="/quiz-complete" />;
      } else {
        return <Redirect push to="/quiz-failed" />;
      }
    }

    return (
      <div className="QuizPage">
        <div className={classes.quiz_container}>
          <div className={classes.content}>
            <div className={classes.item_title}>
              <Typography variant="display2">Quiz {this.state.selected_item.title}</Typography>
            </div>
            <div className={classes.quiz_prompt}>
              <Typography paragraph variant="body1">
                {this.state.quiz_desc}
              </Typography>
            </div>
          </div>
          <div className={classes.quiz_options}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="Quiz Options"
                name="quiz_option"
                value={this.state.selected}
                onChange={this.handleRadioChange}
                className={classes.group}
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="option1"
                />

                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="option2"
                />

                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="option3"
                />
                <FormControlLabel
                  value="option4"
                  control={<Radio />}
                  label="option4"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.submit_btn}>
            <Button
              onClick={this.submit}
              variant="contained"
              component="span"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

//styling config helper
QuizPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuizPage);
