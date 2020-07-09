import styled from '@emotion/styled';

const Button = styled.a`
    display:block;
    font-weight:700;
    text-transform:uppercase;
    border:1px solid #d1d1d1;
    padding:.4rem 2rem;
    margin:2rem 2rem;
    text-align:center;
    background-color: ${props => props.bgColor ? '#DA552F' : '#FFFFFF'};
    color: ${props => props.bgColor ? '#FFFFFF' : '#000'};
    border-radius:0.3em;

    &:last-of-type {
        margin-right:0
    }

    &:hover{
        cursor:pointer;
        color: ${props => props.bgColor ? '#000' : '#DA552F'};
    }
`;

export default Button;