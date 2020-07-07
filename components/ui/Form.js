import styled from '@emotion/styled';

export const TitleForm = styled.h1`
    text-align:center;
    margin-top:5rem;
`;

export const Form = styled.form`
    max-width:600px;
    width:95%;
    margin: 5rem auto 0 auto;
`;

export const Campo = styled.div`
    margin-bottom:2rem;
    display:flex;
    align-items:center;

    label {
        flex: 0 0 150px;
        font-size:1.8rem;
    }

    input {
        flex:1;
        padding:1rem;
    }
`;

export const Submit = styled.input`
    background-color: var(--orange);
    width:100%;
    padding:1.5rem;
    text-align:center;
    color:#FFF;
    font-size:1.8rem;
    text-transform:uppercase;
    border:none;
    font-family:'PT Sans', sans-serif;
    font-weigth:700;
    border-radius:0.3em;

    &:hover {
        cursor:pointer;
        color:#000;
    }
`;

export const Error = styled.p`
    background-color:red;
    padding:1rem;
    font-family:'PT Sans', sans-serif;
    font-weigth:700;
    font-size:1.4rem;
    color:#FFF;
    text-align:center;
    text-transform:uppercase;
    margin:2rem 0;

`;