import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";
import { useFormik } from "formik";
import './register.css'
import TopBar from '../components/topBar/topBar';
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

      address: "",

      country: "",

      postcode: ""
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <form onSubmit={formik.handleSubmit} id="survey-form" >
        <div class="m-b-md text-center">

      <Text>Patient registration form</Text>

      <p>
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
            onBlur={formik.handleBlur}
            value={"female"}
            onChange={formik.handleChange}
            //defaultChecked={formik.values.gender === "female"}
          />Female{" "}
      
        </label>
        <label class="m-b-xs">
          <input
            type="radio"
            name="survey-form-gender"
            onBlur={formik.handleBlur}
            //checked={formik.values.gender === 'female'}
            value={"male"}
            onChange={formik.handleChange}
            //defaultChecked={formik.values.gender === "female"}

          />Male{" "}
        </label>
      </fieldset>


      {formik.touched.gender && formik.errors.gender ? (
        <div>{formik.errors.gender}</div>
      ) : null}

    <fieldset id="">
        <label for="dob" id="fob-label">
        Birth date *
          <input
            class="dob"
            type="date"
            id="dob"
            name="dob"
            placeholder="Enter your birthdate (required)"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
          />
        </label>
      </fieldset>

    
      <fieldset id="">
      <label for="address" id="address-label">
          Work address: *
          <input
            class="address"
            type="text"
            id="address"
            name="address"
            placeholder="City, Region"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
         
          <CountryDropdown
            name="country"
            class="country"
            value={formik.values.country}
            onChange={(_, e) => formik.handleChange(e)}
            onBlur={formik.country}
          />
          Postcode *
          <input
            class="workAddress_1"
            type="text"
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

      {formik.touched.address && formik.errors.address ? (
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
          {/* <PhoneInput
            type="text"
            name="survey-phone"
            country={"gb"}
            placeholder={"Enter your number"}
            //onChange={(e) => formik.handleChange(e)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
            
          /> */}
          <input
            placeholder="Enter your work address (required)"
            id="number"
            name="number"
            type="text"
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

      <fieldset>
        <label for="em_number" id="number-label">
          Emergency contact: *
          {/* <PhoneInput
            country={"gb"}
            placeholder={"Enter emergency contact"}
            //onChange={(e) => formik.handleChange(e)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number_em}
          /> */}

          <input
            placeholder="Enter your work address (required)"
            id="em_number"
            name="em_number"
            type="em_number"
            require
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.em_number}
          />
        </label>
      </fieldset>

      {formik.touched.em_number && formik.errors.em_number ? (
        <div>{formik.errors.em_number}</div>
      ) : null}

      <button type="submit" id="submit" class="btn">Submit</button>
    </form>
  );
};

export default function PatientRegistration() {
  return <>
    <div class="topbar"><TopBar/></div>
    <SignupForm />;
  </>
}
