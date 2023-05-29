import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
`;
export const ContainerCenter = styled.div`
    height: 100%;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: none;
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const CardLogin = styled.div`
background:#e8eff9;
    border: none;
    border-radius: 20px;
    padding: .5rem 1rem;
    width: calc(400px + 2rem);
    box-shadow: 0 4px 6px #00000020;

    .alert {
        background-color: #ee4242;
        width: 300px;
        margin: 1rem auto;
        border-radius: 5px;
        font-family: roboto;
    }

    .text-start {
        text-align: start;
        margin-top: 20px;
        margin-bottom: 20px;
        color: royalblue;

        h2 {
            font-weight: bold;
            margin-top: 1rem;
            font-size: 26px;
            text-transform: uppercase;
        }
        p{margin-bottom: 2rem;}

        *{text-align:center;}
    }
`;
export const ContainerInput = styled.div`
    text-align: left;
    margin-bottom: 8px;
    display:flex;
    justify-content:center;

    input {
        width: 300px;
        border: 1px solid #A0A0A080;
        background-color: transparent;
        background: #f9f9f9;
    }
`;

export const LoginButton = styled.button`
    width: 50%;
    border: none;
    color: white;
    background-color: royalblue;
    border-radius: 5px;
    height: 46px;
    margin-top: 1rem;
    &:hover{background:#2b58de;}
    &:active{background:#214cce;}
`;
