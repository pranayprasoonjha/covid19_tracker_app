import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      c19Question_1_options: "",
      c19Question_2_options: "",
      c19Question_3_options: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const {
      c19Question_1_options,
      c19Question_2_options,
      c19Question_3_options,
    } = steps;

    this.setState({
      c19Question_1_options,
      c19Question_2_options,
      c19Question_3_options,
    });
  }

  render() {
    const {
      c19Question_1_options,
      c19Question_2_options,
      c19Question_3_options,
    } = this.state;
    let score =
      c19Question_1_options + c19Question_2_options + c19Question_3_options;
    return (
      <div style={{ width: "100%" }}>
        {" "}
        {score === 0 ? (
          <div>You are healthy.</div>
        ) : score>=5? (
          <div>You are tested as positive</div>
        ): (
          <div>You should go for a doctor checkup.</div>
        )}
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    const config = {
      width: "400px",
      height: "400px",
      floating: true,
    };
    return (
      <ChatBot
      speechSynthesis={{ enable: true, lang: 'en' , voice: null }}
        {...config}
        steps={[
          {
            id: "question_1",
            message: "What is your name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "c19Question_1",
          },
          {
            id: "c19Question_1",
            message:
              "Hi {previousValue}!Are you experiencing any of the following symptoms?",
            trigger: "c19Question_1_options",
          },
          {
            id: "c19Question_1_options",
            options: [
              { value: "1", label: "Cough", trigger: "c19Question_2" },
              { value: "1", label: "Fever", trigger: "c19Question_2" },
              {
                value: "1",
                label: "Difficulty in Breathing",
                trigger: "c19Question_2",
              },
              {
                value: "0",
                label: "None of the above",
                trigger: "c19Question_2",
              },
            ],
          },
          {
            id: "c19Question_2",
            message: "Have you ever had any one of the following:",
            trigger: "c19Question_2_options",
          },
          {
            id: "c19Question_2_options",
            options: [
              { value: "1", label: "Diabetes", trigger: "c19Question_3" },
              { value: "1", label: "Hypertension", trigger: "c19Question_3" },
              { value: "2", label: "Lung disease", trigger: "c19Question_3" },
              { value: "1", label: "Heart disease", trigger: "c19Question_3" },
              {
                value: "0",
                label: "None of the above",
                trigger: "c19Question_3",
              },
            ],
          },
          {
            id: "c19Question_3",
            message: "Have you travelled anywhere in the last 14 days?",
            trigger: "c19Question_3_options",
          },
          {
            id: "c19Question_3_options",
            options: [
              { value: "5", label: "Yes", trigger: "c19Question_4" },
              { value: "0", label: "No", trigger: "c19Question_4" },
            ],
          },
          {
            id: "c19Question_4",
            message: "Which of the following applies to you?",
            trigger: "c19Question_4_options",
          },
          {
            id: "c19Question_4_options",
            options: [
              {
                value: "4",
                label:
                  "I have recently interacted or lived with someone who has tested positive for COVID-19",
                trigger: "c19Result",
              },
              {
                value: "5",
                label:
                  "I am a healthcare worker and I examined a COVID-19 confirmed case without protective gear.",
                trigger: "c19Result",
              },
              { value: "0", label: "None of above.", trigger: "c19Result" },
            ],
          },
          {
            id: "c19Result",
            message: "Great! Check out your report",
            trigger: "review",
          },
          {
            id: "review",
            component: <Review />,
            asMessage: true,
            trigger: "end-message",
          },
          {
            id: "end-message",
            message: "Thanks! Your data was submitted successfully!",
            end: true,
          },
        ]}
      />
    );
  }
}
export default SimpleForm;
