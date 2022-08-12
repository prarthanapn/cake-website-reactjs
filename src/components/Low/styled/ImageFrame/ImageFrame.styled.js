import styled from 'styled-components'

export const StyledImageFrame = styled.div`
position: relative;

    &::before {
        content: "";
        position: absolute;
        top: -24px;
        top: -1.5rem;
        left: -27.2px;
        left: -1.7rem;
        width: 100%;
        height: 100%;
        outline: 8px solid rgb(249, 228, 148);
        outline: 0.5rem solid rgb(249, 228, 148);
        z-index: -1;
        -webkit-transition: all 1s linear;
        transition: all 1s linear;
}   
    &:hover:before {
    top: 0;
    left: 0;
}
`
