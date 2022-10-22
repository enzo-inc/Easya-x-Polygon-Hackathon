import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./record.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      license: "",

      nationalID: "",

      nationality: "",

      workAddress_1: "",

      workAddress_2: "",

      postcode: "",

      speciality: "",

      email: "",

      number: "",

      country_work: ""
    },

    validationSchema: Yup.object({
      firstName: Yup.string()

        /*.max(20, "Must be 15 characters or less") */

        .required("Required"),

      lastName: Yup.string()

        /*.max(20, "Must be 20 characters or less") */

        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),

      license: Yup.string().required("Required"),

      nationalID: Yup.string().required("Required"),

      workAddress: Yup.string().required("Required"),

      speciality: Yup.string().required("Required"),

      number: Yup.string().required("Required"),

      workAddress_2: Yup.string().required("Required"),

      postcode: Yup.number().required("Required"),

      country_work: Yup.string().required("Required")
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} id="survey-form" name="survey-form">
      <div className="m-b-md text-center">
        <h1 id="title">Doctor registration form</h1>
        <p id="description" className="description text-center">
          Fill the form to register:
        </p>
      </div>

      <fieldset id="">
        <label htmlFor="firstName" id="firstName-label">
          First name: *
          <input
            className=""
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
        <label htmlFor="lastName" id="lastName-label">
          Last name: *
          <input
            className=""
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
        <label htmlFor="nationalID" id="nationalID-label">
          National ID: *
          <input
            className=""
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
        <label htmlFor="nationality" id="nationality-label">
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
        <label htmlFor="workAddress" id="workAddress-label">
          Work address: *
          <input
            className=""
            type="text"
            id="workAddress"
            name="workAddress"
            placeholder="Street, Street number"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.workAddress}
          />
          <input
            className="workAddress"
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
            className=""
            name="country_work"
            value={formik.values.country_work}
            onChange={(_, e) => formik.handleChange(e)}
            onBlur={formik.handleBlur}
          />
        </label>
      </fieldset>
      {formik.touched.workAddress && formik.errors.workAddress ? (
        <div>{formik.errors.workAddress}</div>
      ) : null}

      {formik.touched.workAddress_2 && formik.errors.workAddress_2 ? (
        <div>{formik.errors.workAddress_2}</div>
      ) : null}

      {formik.touched.country_work && formik.errors.country_work ? (
        <div>{formik.errors.country_work}</div>
      ) : null}



      <fieldset id="">
        <label htmlFor="workAddress" id="workAddress-label">
          Email: *
          <input
            placeholder="Enter your work address (required)"
            className=""
            id="email"
            name="email"
            type="email"
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
        <label htmlFor="number" id="number-label">
          Phone number: *
          <PhoneInput
            country={"gb"}
            placeholder={"Enter your number"}
            //onChange={(e) => formik.handleChange(e)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </label>
      </fieldset>

      {formik.touched.workAddress && formik.errors.workAddress ? (
        <div>{formik.errors.number}</div>
      ) : null}
      <button id="submit" type="submit" className="btn">
        Submit the form
      </button>
    </form>
  );
};

export default function RegisterDoctor() {
  return <SignupForm />;
}
