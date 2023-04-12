import React from 'react';
import styled from 'styled-components';
import { BsArrowRightCircle } from 'react-icons/bs';
import {GiCardboardBoxClosed} from 'react-icons/gi';
import {HiClipboard} from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Bg = styled.div`
    margin: auto;
    width: 90%;
    padding: 4vh 2vw;
    border-radius: 30px;
    background: rgba(255,255,255,.8);
    border: 1px solid rgba(255,255,255,.2);
    border-bottom: 1px solid rgba(0,0,0,.2);
    border-right: 1px solid rgba(0,0,0,.2);
    box-shadow: 3px 3px 6px #00000020;
    min-height: 80vh;

    display:flex;
    flex-direction: column;
    justify-content:center;

    @media only screen and (max-width: 460px) {
        & 
        {
            width: calc(100% + 30px);
            border-radius: 0;
            transform: translateX(-15px);
            justify-content: unset;
            padding-bottom: 8vh;
        }
    }
`;
const Body = styled.div`
    width: 100%;
    padding: 10vh 2vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3%;

    @media only screen and (max-width: 768px) {
        & {
            padding: 2vh 2vw;
            padding-bottom: 10vh;
        }
    }
    @media only screen and (max-width: 300px) {
        & {
            padding: 2vh 0;
        }
    }
`;
const Box = styled.div`
    position: relative;
    width: 50%;
    height: 26vh;
    margin-bottom: 3%;

    border-radius: 30px;
    background: ${(props) => props.bg};
    opacity: 0.9;
    cursor: pointer;
    color: white;
    transition: .2s;
    &:hover{opacity:1;}
    padding: 2.5em 1.5em;

    .link {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    .iconBox {
        height: 40px;
        width: 40px;
        background: white;
        color: #3a3878;
        font-size: 1.4em;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 1.2em;
        font-weight: 600;
        margin: 0.2em 0 2em;
    }
    p {
        font-size: 0.9em;
    }
    p svg {
        font-size: 1.2em;
        margin: 0 2vw;
    }

    @media only screen and (max-width: 768px) {
        & {
            width: 80%;
        }
    }
    @media only screen and (max-width: 465px) {
        & {
            height: 24vh;
            width: 90%;
            h1 {
                margin: 0.2em 0 1em;
            }
        }
    }
    @media only screen and (max-width: 300px) {
        & {
            width: 100%;
            border-radius: 0;
            h1 {
                margin: 0.2em 0 1em;
            }
        }
    }
`;

function HomeView() {
    return (
        <Bg>
            <Body>
                <Box bg="#3a9ff8">
                    <Link className="link" to="/private/rutes"></Link>
                    <div className="iconBox">
                        <HiClipboard />
                    </div>
                    <h1>Fulles de feina</h1>
                    <p>
                        Accedeix a les teves fulles de feina
                        <BsArrowRightCircle />
                    </p>
                </Box>
                <Box bg="#2720ff">
                    <Link className="link" to="/private/ubicacio"></Link>
                    <div className="iconBox">
                        <GiCardboardBoxClosed />
                    </div>
                    <h1>Materials</h1>
                    <p>
                        Comptador de temps de les teves feines
                        <BsArrowRightCircle />
                    </p>
                </Box>
            </Body>
        </Bg>
    );
}

export default HomeView;
