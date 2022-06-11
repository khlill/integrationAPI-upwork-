import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './signin.css'

const Signin = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '70vh', width: 370, margin: "0 auto", boxShadow:"-11px 29px 42px -3px rgba(0,0,0,0.10)" }
    const avatarStyle = { backgroundColor: '#2d4770' }
    const btnstyle = { marginTop:"20px",marginBottom:"15px", borderRadius:"0%", backgroundColor:"#06283D" }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Required").min(3),
        password: Yup.string().required("Required").min(8)
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                <p class="title h2">Lorem ipsum dolor sit amet</p>
                  <p class="subtitle h4 mt-3">consectetur adipisicing elit. <br/> Doloremque, vitae.</p>
                    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#1363DF" fill-opacity="1" d="M0,96L40,90.7C80,85,160,75,240,64C320,53,400,43,480,64C560,85,640,139,720,176C800,213,880,235,960,224C1040,213,1120,171,1200,176C1280,181,1360,235,1400,261.3L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    </svg>
                    
                  {/*   <img style={{width:"100%",height:"100%"}} src="https://via.placeholder.com/900x940" /> */}
                </div>
        <div class="col-md-6">
        <Grid  class="mt-5">
            <Paper style={paperStyle}>
                <Grid align='center' class="mt-5">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h3 style={{color:"#06283D"}}>Login</h3>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                placeholder='Enter username ' fullWidth required
                                helperText={<ErrorMessage name="username" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                       
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                               id="loginBtn" style={btnstyle} fullWidth>{props.isSubmitting ? "Loading..." : "Sign in"}</Button>
                        </Form>
                    )}
                </Formik>
                <Typography >
                </Typography>
                <Typography > Do you have an account ?&nbsp;
                     <Link href="#" id="signUp" style={{textDecoration:"none"}} onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </div>
        </div>
        </div>
    )
}

export default Signin