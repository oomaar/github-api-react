import styled from 'styled-components/macro';

export const Application = styled.div``;

export const Navbar = styled.nav`
    padding: 20px;
    background-color: rgb(223, 224, 222);
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const FormGroup = styled.div``;

export const FormInput = styled.input`
    border: 2px solid whitesmoke;
    border-radius: 10px;
    font-size: 1rem;
    padding: 10px;
    margin: 0 10px 0 0;
    outline: none;
`;

export const FormButton = styled.button`
    padding: 10px;
    border: 0;
    outline: 0;
    background: #f19500;
    border-radius: 10px;
    cursor: pointer;
    height: 100%;
`;

export const Card = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 50px 0 0 0;
`;

export const CardContainer = styled.div`
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

`;

export const Image = styled.img`
    width: 100%;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const CardHeader = styled.h3`
    text-align: center;
`;

export const CardMeta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
`;

export const Span = styled.span`
    border-bottom: 1px solid whitesmoke;
    padding: 10px;
    color: #808080;
`;
