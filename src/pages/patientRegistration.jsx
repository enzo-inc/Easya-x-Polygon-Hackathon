import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";

import { useFormik } from "formik";

// import './register.css'
import TopBar from '../components/topBar/topBar';

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will

  // be called when the form is submitted

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

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Patient registration form</h1>

      <p>
          Fill the form to register:
      </p>

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

<fieldset id="">
        <label for="number" id="number-label">
        Birth date *
          <input
            class="birthdate"
            type="text"
            id="date"
            name="date"
            placeholder="Enter your birthdate (required)"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
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
            value={formik.values.address}
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default function PatientRegistration() {
  return <>
    <TopBar />
    <SignupForm />;
  </>
}
