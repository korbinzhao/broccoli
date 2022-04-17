import React from "react";

import './index.less';

interface SuccessPanelProps {
    onClose: () => void;
}

function SuccessPanel({ onClose }: SuccessPanelProps) {

    return <div className="success-panel-container">
        <div className="bc-title">
            <p>All done!</p>
            <p className="bc-bottom-line"></p>
        </div>
        <p>You will be one of the first to experience</p>
        <p>Broccoli & Co. when we launch.</p>
        <div className="bc-btn-container">
            <button
                className="bc-button"
                onClick={onClose}
            >
                OK
            </button>
        </div>
    </div>
}

export default SuccessPanel;