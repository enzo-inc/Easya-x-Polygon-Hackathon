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

      doc_address: "",

      type_treatment: "",

      flag: "",

      medicine: "",

      description: "",

      documents: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <form onSubmit={formik.handleSubmit} id="survey-form" >
        <div class="m-b-md text-center">

      <Text>Record form</Text>
      <p>
          Fill the record form:
      </p>
    </div>
      <fieldset id="">
        <label for="doc_address" id="doc_address-label">
          Doctor's address: * 
          <input
            class="doc_address"
            type="text"
            id="doc_address"
            name="doc_address"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.doc_address}
          />
        </label>
      </fieldset>
      {formik.touched.doc_address && formik.errors.doc_address ? (
        <div>{formik.errors.doc_address}</div>
      ) : null}

      <fieldset>
                <label for="dropdown">
                   Type of treatment? *
                   <select id="dropdown" name="dropdown" class="m-t-xs" onChange={formik.handleChange}>
                      <option value="GP consultation" selected>GP consultation</option>
                      <option value="Lab results">Lab results</option>
                      <option value="Surgery">Surgery</option>
                      <option value="Specialist consultation">Specialist consultation</option>
                      <option value="other">Other (Mention details in the "Additional information" section)</option>
                    </select>
                </label>
        </fieldset>
        <fieldset>
                <div class="labels">
                   How serious is the disease? *
                </div>
                <label class="m-b-xs">
                <input type="radio" 
                    name="survey-form-gender" 
                    onBlur={formik.handleBlur}
                    value={"acute"}
                    onChange={formik.handleChange}
                /> Acute
                </label>
                <label class="m-b-xs">
                <input type="radio" 
                    name="survey-form-gender" 
                    onBlur={formik.handleBlur}
                    value={"moderate"}
                    onChange={formik.handleChange}
                    /> Moderate
                </label>
                <label class="m-b-xs">
                <input type="radio" 
                    name="survey-form-gender" 
                    onBlur={formik.handleBlur}
                    value={"mild"}
                    onChange={formik.handleChange} /> Mild
                </label>

        
        </fieldset>
        <fieldset id="">
        <label for="medicine" id="medicine-label">
          Doctor's address: * 
          <input
            class="medicine"
            type="text"
            id="medicine"
            name="medicine"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.medicine}
          />
        </label>
      </fieldset>
      {formik.touched.medicine && formik.errors.medicine ? (
        <div>{formik.errors.medicine}</div>
      ) : null}

            <fieldset>
            <label for="description">
                  Disease description?
                  <textarea 
                  id="description"
                  name="description"
                  type="text"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  maxlength="300"> 
                  </textarea>
                  </label>  
           </fieldset>

           <fieldset>
              <label for="documents">
                Add additional information
                <input 
                multiple
                type="text" 
                id="documents" 
                name="documents" 
                onBlur={formik.handleBlur}
                onChange = {formik.handleChange}
                value={formik.values.documents} 

            />
                </label>
            </fieldset>



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
