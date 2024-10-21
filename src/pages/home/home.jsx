import '../css/style.scss'
import LOGO from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Spin } from 'antd'
import { useState } from 'react'

function HomePage() {
    let [isLlader, isuseLoader] = useState(false)


    // isuseLoader(true)
    return (
        <>
            {isLlader ? <Spin size="large" />
                :
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
                                na
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
            }
        </>
    )
}
export default HomePage