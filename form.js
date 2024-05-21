/**import './App.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FormComponent() {
  const [formData, setFormData] = useState({
    username: '',
    email: '      @gmail.com',
    rollno: '',
    contactno: '+91',
    dob: null,
    occupation: 'student',
    gender: 'male',
    languages: ['html'],
    fromDate: null,
    toDate: null
  });

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    if (event.target.name === 'languages') {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.languages.push(event.target.value);
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value);
      }

      setFormData(copy);
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  };

  const onFromDateChange = (date) => {
    setFormData({
      ...formData,
      fromDate: date
    });
  };

  const onToDateChange = (date) => {
    setFormData({
      ...formData,
      toDate: date
    });
  };

  const onDOBChange = (date) => {
    setFormData({
      ...formData,
      dob: date
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleClose = () => {
    navigate('/feedback');
  };
  const thanks = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card bg='light' text='dark'>
        <Card.Body>
          <div className='padding30px'>
            <div className="circle">
              <div className="checkmark"></div>
            </div>
          </div>
          <Card.Text>
            Thank you for submitting the form
          </Card.Text>
          <Card.Text muted>
            We will work towards improving your experience
          </Card.Text>
        
        </Card.Body>
      </Card>
    </div>
  );
  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">User Name</label>
            <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
          </div>
          <div className="form-group">
            <label htmlFor="rollno" className="form-label">Roll Number</label>
            <input className="form-control" name="rollno" onChange={onChangeHandler} value={formData.rollno} />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
          </div>
          <div className="form-group">
            <label htmlFor="contactno" className="form-label">Contact Number</label>
            <input className="form-control" name="contactno" onChange={onChangeHandler} value={formData.contactno} />
          </div>
          <div className="form-group">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <DatePicker
              selected={formData.dob}
              onChange={onDOBChange}
              className="form-control"
              name="dob"
            />
          </div>
          <div className="form-group">
            <label htmlFor="occupation" className="form-label">Course Selection</label>
            <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
              <option value="student">23ENG101</option>
              <option value="employee">23ENG303</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">Gender</label>
            <div>
              <div>
                <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="languages" className="form-label">Educational Background</label>
            <div>
              <div>
                <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
                <label htmlFor="html">Class 12</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
                <label htmlFor="css">Class 10</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
                <label htmlFor="javascript">Other</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="fromDate" className="form-label">From Date</label>
            <DatePicker
              selected={formData.fromDate}
              onChange={onFromDateChange}
              className="form-control"
              name="fromDate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="toDate" className="form-label">To Date</label>
            <DatePicker
              selected={formData.toDate}
              onChange={onToDateChange}
              className="form-control"
              name="toDate"
            />
          </div>
          <div className="form-group">
          <div className='padding30px'>
            <Button className='btn_purp' onClick={thanks} >Submit</Button>
          </div>
            
          </div>

         
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
**/
import './App.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FormComponent() {
  const [formData, setFormData] = useState({
    username: '',
    email: '@gmail.com',
    rollno: '',
    contactno: '+91',
    dob: null,
    occupation: 'student',
    gender: 'male',
    languages: ['html'],
    fromDate: null,
    toDate: null
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    if (event.target.name === 'languages') {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.languages.push(event.target.value);
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value);
      }

      setFormData(copy);
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  };

  const onFromDateChange = (date) => {
    setFormData({
      ...formData,
      fromDate: date
    });
  };

  const onToDateChange = (date) => {
    setFormData({
      ...formData,
      toDate: date
    });
  };

  const onDOBChange = (date) => {
    setFormData({
      ...formData,
      dob: date
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true); // Set submitted state to true
    console.log(formData); // You can handle form data submission here
  };

  const handleClose = () => {
    navigate('/feedback');
  };

  const thanks = (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card bg='light' text='dark'>
        <Card.Body>
          <div className='padding30px'>
            <div className="circle">
              <div className="checkmark"></div>
            </div>
          </div>
          <Card.Text>
            Thank you for submitting the form
          </Card.Text>
          <Card.Text muted>
            We will work towards improving your experience
          </Card.Text>
          <div className='padding30px'>
            <Button className='btn_purp' onClick={handleClose}>Close</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );

  // Render thanks component if form is submitted
  if (submitted) {
    return thanks;
  }

  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">User Name</label>
            <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
          </div>
          <div className="form-group">
            <label htmlFor="rollno" className="form-label">Roll Number</label>
            <input className="form-control" name="rollno" onChange={onChangeHandler} value={formData.rollno} />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
          </div>
          <div className="form-group">
            <label htmlFor="contactno" className="form-label">Contact Number</label>
            <input className="form-control" name="contactno" onChange={onChangeHandler} value={formData.contactno} />
          </div>
          <div className="form-group">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <DatePicker
              selected={formData.dob}
              onChange={onDOBChange}
              className="form-control"
              name="dob"
            />
          </div>
          <div className="form-group">
            <label htmlFor="occupation" className="form-label">Course Selection</label>
            <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
              <option value="student">23ENG101</option>
              <option value="employee">23ENG303</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">Gender</label>
            <div>
              <div>
                <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="languages" className="form-label">Educational Background</label>
            <div>
              <div>
                <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
                <label htmlFor="html">Class 12</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
                <label htmlFor="css">Class 10</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
                <label htmlFor="javascript">Other</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="fromDate" className="form-label">From Date</label>
            <DatePicker
              selected={formData.fromDate}
              onChange={onFromDateChange}
              className="form-control"
              name="fromDate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="toDate" className="form-label">To Date</label>
            <DatePicker
              selected={formData.toDate}
              onChange={onToDateChange}
              className="form-control"
              name="toDate"
            />
          </div>
          <div className="form-group">
            <div className='padding30px'>
              <Button className='btn_purp' type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;



