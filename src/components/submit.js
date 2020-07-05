import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const emailPattern = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

function FormSubmit() {
  const { register, handleSubmit, errors, reset } = useForm();

  // const [submit, setSubmit] = useState(false);
  // const [status, setStatus] = useState("");
  const [action, setAction] = useState("");

  const onSubmit = (data) => {
    if (data) {
      axios
        .post("https://formspree.io/xgenagqk", data)
        .then(function(response) {
          if (response.status === 200) {
            updateButtonMsg();
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  const updateButtonMsg = () => {
    setAction("state-1 animated");

    setTimeout(finalButtonMsg, 2000);
  };

  const finalButtonMsg = () => {
    setAction("state-2");

    setTimeout(setInitialButtonState, 2000);
  };

  const setInitialButtonState = () => {
    setAction("");
    reset();
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label htmlFor="fullName" className="label" id="fullName">
                Full name:
              </label>
              <div className="control">
                <input
                  name="fullName"
                  ref={register({ required: true, maxLength: 30 })}
                  className={`input ${errors.fullName && "is-danger"} `}
                  type="text"
                  placeholder="Some name"
                  defaultValue=""
                />
              </div>
              {errors.fullName && (
                <p className="help is-danger">This field is required!</p>
              )}
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label htmlFor="email" className="label" id="email">
                Email address:
              </label>
              <div className="control">
                <input
                  name="email"
                  ref={register({
                    required: true,
                    pattern: emailPattern,
                  })}
                  className={`input ${errors.email && "is-danger"}`}
                  type="email"
                  placeholder="some@email.com"
                  defaultValue=""
                />
              </div>
              {errors.email && errors.email.type === "required" && (
                <p className="help is-danger">This field is required!</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="help is-danger">
                  Please enter a valid email address.
                </p>
              )}
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label htmlFor="subject" className="label" id="subject">
                Subject:
              </label>
              <div className="control">
                <input
                  name="subject"
                  ref={register({ required: true })}
                  className={`input ${errors.subject && "is-danger"} `}
                  type="text"
                  placeholder="Hi"
                  defaultValue=""
                />
              </div>
              {errors.subject && (
                <p className="help is-danger">This field is required!</p>
              )}
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label htmlFor="message" className="label" id="message">
                Message:
              </label>
              <div className="control">
                <textarea
                  name="message"
                  ref={register({ required: true })}
                  className={`textarea ${errors.message && "is-danger"} `}
                  placeholder="Some message"
                ></textarea>
              </div>
              {errors.message && (
                <p className="help is-danger">This field is required!</p>
              )}
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control has-text-centered">
                <button
                  className={`button is-primary is-outlined is-rounded is-medium submit-button ${action}`}
                  type="submit"
                >
                  <span className="pre-state-msg">Submit</span>
                  <span className="current-state-msg">Sending...</span>
                  <span className="done-state-msg">Done!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormSubmit;
