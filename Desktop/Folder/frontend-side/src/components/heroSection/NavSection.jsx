import React , {useContext} from 'react'
import './NavSection.css';
import myContext from '../../context/data/myContext'

function NavSection() {

    const context = useContext(myContext)
    const {  mode } = context
  return (
    <div class="bottomHeaderWrapper " id="" >
        <ul>
            <div class="tabNav">
            <li class=""  style={{ color: mode === 'dark' ? 'white' : '', }}>
                <a>MEN</a>
                </li>
            </div>
            <div class="tabNav">
                <li class="" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <a>WOMEN</a>
                    </li>
                </div>
                <div class="tabNav">
                    <li class="" style={{ color: mode === 'dark' ? 'white' : '', }}>
                        <a>ACCESSORIES</a>
                        </li>
                    </div>
                    <div class="tabNav">
                        <li class="" style={{ color: mode === 'dark' ? 'white' : '', }}>
                            <a>WINTER WEAR</a></li>
                            </div>
                            <div class="tabNav">
                                <li class="" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                    <a>HEAVY DUTY</a>
                                    </li>
                                    </div>
                                    <div class="tabNav">
                                        <li class="" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                            <a>BEWAKOOF AIR</a>
                                            </li>
                                            </div>
                                            <div class="tabNav">
                                                <li class="" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                                    <a>OFFICIAL MERCH</a>
                                                    </li>
                                                    </div>
                                                    <div class="tabNav">
                                                        <li class="" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                                            <a>PLUS SIZE</a>
                                                            </li>
                                                            </div>
                                                            </ul>
                                                            </div>
   
  )
}

export default NavSection