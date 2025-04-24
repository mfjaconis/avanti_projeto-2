import LogoGitHub from '../../images/logo-github.svg';
import { HeaderContainer } from './styles';

function Header() {

    return (
      <>
        <HeaderContainer className='container'>
            <img src={LogoGitHub} alt="Logo do GitHub" />
            <h1>Perfil <span>GitHub</span></h1>
        </HeaderContainer>
      </>
    )
  }
  
  export default Header
  