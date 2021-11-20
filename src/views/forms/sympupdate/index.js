import React, {useState} from 'react'
import { CCard, CButton, CCardBody, CCardHeader, CCol, CForm, CFormCheck, CFormSwitch, CRow } from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import axios from 'axios'



function SympUpdate() 
 {
  const [validated, setValidated] = useState(false);
  const [coughing, setCoughing] = useState();
  const [runny, setRunny] = useState();
  const [tasteSmell, setTasteSmell] = useState();
  const [headaches, setHeadaches] = useState();
  const [nausea, setNausea] = useState();
  const [fatigue, setFatigue] = useState();
  const [soreThroat, setSoreThroat] = useState();



  const handleSubmit = (event) => {
    const form = event.currentTarget
    axios.post(process.env.REACT_APP_LOCALHOST_API + "UpdateCase", {
      coughing,
      runny,
      tasteSmell,
      headaches,
      nausea,
      fatigue,
      soreThroat
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
        <DocsCallout name="Check and Radios" href="forms/checks-radios" />
      </CCol> */}
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Select Symptoms Below: </strong>
          </CCardHeader>
          <CCardBody>
            <CFormCheck 
              type="checkbox" 
              id="coughing" 
              label="Coughing"               
              onChange={(e) => {
                setCoughing(e.target.id);
                       }}
            />
            <CFormCheck 
              type="checkbox" 
              id="runny" 
              label="Runny nose"
              onChange={(e) => {
                setRunny(e.target.id);
                       }}
            />
            <CFormCheck 
              type="checkbox" 
              id="tasteSmell" 
              label="Loss of taste or smell" 
              onChange={(e) => {
                setTasteSmell(e.target.id);
                       }}
            />
            <CFormCheck 
              type="checkbox" 
              id="headaches" 
              label="Headaches" 
              onChange={(e) => {
                setHeadaches(e.target.id);
              }}
            />
            <CFormCheck 
              type="checkbox" 
              id="nausea" 
              label="Nausea"
              onChange={(e) => {
                setNausea(e.target.id);
              }}
             />
            <CFormCheck 
              type="checkbox" 
              id="fatigue" 
              label="Fatigue"
              onChange={(e) => {
                setFatigue(e.target.id);
              }}
             />
            <CFormCheck 
              type="checkbox" 
              id="soreThroat" 
              label="Sore throat"
              onChange={(e) => {
                setSoreThroat(e.target.id);
              }}
            />
            {/* <CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked /> */}
            {/* <DocsExample href="forms/checks-radios">
              <CFormCheck id="flexCheckDefault" label="Default checkbox" />
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked />
            </DocsExample> */}
          </CCardBody>
        </CCard>
      </CCol>
      
      <CButton  component="input" type="submit" color="primary" value="Submit Form" />
    </CRow>
    </CForm>
  )
}

export default SympUpdate

// import React from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CForm,
//   CFormInput,
//   CFormLabel,
//   CFormTextarea,
//   CRow,
// } from '@coreui/react'
// import { DocsCallout, DocsExample } from 'src/components'

// const FormControl = () => {
//   return (
//     <CRow>
//       <CCol xs={12}>
//         <DocsCallout name="Form Control" href="forms/form-control" />
//       </CCol>
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Form Control</strong>
//           </CCardHeader>
//           <CCardBody>
//             <DocsExample href="forms/form-control">
//               <CForm>
//                 <div className="mb-3">
//                   <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
//                   <CFormInput
//                     type="email"
//                     id="exampleFormControlInput1"
//                     placeholder="name@example.com"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
//                   <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
//                 </div>
//               </CForm>
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//       </CCol>
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Form Control</strong> <small>Sizing</small>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-medium-emphasis small">
//               Set heights using <code>size</code> property like <code>size=&#34;lg&#34;</code> and{' '}
//               <code>size=&#34;sm&#34;</code>.
//             </p>
//             <DocsExample href="forms/form-control#sizing">
//               <CFormInput
//                 type="text"
//                 size="lg"
//                 placeholder="Large input"
//                 aria-label="lg input example"
//               />
//               <br />
//               <CFormInput
//                 type="text"
//                 placeholder="Default input"
//                 aria-label="default input example"
//               />
//               <br />
//               <CFormInput
//                 type="text"
//                 size="sm"
//                 placeholder="Small input"
//                 aria-label="sm input example"
//               />
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//       </CCol>
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Form Control</strong> <small>Disabled</small>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-medium-emphasis small">
//               Add the <code>disabled</code> boolean attribute on an input to give it a grayed out
//               appearance and remove pointer events.
//             </p>
//             <DocsExample href="forms/form-control#disabled">
//               <CFormInput
//                 type="text"
//                 placeholder="Disabled input"
//                 aria-label="Disabled input example"
//                 disabled
//               />
//               <br />
//               <CFormInput
//                 type="text"
//                 placeholder="Disabled readonly input"
//                 aria-label="Disabled input example"
//                 disabled
//                 readOnly
//               />
//               <br />
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//       </CCol>
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Form Control</strong> <small>Readonly</small>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-medium-emphasis small">
//               Add the <code>readOnly</code> boolean attribute on an input to prevent modification of
//               the input&#39;s value. Read-only inputs appear lighter (just like disabled inputs),
//               but retain the standard cursor.
//             </p>
//             <DocsExample href="forms/form-control#readonly">
//               <CFormInput
//                 type="text"
//                 placeholder="Readonly input here..."
//                 aria-label="readonly input example"
//                 readOnly
//               />
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//       </CCol>
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Form Control</strong> <small>Readonly plain text</small>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-medium-emphasis small">
//               If you want to have <code>&lt;input readonly&gt;</code> elements in your form styled
//               as plain text, use the <code>plainText</code> boolean property to remove the default
//               form field styling and preserve the correct margin and padding.
//             </p>
//             <DocsExample href="components/accordion">
//               <CRow className="mb-3">
//                 <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
//                   Email
//                 </CFormLabel>
//                 <div className="col-sm-10">
//                   <CFormInput
//                     type="text"
//                     id="staticEmail"
//                     defaultValue="email@example.com"
//                     readOnly
//                     plainText
//                   />
//                 </div>
//               </CRow>
//               <CRow className="mb-3">
//                 <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
//                   Password
//                 </CFormLabel>
//                 <div className="col-sm-10">
//                   <CFormInput type="password" id="inputPassword" />
//                 </div>
//               </CRow>
//             </DocsExample>
//             <DocsExample href="components/accordion">
//               <CForm className="row g-3">
//                 <div className="col-auto">
//                   <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
//                     Email
//                   </CFormLabel>
//                   <CFormInput
//                     type="text"
//                     id="staticEmail2"
//                     defaultValue="email@example.com"
//                     readOnly
//                     plainText
//                   />
//                 </div>
//                 <div className="col-auto">
//                   <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
//                     Password
//                   </CFormLabel>
//                   <CFormInput type="password" id="inputPassword2" placeholder="Password" />
//                 </div>
//                 <div className="col-auto">
//                   <CButton type="submit" className="mb-3">
//                     Confirm identity
//                   </CButton>
//                 </div>
//               </CForm>
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//       </CCol>
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Form Control</strong> <small>File input</small>
//           </CCardHeader>
//           <CCardBody>
//             <DocsExample href="forms/form-control#file-input">
//               <div className="mb-3">
//                 <CFormLabel htmlFor="formFile">Default file input example</CFormLabel>
//                 <CFormInput type="file" id="formFile" />
//               </div>
//               <div className="mb-3">
//                 <CFormLabel htmlFor="formFileMultiple">Multiple files input example</CFormLabel>
//                 <CFormInput type="file" id="formFileMultiple" multiple />
//               </div>
//               <div className="mb-3">
//                 <CFormLabel htmlFor="formFileDisabled">Disabled file input example</CFormLabel>
//                 <CFormInput type="file" id="formFileDisabled" disabled />
//               </div>
//               <div className="mb-3">
//                 <CFormLabel htmlFor="formFileSm">Small file input example</CFormLabel>
//                 <CFormInput type="file" size="sm" id="formFileSm" />
//               </div>
//               <div>
//                 <CFormLabel htmlFor="formFileLg">Large file input example</CFormLabel>
//                 <CFormInput type="file" size="lg" id="formFileLg" />
//               </div>
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//       </CCol>
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>React Form Control</strong> <small>Color</small>
//           </CCardHeader>
//           <CCardBody>
//             <DocsExample href="forms/form-control#color">
//               <CFormLabel htmlFor="exampleColorInput">Color picker</CFormLabel>
//               <CFormInput
//                 type="color"
//                 id="exampleColorInput"
//                 defaultValue="#563d7c"
//                 title="Choose your color"
//               />
//             </DocsExample>
//           </CCardBody>
//         </CCard>
//       </CCol>
//     </CRow>
//   )
// }

// export default FormControl
{/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Checkbox</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add the <code>disabled</code> attribute and the associated <code>&lt;label&gt;</code>s
              are automatically styled to match with a lighter color to help indicate the
              input&#39;s state.
            </p>
            <DocsExample href="forms/checks-radios#disabled">
              <CFormCheck label="Disabled checkbox" disabled />
              <CFormCheck label="Disabled checked checkbox" defaultChecked disabled />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Radio</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add the <code>disabled</code> attribute and the associated <code>&lt;label&gt;</code>s
              are automatically styled to match with a lighter color to help indicate the
              input&#39;s state.
            </p>
            <DocsExample href="forms/checks-radios#radios">
              <CFormCheck
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Default radio"
              />
              <CFormCheck
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Checked radio"
                defaultChecked
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Radio</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/checks-radios#disabled-1">
              <CFormCheck
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled"
                label="Disabled radio"
                disabled
              />
              <CFormCheck
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioCheckedDisabled"
                label="Disabled checked radio"
                defaultChecked
                disabled
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Switches</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              A switch has the markup of a custom checkbox but uses the <code>switch</code> boolean
              properly to render a toggle switch. Switches also support the <code>disabled</code>{' '}
              attribute.
            </p>
            <DocsExample href="forms/checks-radios#switches">
              <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault" />
              <CFormSwitch
                label="Checked switch checkbox input"
                id="formSwitchCheckChecked"
                defaultChecked
              />
              <CFormSwitch
                label="Disabled switch checkbox input"
                id="formSwitchCheckDisabled"
                disabled
              />
              <CFormSwitch
                label="Disabled checked switch checkbox input"
                id="formSwitchCheckCheckedDisabled"
                defaultChecked
                disabled
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Switches</strong> <small>Sizes</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/checks-radios#sizes">
              <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault" />
              <CFormSwitch
                size="lg"
                label="Large switch checkbox input"
                id="formSwitchCheckDefaultLg"
              />
              <CFormSwitch
                size="xl"
                label="Extra large switch checkbox input"
                id="formSwitchCheckDefaultXL"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Checks and Radios</strong> <small>Default layout (stacked)</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              By default, any number of checkboxes and radios that are immediate sibling will be
              vertically stacked and appropriately spaced.
            </p>
            <DocsExample href="forms/checks-radios#default-stacked">
              <CFormCheck id="defaultCheck1" label="Default checkbox" />
              <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled />
            </DocsExample>
            <DocsExample href="forms/checks-radios#default-stacked">
              <CFormCheck
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                label="Default radio"
                defaultChecked
              />
              <CFormCheck
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                label="Second default radio"
              />
              <CFormCheck
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
                label="Disabled radio"
                disabled
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Checks and Radios</strong> <small>Inline</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Group checkboxes or radios on the same horizontal row by adding <code>inline</code>{' '}
              boolean property to any <code>&lt;CFormCheck&gt;</code>.
            </p>
            <DocsExample href="forms/checks-radios#inline">
              <CFormCheck inline id="inlineCheckbox1" value="option1" label="1" />
              <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
              <CFormCheck
                inline
                id="inlineCheckbox3"
                value="option3"
                label="3 (disabled)"
                disabled
              />
            </DocsExample>
            <DocsExample href="forms/checks-radios#inline">
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox1"
                value="option1"
                label="1"
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="option2"
                label="2"
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox3"
                value="option3"
                label="3 (disabled)"
                disabled
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Checks and Radios</strong> <small>Without labels</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Remember to still provide some form of accessible name for assistive technologies (for
              instance, using <code>aria-label</code>).
            </p>
            <DocsExample href="forms/checks-radios#without-labels">
              <div>
                <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
              </div>
              <div>
                <CFormCheck
                  type="radio"
                  name="radioNoLabel"
                  id="radioNoLabel"
                  value=""
                  aria-label="..."
                />
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Toggle buttons</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Create button-like checkboxes and radio buttons by using <code>button</code> boolean
              property on the <code>&lt;CFormCheck&gt;</code> component. These toggle buttons can
              further be grouped in a button group if needed.
            </p>
            <DocsExample href="forms/checks-radios#toggle-buttons">
              <CFormCheck
                button={{ color: 'primary ' }}
                id="btn-check"
                autoComplete="off"
                label="Single toggle"
              />
            </DocsExample>
            <DocsExample href="forms/checks-radios#toggle-buttons">
              <CFormCheck
                button={{ color: 'primary ' }}
                id="btn-check-2"
                autoComplete="off"
                label="Checked"
                defaultChecked
              />
            </DocsExample>
            <DocsExample href="forms/checks-radios#toggle-buttons">
              <CFormCheck
                button={{ color: 'primary ' }}
                id="btn-check-3"
                autoComplete="off"
                label="Disabled"
                disabled
              />
            </DocsExample>
            <h3>Radio toggle buttons</h3>
            <DocsExample href="forms/checks-radios#toggle-buttons">
              <CFormCheck
                button={{ color: 'secondary' }}
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                label="Checked"
                defaultChecked
              />
              <CFormCheck
                button={{ color: 'secondary' }}
                type="radio"
                name="options"
                id="option2"
                autoComplete="off"
                label="Radio"
              />
              <CFormCheck
                button={{ color: 'secondary' }}
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
                label="Radio"
                disabled
              />
              <CFormCheck
                button={{ color: 'secondary' }}
                type="radio"
                name="options"
                id="option4"
                autoComplete="off"
                label="Radio"
              />
            </DocsExample>
            <h3>Outlined styles</h3>
            <p className="text-medium-emphasis small">
              Different variants of button, such at the various outlined styles, are supported.
            </p>
            <DocsExample href="forms/checks-radios#toggle-buttons">
              <div>
                <CFormCheck
                  button={{ color: 'primary', variant: 'outline' }}
                  id="btn-check-outlined"
                  autoComplete="off"
                  label="Single toggle"
                />
              </div>
              <div>
                <CFormCheck
                  button={{ color: 'secondary', variant: 'outline' }}
                  id="btn-check-2-outlined"
                  autoComplete="off"
                  label="Checked"
                  defaultChecked
                />
              </div>
              <div>
                <CFormCheck
                  button={{ color: 'success', variant: 'outline' }}
                  type="radio"
                  name="options-outlined"
                  id="success-outlined"
                  autoComplete="off"
                  label="Radio"
                  defaultChecked
                />
                <CFormCheck
                  button={{ color: 'danger', variant: 'outline' }}
                  type="radio"
                  name="options-outlined"
                  id="danger-outlined"
                  autoComplete="off"
                  label="Radio"
                />
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}