import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Button,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        email: '',
        lastName: '',
        name: '',
        password: '',
        confirmPassword: '',
        department:''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required('Name is required'),
        lastName: Yup.string()
          .required('Last Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
        department: Yup.string()
          .required('department name is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            lastname: values.lastname,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`,
            department: values.department
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })
          console.log(dataToSubmit)
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <h2>Sign up</h2>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

              <Form.Item required label="Name">
                <Input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>

              <Form.Item required label="Last Name">
                <Input
                  id="lastName"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className="input-feedback">{errors.lastName}</div>
                )}
              </Form.Item>

              <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                </Form.Item>
                  
               <Form.Item required label="department">
                <Input
                  id="department"
                  placeholder="Enter your department"
                  type="text"
                  value={values.department}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.department && touched.department ? 'text-input error' : 'text-input'
                  }
                />
                {errors.department && touched.department && (
                  <div className="input-feedback">{errors.department}</div>
                )}
              </Form.Item>
               
              
              <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="Confirm" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="Enter your confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};


export default RegisterPage 


/*import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function RegisterPage () {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ]
  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' }
  ]
  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' }
  ]
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date()
      .required('Required')
      .nullable()
  })
  const onSubmit = values => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikControl
            control='input'
            type='email'
            label='Email'
            name='email'
          />
          <FormikControl
            control='textarea'
            label='Description'
            name='description'
          />
          <FormikControl
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
          />
          <FormikControl
            control='radio'
            label='Radio topic'
            name='radioOption'
            options={radioOptions}
          />
          <FormikControl
            control='checkbox'
            label='Checkbox topics'
            name='checkboxOption'
            options={checkboxOptions}
          />
          <FormikControl
            control='date'
            label='Pick a date'
            name='birthDate'
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterPage*/

