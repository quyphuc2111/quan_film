import React from 'react'
import './Loading.css';
import { useSelector } from 'react-redux';
const Loading = () => {
    const ui = useSelector((state) => state.ui);
    return (
        <div className="loader" style = {{display: ui.showLoading ? "block" : "none"}}>
            <div className="loader-inner">
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading
