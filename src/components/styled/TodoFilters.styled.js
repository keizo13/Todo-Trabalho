import styled from "styled-components";

export const StyledFilters = styled.section`
    background: #ffffff;
    position: relative;
    height: 3.75rem;
    border-bottom-left-radius: .4rem;
    border-bottom-right-radius: .4rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .83rem;
    box-shadow: 0 1rem 1.25rem rgb(207, 207, 207, 0.5);

    .remaining {
        color: #9394a5;
    }

    .filters {
        height: 3.75rem;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -5rem;
        display: flex;
        justify-content: space-evenly;
        border-radius: .4rem;
        padding: 0 4.75rem;
        background: #ffffff;
        box-shadow: 0 1rem 1.25rem rgb(207, 207, 207, 0.5);

        .filter {
            font-size: .9rem;
            font-weight: 700;
        }  

        .active-filter {
            color: #48cae4;
        }
    }

    .filter, .clear {
        background: none;
        border: none;
        color: #9394a5;
        transition: all 150ms linear;
    }

    .clear:hover {
        cursor: pointer;
        color: rgb(168, 0, 0);
    }

    @media (min-width: 1440px) {
        height: 3rem;
        justify-content: space-between;
        

        .filters {
            position: relative;
            bottom: 0;
            height: 100%;
            width: 10rem;
            padding: 0;
            box-shadow: none;

            .filter {
                font-size: .83rem;
            }
        }
    }
`