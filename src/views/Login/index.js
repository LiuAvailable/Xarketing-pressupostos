/* eslint-disable no-unused-vars */
import logo from 'assets/img/logo.png';
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { CiLock, CiUser } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { useSessionSlice } from '../../reducers/auth/index';
import { selectSessionDomain } from '../../reducers/auth/selectors';
import {
    CardLogin,
    ContainerCenter,
    ContainerInput,
    LoginButton,
    StyledForm,
} from './components';

function LoginView() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { sessionActions } = useSessionSlice();
    const { isLoading, error, isAuthenticated } = useSelector(selectSessionDomain);

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const { email, password } = inputs;

    // End declaration vars

    function handleChange(e) {
        const name = e.target.id;
        const { value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            // eslint-disable-next-line no-console
            console.warn(inputs);
            dispatch(sessionActions.sessionLoginRequest({ email, password }));
        }
    };
    useEffect(() => {
        if (isAuthenticated) {
          history.push('/private/home');
        }
      }, [isAuthenticated, history]);

    return (
        <ContainerCenter className="text-center">
            <StyledForm onSubmit={handleSubmit}>
                <CardLogin>
                    <article className="card-body">
                        <img
                            style={{ maxHeight: '100px' }}
                            className="img-fluid"
                            alt="..."
                            src={logo}
                        ></img>
                        <div className="text-start">
                            <h2 className="mb-0">Benvingut</h2>
                            <p>Millora els beneficis dels teus pressupostos</p>
                        </div>

                        <ContainerInput>
                            <label htmlFor="user">
                                <CiUser /> Usuari
                                <input
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    onChange={handleChange}
                                    // required
                                />
                            </label>
                        </ContainerInput>

                        <ContainerInput>
                            <label htmlFor="user">
                                <CiLock /> Password
                                <input
                                    id="password"
                                    className="form-control"
                                    placeholder="Password"
                                    type="password"
                                    onChange={handleChange}
                                    // required
                                />
                            </label>
                        </ContainerInput>

                        {error ? (
                            <div className="mt-3">
                                <Alert key="danger" className="alert">
                                    {error.type}
                                    {error.errors.map((error) => (
                                        <div key={`${error.code}`}>
                                            {error.detail}.{' '}
                                        </div>
                                    ))}
                                </Alert>
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <LoginButton type="submit" disabled={isLoading}>
                            {isLoading && (
                                <span
                                    className="spinner-border spinner-border-sm mr-2"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                            )}
                            Entrar{isLoading && '...'}
                        </LoginButton>
                    </article>
                </CardLogin>
            </StyledForm>
        </ContainerCenter>
    );
}

export default LoginView;

