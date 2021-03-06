import React from 'react';
import './Store.css';
import NewYork from '../../assets/NewYork.png';
import RibEye from '../../assets/RibEye.png';
import Sirloin from '../../assets/Sirloin.png'
import { Link } from 'react-router-dom'

const Store = () => {
    return (
        <div className="store_container">
            <div className="store_content">
                <div className="store_header">
                    <h1>Tienda</h1>
                </div>
                <div className="items_container">
                    <div className="newyork_item">
                        <Link to="/newyork">
                            <img src={NewYork} alt="" />
                            <div className="description">
                                <h1>NY Hokkaido Wagyu A5-11</h1>
                                <p>$2,340.00 - $2,437.50</p>
                            </div>
                        </Link>
                    </div>
                    <div className="ribeye_item">
                        <Link to="/ribeye">
                            <img src={RibEye} alt="" />
                            <div className="description">
                                <h1>RibEye Hokkaido Wagyu A5-11</h1>
                                <p>$2,405.00</p>
                            </div>
                        </Link>
                    </div>
                    <div className="sirloin_item">
                        <Link to="/sirloin">
                            <img src={Sirloin} alt="" />
                            <div className="description">
                                <h1>Top Sirloin Hokkaido Wagyu A5-10</h1>
                                <p>$1,732.50 - $1,897.50</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Store