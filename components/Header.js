import styled from 'styled-components';
import bgImg from '../static/background.png'
import headerText from '../static/bb_name.png'
import bear from '../static/bear.png';
import desk from '../static/desk2.png'


const StyledHeader = styled('header')`
  width: 100vw;
  height: 30vh;
  text-align: center;
  background-image: url("${bgImg}");
  background-position: center;
  background-size: cover;
  position: relative;
`;

const HeadingImg = styled('img')`
  width: 20rem;
  padding: 1rem 0;
`;

const BearImg = styled('img')`
width: 20rem;
`;

const ContentImg = styled('img')`
    position: absolute;
    top: 10rem;
    left: 0;
    width: 100%;`;

const Header = (props) => {
  return (
    <StyledHeader>
      <HeadingImg src={headerText} alt={'header-text'}/>
      {props.bear ? <BearImg src={bear}/> : ""}
      <ContentImg src={desk}/>
    </StyledHeader>
  )
};

export default Header;