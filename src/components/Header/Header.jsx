import './header.css'
import Logo from '../../assets/logo.svg'

function Header() {
    return (
        <div className='title'>
            <img src={Logo} alt='logo hrnet' />
            <h1>HRnet</h1>
        </div>
    )
}

export default Header