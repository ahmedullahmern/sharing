import '../css/style.scss'
import LOGO from '../../assets/logo.svg'

function HomePage() {
    return (
        <div className="container">
            <div className="header-bar">
                <div className="imges">
                    <img src={LOGO} alt="" />
                </div>
                <div className='list-header'>
                    <ul>
                        <li>
                            How it works
                        </li>
                        <li>
                            Download
                        </li>
                        <li>
                            Upgrade
                        </li>
                        <li>
                            Feedback
                        </li>
                        <li>
                            Login / Register
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default HomePage