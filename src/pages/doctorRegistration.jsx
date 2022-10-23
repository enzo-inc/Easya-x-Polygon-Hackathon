import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./register-doc.css";
import TopBar from '../components/topBar/topBar';
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import styled from "styled-components";

const Text = styled.text`
    font-size: 3.5em;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: .08em;
    color: #396afc;  /* fallback for old browsers */
    color: -webkit-linear-gradient(to right, #2948ff, #396afc);  /* Chrome 10-25, Safari 5.1-6 */
    color: linear-gradient(to right, #2948ff, #396afc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-family: SpaceMonoRegular;
    font-weight: 700;
    opacity: 80%;
`

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      license: "",

      nationalID: "",

      nationality: "",

      workAddress_2: "",

      postcode: "",

      speciality: "",

      email: "",

      number: "",

      country_work: ""
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} id="survey-form" name="survey-form">
      <div class="m-b-md text-center">
        <Text>Doctor registration form</Text>
        <p id="description" class="description">
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
    <fieldset id="">
        <label for="license" id="license-label">
          License number: *
          <input
            class="License"
            type="text"
            id="license"
            name="license"
            placeholder="Enter your license number (required)"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.license}
          />
        </label>
      </fieldset>
      {formik.touched.license && formik.errors.license ? (
        <div>{formik.errors.license}</div>
      ) : null}

    <fieldset id="">
        <label for="speciality" id="speciality-label">
          Speciality: *
          <input
            class="speciality"
            type="text"
            id="speciality"
            name="speciality"
            placeholder="Enter your speciality (required)"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.speciality}
          />
        </label>
      </fieldset>
      {formik.touched.speciality && formik.errors.speciality ? (
        <div>{formik.errors.speciality}</div>
      ) : null}

      <fieldset id="">
        <label for="nationalID" id="nationalID-label">
          National ID: *
          <input
            type="text"
            id="nationalID"
            name="nationalID"
            placeholder="Enter your national ID number (required)"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nationalID}
          />
        </label>
      </fieldset>
      {formik.touched.nationalID && formik.errors.nationalID ? (
        <div>{formik.errors.nationalID}</div>
      ) : null}

      <fieldset id="">
        <label for="nationality" id="nationality-label">
          Nationality: *
          <CountryDropdown
            name="nationality"
            value={formik.values.nationality}
            onChange={(_, e) => formik.handleChange(e)}
            onBlur={formik.handleBlur}
          />
        </label>
      </fieldset>
      {formik.touched.nationality && formik.errors.nationality ? (
        <div>{formik.errors.nationality}</div>
      ) : null}

      <fieldset id="">
        <label for="workAddress" id="workAddress-label">
          Work address: *
          <input
            class="workAddress"
            type="text"
            id="workAddress_2"
            name="workAddress_2"
            placeholder="City, Region"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.workAddress_2}
          />
          <CountryDropdown
            id="country_work"
            name="country_work"
            class="country_work"
            required
            value={formik.values.country_work}
            onChange={(_, e) => formik.handleChange(e)}
            onBlur={formik.handleBlur}
          />
          Postcode: *
          <input
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

      <fieldset id="">
        <label for="number" id="number-label">
          Phone number: *
          {/* <PhoneInput
            country={"gb"}
            placeholder={"Enter your number"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
            required
          /> */}
            <input
            id="number"
            name="number"
            type="text"
            placeholder={"Enter your number"}
            require
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />

        </label>
      </fieldset>
      {formik.touched.number && formik.errors.number ? (
        <div>{formik.errors.number}</div>
      ) : null}

      <button id="submit" type="submit" class="btn">
        Submit the form
      </button>
    </form>
  );
};

export default function DoctorRegistration() {
    return <>
      <div class="topbar"><TopBar/></div>
      <SignupForm />;
    </>
  }
