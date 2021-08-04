import styled from "styled-components";

export const Wrapper = styled.div`
background: linear-gradient(
    to bottom, rgba(0,0,0,0,)
    41%,rgba(0,0,0,0.65)
    100%,
),
url(${({image}) => image}),var(--darkGrey);
background: 100%,cover;
background-position: center;
height: 600px;
position:relative;
animation: animateHeroImge 1s;

@keyframes animateHeroImge{
from{
    opacity: 0;

}
to{
    opacity: 1;
}

}

`;
 

export const Content = styled.div`


`;
export const Text = styled.div`


`;