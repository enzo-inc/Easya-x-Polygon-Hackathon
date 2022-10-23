import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";

import { useFormik } from "formik";

import './register.css'
import TopBar from '../components/topBar/topBar';

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
      <h1>Patient registration form</h1>

      <p>
          Fill the form to register:
      </p>

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
                   <select id="dropdown" name="dropdown" class="m-t-xs">
                      <option value="GP consultation" selected>GP consultation</option>
                      <option value="Lab results">Lab results</option>
                      <option value="Surgery">Surgery</option>
                      <option value="Specialist consultation">Specialist consultation</option>
                      <option value="other">Other (Mention details in the "Disease description section")</option>
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.doc_address}
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
                    checked 
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
                  <label for="survey-form-suggestions">
                  Disease description?
                  <textarea id="survey-form-suggestions" 
                    maxlength="300"> 
                  </textarea>
                  </label>  
           </fieldset>

           <fieldset>
              <label for="documents">
                Add suplementary documents (JPG, JPEG, PNG, PDF)
                <input 
                type="file" 
                id="documents" 
                name="documents" 
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.documents} />
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
