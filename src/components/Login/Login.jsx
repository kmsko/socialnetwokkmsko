import { Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import s from './login.module.css';
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router';
let Login = (props) => {

    if (props.id) {
        return <Redirect to={`/profile/${props.id}`} />
    }
    return (
        <div >
         
            <div>Логин: kmsko@ya.ru</div>
            <div>Password: 1234 </div>
            <h2 className={s.titlePageLogin}>Вход</h2>
            <Formik
                initialValues={{ email: '', password: '', rememberMe: false }}
                onSubmit={(values, { setSubmitting }) => {
                    props.login(values.email, values.password, values.rememberMe)
                    setSubmitting(false);
                }}
            >
                {
                    <Form className={s.wrapperFormLogin}>
                        <div className={s.textEmail}>Email</div>
                        <Field type="email" name="email" placeholder="email@" className={s.emailInput} />
                        <div className={s.textPass}>Password</div>
                        <Field type="password" name="password" placeholder="password" autoComplete="current-password" className={s.passwordInput} />
                        <div >Запоимнить меня</div>
                        <Field type="checkbox" name="rememberMe" />
                        <div>
                            <button className={s.buttonLogin} type="submit">
                                Войти
                             </button>

                        </div>
                    </Form>
                }
            </Formik>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
    }
}
export default connect(mapStateToProps, { login })(Login)
