import styled from "styled-components";

export const StyledTodoInput = styled.div`
    position: relative;
    margin-bottom: 1rem;

    .todo-input, .todo-submit {
        height: 3.25rem;
        border: none;
        background-color: #ffffff;
        color: #484b6a;
    }

    .todo-input {
        width: 100%;
        padding-left: 3rem;
        position: relative;
        font-family: 'Josefin Sans', sans-serif;
        border-radius: .4rem;

        &:focus { 
            outline: none;
            border: 
        }
    }

    @media (min-width: 1440px) {
        .todo-input {
            font-size: 1rem;
            width: 100%;
        }
    }

`