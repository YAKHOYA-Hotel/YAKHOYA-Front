import styled from "styled-components";
import defaultImg from "../images/defaultChambre.jpg";

const StyledHero = styled.header`
min-height: 93vh;
background: url(${props=>props.img}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`

export default StyledHero;