import React, {useState} from 'react'
import { CCard, CButton, CCardBody, CCardHeader, CCol, CForm, CFormSelect, CFormCheck, CFormSwitch, CRow } from '@coreui/react'
import axios from 'axios'



function NewCase() 
 {
  const [validated, setValidated] = useState(false);
  const [exposure, setExposure] = useState();
  const [vaccinated, setVaccinated] = useState();
  const [symptoms, setSymptoms] = useState();
  const [continuous, setContinuous ] = useState();




  const handleSubmit = (event) => {
    const form = event.currentTarget
    console.log(form);
    console.log(exposure);
    axios.post(process.env.REACT_APP_LOCALHOST_API + "NewCase", {
      exposure,
      vaccinated,
      symptoms,
      continuous
    })
    
    console.log(event);
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    
      
    
  }
  return (
    <CForm validated={validated} onSubmit={handleSubmit}>
    <CRow>
      {/* <CCol xs={12}>
        <DocsCallout name="Form Select" href="forms/select" />
      </CCol> */}
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>To start a new case, select your response from the dropdown menus below</strong>
          </CCardHeader>
          <CCardBody>
            <CFormSelect aria-label="Default select example" 
              id="exposure" 
              label="Exposure"               
              onChange={(e) => {
                setExposure(e.target.value);
                       }}>
              <option>Select reason for new case</option>
              <option value="1">Exposure to someone who tested positive for COVID</option>
              <option value="2">You had a positive COVID result</option>
              
              {/* <option value="3">Three</option> */}
            </CFormSelect>
            <CFormSelect aria-label="Default select example"
            id="vaccinated" 
            label="Vaccinated"               
            onChange={(e) => {
              setVaccinated(e.target.value);
                     }}>
              <option>Select vaccination status</option>
              <option value="1">Vaccinated</option>
              <option value="2">Not Vaccinated</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example"
            id="symptoms" 
            label="Symptoms"               
            onChange={(e) => {
              setSymptoms(e.target.value);
                     }}>
              <option>Select if symptoms present</option>
              <option value="1">Yes, symptoms present</option>
              <option value="2">No symptoms present</option>
            </CFormSelect>
            {/* <DocsExample href="forms/select">
              <CFormSelect aria-label="Default select example">
                <option>Select reason for new case</option>
                <option value="1">Exposure to someone who tested positive for COVID</option>
                <option value="2">You had a positive COVID result</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample> */}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>If new case due to EXPOSURE, select if it is continuous exposure</strong>
          </CCardHeader>
          <CCardBody>
            <CFormSelect aria-label="Default select example"
            id="continuous" 
            label="Continuous"               
            onChange={(e) => {
              setContinuous(e.target.value);
                     }}>
              <option>Select if continuous exposure</option>
              <option value="1">Yes, continuous exposure</option>
              <option value="2">No, isolated exposure</option>
              {/* <option value="3">Three</option> */}
            </CFormSelect>
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Select</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              You may also choose from small and large custom selects to match our similarly sized
              text inputs.
            </p>
            <DocsExample href="forms/select#sizing">
              <CFormSelect size="lg" className="mb-3" aria-label="Large select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
              <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
            <p className="text-medium-emphasis small">
              The <code>multiple</code> attribute is also supported:
            </p>
            <DocsExample href="forms/select#sizing">
              <CFormSelect size="lg" multiple aria-label="Multiple select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
            <p className="text-medium-emphasis small">
              As is the <code>htmlSize</code> property:
            </p>
            <DocsExample href="forms/select#sizing">
              <CFormSelect size="lg" multiple aria-label="Multiple select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Select</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add the <code>disabled</code> boolean attribute on a select to give it a grayed out
              appearance and remove pointer events.
            </p>
            <DocsExample href="forms/select#disabled">
              <CFormSelect aria-label="Disabled select example" disabled>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
      <CButton component="input" type="submit" color="primary" value="Submit" />
    </CRow>
    </CForm>
  )
}
 

export default NewCase
