import { Fragment } from "react";
import './RoadMap.css';

const RoadMap = () => {
    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
    return<Fragment>
        <div className="section-title">
        <div className="container">
                
            
            <ol className="timeline">

                <li className="timeline__entry">
                    <span className="timeline__id_top">Road Map</span>
                </li>
                <li className="timeline__entry">
                    <span className="timeline__id">Launch Initiated</span>
                    <div className="timeline_color1"></div>
                    <div className="timeline__content border_color1">
                        <p className="timeline__text">{description}</p>
                    </div>
                </li>
                <li className="timeline__entry">
                    <span className="timeline__id">Staking</span>
                    <div className="timeline_color5"></div>
                    <div className="timeline__content timeline__content--flipped border_color2">
                        <p className="timeline__text">{description}</p>
                    </div>
                </li>
                <li className="timeline__entry">
                    <span className="timeline__id">Merch & Live Events</span>
                    <div className="timeline_color2"></div>
                    <div className="timeline__content border_color2">
                        <p className="timeline__text">{description}</p>
                    </div>
                </li>
                <li className="timeline__entry">
                    <span className="timeline__id">The Crypto Bears</span>
                    <div className="timeline_color3"></div>
                    <div className="timeline__content timeline__content--flipped border_color3">
                        <p className="timeline__text">{description}</p>
                    </div>
                </li>
                <li className="timeline__entry">
                    <span className="timeline__id">MetaVerse</span>
                    <div className="timeline_color4"></div>
                    <div className="timeline__content border_color4">
                        <p className="timeline__text">{description}</p>
                    </div>
                </li>
            
            </ol>
            </div>
        </div>
    </Fragment>
}

export default RoadMap;