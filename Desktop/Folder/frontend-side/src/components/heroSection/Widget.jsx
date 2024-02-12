import React, {useContext} from 'react'
import './Widget.css';
import myContext from '../../context/data/myContext'

function Widget() {
    const context = useContext(myContext)
    const {  mode } = context
  return (
<div className="widgetSliderWrapper">
    <ul>
        <li>
            <div className="widgetSliderInner" style={{margin: "0px 25px 0px 0px"}}>
                <a>
                    <div className="widgetImg">
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-common--1--1706616684.gif" alt="Bestsellersimage"/>
                            </div>
                            <p  style={{ color: mode === 'dark' ? 'white' : '', }}>Bestsellers</p>
                            </a>
                            </div>
                            </li>
                            <li>
                                <div className="widgetSliderInner" style={{margin: "0px 25px 0px 0px"}}>
                                    <a>
                                        <div className="widgetImg">
                                            <img src="https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-New-Arrivals-1706616683.jpg" alt="New Arrivalsimage"/>
                                                </div>
                                                <p  style={{ color: mode === 'dark' ? 'white' : '', }}>New Arrivals</p>
                                                </a>
                                                </div>
                                                </li>
                                                <li>
                                                    <div className="widgetSliderInner" style={{margin: "0px 25px 0px 0px"}}>
                                                        <a>
                                                            <div className="widgetImg">
                                                                <img src="https://images.bewakoof.com/uploads/grid/app/Revamp-Thumbnails-Desktop-Winterwear-Common-gif-1706098382.gif" alt="Winterwearimage"/>
                                                                    </div>
                                                                    <p  style={{ color: mode === 'dark' ? 'white' : '', }}>Winterwear</p>
                                                                    </a>
                                                                    </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="widgetSliderInner" style={{margin: "0px 25px 0px 0px"}}>
                                                                            <a>
                                                                                <div className="widgetImg">
                                                                                    <img src="https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg" alt="Official Collaborationsimage"/>
                                                                                        </div>
                                                                                        <p  style={{ color: mode === 'dark' ? 'white' : '', }}>Official Collaborations</p>
                                                                                        </a>
                                                                                        </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="widgetSliderInner" style={{margin: "0px 25px 0px 0px"}}>
                                                                                                <a>
                                                                                                    <div className="widgetImg">
                                                                                                        <img src="https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop--1706616685.jpg" alt="Plus Sizeimage"/>
                                                                                                            </div>
                                                                                                            <p  style={{ color: mode === 'dark' ? 'white' : '', }}>Plus Size</p>
                                                                                                            </a>
                                                                                                            </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="widgetSliderInner" style={{margin: "0px 25px 0px 0px"}}>
                                                                                                                    <a>
                                                                                                                        <div className="widgetImg">
                                                                                                                            <img src="https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg" alt="Customizationimage"/>
                                                                                                                                </div>
                                                                                                                                <p  style={{ color: mode === 'dark' ? 'white' : '', }}>Customization</p>
                                                                                                                                </a>
                                                                                                                                </div>
                                                                                                                                </li>
                                                                                                                                <li>
                                                                                                                                    <div className="widgetSliderInner" style={{margin: "0px 25px 0px 0px"}}>
                                                                                                                                        <a>
                                                                                                                                            <div className="widgetImg">
                                                                                                                                                <img src="https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif" alt="Combosimage"/>
                                                                                                                                                    </div>
                                                                                                                                                    <p  style={{ color: mode === 'dark' ? 'white' : '', }}>Combos</p>
                                                                                                                                                    </a>
                                                                                                                                                    </div>
                                                                                                                                                    </li>
                                                                                                                                                    <li>
                                                                                                                                                        <div className="widgetSliderInner" style={{margin: "0px 25px 0px 0px"}}>
                                                                                                                                                            <a>
                                                                                                                                                                <div className="widgetImg">
                                                                                                                                                                    <img src="https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg" alt="Vote for Designsimage"/>
                                                                                                                                                                        </div>
                                                                                                                                                                        <p  style={{ color: mode === 'dark' ? 'white' : '', }}>Vote for Designs</p>
                                                                                                                                                                        </a>
                                                                                                                                                                        </div>
                                                                                                                                                                        </li>
                                                                                                                                                                        <li>
                                                                                                                                                                            <div className="widgetSliderInner" style={{margin: "0px 25px 0px 0px"}}>
                                                                                                                                                                                <a>
                                                                                                                                                                                <div className="widgetImg">
                                                                                                                                                                                    <img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" alt="Last Sizes Leftimage"/>
                                                                                                                                                                                        </div>
                                                                                                                                                                                        <p  style={{ color: mode === 'dark' ? 'white' : '', }}>Last Sizes Left</p>
                                                                                                                                                                                        </a>
                                                                                                                                                                                        </div>
                                                                                                                                                                                        </li>
                                                                                                                                                                                        <li>
                                                                                                                                                                                            <div className="widgetSliderInner" style={{margin: "0px 10px 0px 0px"}}>
                                                                                                                                                                                                <a>
                                                                                                                                                                                                    <div className="widgetImg">
                                                                                                                                                                                                        <img src="https://images.bewakoof.com/uploads/grid/app/image-1668598708.png" alt="Coupon Offersimage"/>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                            <p  style={{ color: mode === 'dark' ? 'white' : '', }}>Coupon Offers</p>
                                                                                                                                                                                                            </a>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                            </li>
                                                                                                                                                                                                            </ul> 

                                                                                                                                                                                                            <a title="" style={{display: "block", width: "100%", paddingTop: "10.4167%",position: "relative"}}>
                                                                                                                                                                                                                <img src="https://images.bewakoof.com/uploads/grid/app/desktop-strip-rm--1--1706453631.jpg" alt="" style={{position: "absolute", width: "100%",top: "0px"}}/>
                                                                                                                                                                                                                </a>  
                                                                                                                                                                                                                <div>
                                                                                                                                                                                                                    <div>
                                                                                                                                                                                                                        <h1  style={{font: "20px" , fontFamily: "sans-serif", fontSize: "50px" }}>
                                                                                                                                                                                                                        Designs of the Week
                                                                                                                                                                                                                        </h1>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                    </div>   
                                    
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                        
  )
}

export default Widget