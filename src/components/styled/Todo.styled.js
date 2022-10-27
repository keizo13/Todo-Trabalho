import styled from "styled-components";
import checkIcon from "./../../images/icon-check.svg";

export const StyledTodo = styled.div`
   min-height: 3.75rem;
   padding: 0 1rem;
   background-color: #ffffff;
   border-bottom: 1px solid #e4e5f1;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   color: #484b6a;
   box-shadow: 0 1rem 1.25rem rgb(207, 207, 207, 0.5);


   .todo-name {
       overflow-wrap: anywhere;
       padding: .25rem;
       margin-left: 2rem;
       margin-top: .5rem;
       font-size: .83rem;
       display: flex;
       align-items: center;
       justify-content: start;
       width: 80%;
       position: relative;
       left: -2.5rem;
       transition: color 150ms linear;
   }

   .complete-todo {
    text-decoration: line-through;
    color: #d2d3db;
   }

   .todo-checkbox {
       opacity: 0;
       position: absolute;

       &:checked + .custom-checkbox {
        background: url(${checkIcon}), linear-gradient(120deg, #caf0f8, #023e8a);
        background-repeat: no-repeat;
        background-position: center;

        &::after  {
           content: "";
           position: absolute;
           top: .75rem;
           right: 0;
           left: 2.25rem;
           height: 2px;
       }
       }
   }

   .custom-checkbox {
       height: 1.3rem;
       min-width: 1.3rem;
       border: 1px solid #d2d3db;
       border-radius: 50%;
       margin-right: .75rem;
       transition: border 150ms linear;

       &:hover {
           border: 2px solid #d2d3db;
       }
   }

   .todo-delete {
       background: none;
       border: none;
       transition: color 150ms linear;
   }

   @media (min-width: 1440px) {
    
        &:hover > .todo-delete {
            visibility: visible;
        }   

        .todo-name {
            font-size: 1rem;
        }

        .todo-delete {
            visibility: hidden;
        }
    }

`