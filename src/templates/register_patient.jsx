import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles-custom.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      gender: "",

      dob: "",

      email: "",

      number: "",

      em_number: "",

      address_1: "",

      address_2: "",

      country: "",

      postcode: ""
    },

    validationSchema: Yup.object({
      firstName: Yup.string()

        /*.max(20, "Must be 15 characters or less") */

        .required("Required"),

      lastName: Yup.string()

        /*.max(20, "Must be 20 characters or less") */

        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),

      gender: Yup.string().required("Required"),

      dob: Yup.string().required("Required"),

      address_1: Yup.string().required("Required"),

      number: Yup.string().required("Required"),

      em_number: Yup.string().required("Required"),

      address_2: Yup.string().required("Required")
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} id="survey-form" name="survey-form">
      <div class="m-b-md text-center">
        <h1 id="title">Patient registration form</h1>
        <p id="description" class="description" className="text-center">
          Fill the form to register:
        </p>
      </div>

      <fieldset id="">
        <label for="firstName" id="firstName-label">
          First name: *
          <input
            class="firstName"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your name (required)"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
        </label>
      </fieldset>
      <fieldset id="">
        <label for="lastName" id="lastName-label">
          Last name: *
          <input
            class="lastName"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your name (required)"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
        </label>
      </fieldset>
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <fieldset>
        <div class="labels">Gender: *</div>
        <label class="m-b-xs">
          <input
            type="radio"
            name="survey-form-gender"
            value={formik.values.gender}
          />{" "}
          Female
        </label>
        <label class="m-b-xs">
          <input
            type="radio"
            name="survey-form-gender"
            value={formik.values.gender}
          />{" "}
          Male
        </label>
      </fieldset>
      {formik.touched.gender && formik.errors.gender ? (
        <div>{formik.errors.gender}</div>
      ) : null}
      <fieldset>
        <label for="number" id="number-label">
          Birth date *
          <input
            class=""
            type="date"
            id="date"
            name="date"
            required
            value={formik.values.dob}
          />
        </label>
      </fieldset>

      <fieldset id="">
        <label for="address" id="workAddress-label">
          Contact address: *
          <input
            type="text"
            id="workAddress"
            name="workAddress"
            placeholder="Street, Street number"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address_1}
          />
          <input
            class="workAddress"
            type="text"
            id="workAddress_2"
            name="workAddress_2"
            placeholder="City, Region"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address_2}
          />
          <CountryDropdown
            name="country_work"
            value={formik.values.country_work}
            onChange={(_, e) => formik.handleChange(e)}
            onBlur={formik.country}
          />
          <input
            class="workAddress_1"
            type="text"
            inputmode="numeric"
            pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
            id="postcode"
            name="postcode"
            placeholder="Postcode"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postcode}
          />
        </label>
      </fieldset>
      {formik.touched.postcode && formik.errors.postcode ? (
        <div>{formik.errors.postcode}</div>
      ) : null}

      {formik.touched.workAddress_2 && formik.errors.workAddress_2 ? (
        <div>{formik.errors.workAddress_2}</div>
      ) : null}

      {formik.touched.country_work && formik.errors.country_work ? (
        <div>{formik.errors.country_work}</div>
      ) : null}

      <fieldset id="">
        <label for="email" id="email-label">
          Email: *
          <input
            placeholder="Enter your work address (required)"
            id="email"
            name="email"
            type="email"
            require
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </label>
      </fieldset>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <fieldset>
        <label for="number" id="number-label">
          Phone number: *
          <PhoneInput
            country={"gb"}
            placeholder={"Enter your number"}
            //onChange={(e) => formik.handleChange(e)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
        </label>
      </fieldset>

      {formik.touched.number && formik.errors.number ? (
        <div>{formik.errors.number}</div>
      ) : null}

      <fieldset>
        <label for="em_number" id="number-label">
          Emergency contact: *
          <PhoneInput
            country={"gb"}
            placeholder={"Enter emergency contact"}
            //onChange={(e) => formik.handleChange(e)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number_em}
          />
        </label>
      </fieldset>

      {formik.touched.number_em && formik.errors.number_em ? (
        <div>{formik.errors.number_em}</div>
      ) : null}
      <button id="submit" type="submit" class="btn">
        Submit the form
      </button>
    </form>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
