

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { InputGroup, Row, Col, Button, Alert } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function Feed() {
    const [displayForm, setDisplayForm] = useState(true);
    const [emValue, setEmValue] = useState('');
    const [nmValue, setNmValue] = useState('');
    const [phValue, setPhValue] = useState('');
    const [checkedVal, setCheckedVal] = useState([]);
    const [errorMsg, setErrorMsg] = useState('Please enter the value for the above field');

    const feedbackType = {
        'qos': 'Please rate the quality of the teaching you received from your Professor.',
        'qob': 'Please rate the quality of your syllabus.',
        'roc': 'Was the entire syllabus taught properly?',
        'exp': 'Please rate your overall learning experience.'
    };

    const feedbackOpts = ['Excellent', 'Good', 'Fair', 'Bad'];

    const handleOnChange = (isChecked, value) => {
        let temp = [...checkedVal];
        const pre = value.split('_')[0];
        if (isChecked) {
            temp = temp.filter(item => item.split('_')[0] !== pre);
            temp.push(value);
            setCheckedVal(temp);
            return;
        }
        setCheckedVal(temp.filter(item => item !== value));
    };

    const validateForm = () => {
        setErrorMsg('Please enter the value for the above field');

        [...document.getElementsByClassName('alert-danger')].forEach(element => {
            element.style.display = 'none';
        });

        let valid = true;

        if (nmValue === '') {
            document.getElementById('name_er').style.display = 'block';
            valid = false;
        }

        if (emValue === '' || !emValue.includes('.com') || !emValue.includes('@')) {
            document.getElementById('email_er').style.display = 'block';
            setErrorMsg('Invalid Email');
            valid = false;
        }

        if (!phValue || phValue.length < 13) {
            document.getElementById('phone_er').style.display = 'block';
            setErrorMsg('Invalid Phone number');
            valid = false;
        }

        if (checkedVal.length < Object.keys(feedbackType).length) {
            const keys = Object.keys(feedbackType);
            const missingKeys = keys.filter(key => !checkedVal.some(val => val.split('_')[0] === key));
            missingKeys.forEach(key => {
                document.getElementById('er_' + key).style.display = 'block';
            });
            valid = false;
        }

        return valid;
    };

    const formSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const existingEntries = JSON.parse(localStorage.getItem('allEntries')) || [];
            const newId = existingEntries.length ? parseInt(existingEntries.slice(-1)[0].id) + 1 : 0;

            const entry = {
                id: newId,
                email: emValue,
                name: nmValue,
                phone: phValue,
                checkbox_values: checkedVal
            };

            existingEntries.push(entry);
            localStorage.setItem('allEntries', JSON.stringify(existingEntries));
            setDisplayForm(false);
        }
    };

    return (
        <Container>
            {displayForm ? (
                <Card>
                    <Card.Header>
                        <cite title="Source Title">
                            We are committed to providing you with the best learning experience possible, so we welcome your comments.
                        </cite>
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            Please fill out this questionnaire.
                        </blockquote>
                    </Card.Body>
                    <Container className='padding30px'>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label className='required-field'>User Name</Form.Label>
                                        <Form.Control type="text" required placeholder="E.g. Jon Snow" value={nmValue} onChange={e => setNmValue(e.target.value)} />
                                    </Form.Group>
                                    <Alert variant='danger' id='name_er'>
                                        &#9432;{errorMsg}
                                    </Alert>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='required-field'>Email address</Form.Label>
                                        <Form.Control type="email" required placeholder="E.g. abc@gmail.com" value={emValue} onChange={e => setEmValue(e.target.value)} />
                                    </Form.Group>
                                    <Alert variant='danger' id='email_er'>
                                        &#9432;{errorMsg}
                                    </Alert>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label className='required-field'>Phone</Form.Label>
                                        <InputGroup>
                                            <PhoneInput
                                                placeholder="9999999999"
                                                value={phValue}
                                                onChange={setPhValue}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Alert variant='danger' id='phone_er'>
                                        &#9432;{errorMsg}
                                    </Alert>
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                {Object.keys(feedbackType).map((ty) => (
                                    <Col key={ty}>
                                        <Form.Group className="mb-3" controlId={ty}>
                                            <Form.Label className='required-field'>{feedbackType[ty]}</Form.Label>
                                            <InputGroup>
                                                <div className="mb-3">
                                                    {feedbackOpts.map((opt, key) => (
                                                        <Form.Check
                                                            inline
                                                            key={key}
                                                            label={opt}
                                                            name={`${ty}_feedback_opts`}
                                                            id={`${ty}_${key}`}
                                                            checked={checkedVal.includes(`${ty}_${opt}`)}
                                                            onChange={e => handleOnChange(e.target.checked, `${ty}_${opt}`)}
                                                            type='checkbox'
                                                            value={opt}
                                                        />
                                                    ))}
                                                </div>
                                            </InputGroup>
                                        </Form.Group>
                                        <Alert variant='danger' id={`er_${ty}`}>
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Col>
                                ))}
                            </Row>
                            <Button className='btn_purp' onClick={formSubmit}>Submit Review</Button>
                        </Form>
                    </Container>
                </Card>
            ) : (
                <Card bg='light' text='dark'>
                    <Card.Body>
                        <div className='padding30px'>
                            <div className="circle">
                                <div className="checkmark"></div>
                            </div>
                        </div>
                        <Card.Text>
                            Thank you for providing the feedback
                        </Card.Text>
                        <Form.Text muted>
                            We will work towards improving your experience
                        </Form.Text>
                        <div className='padding30px'>
                            <Button className='btn_purp' onClick={() => window.location.href = '/submisons'}>Close</Button>
                        </div>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
}

export default Feed;

