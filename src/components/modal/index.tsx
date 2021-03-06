import React from "react";

import './index.less';

export interface BcFormProps {
    visible: boolean;
    width?: number;
    height?: number;
    onClose?: () => void;
}

function Modal(ModalContentComponent: React.FunctionComponent<any>) {

    return function (props: BcFormProps & any) {

        const { visible, onClose, width, height } = props;

        if (!visible) {
            return null;
        }

        return <div className="bc-modal-container" style={{ width, height, marginLeft: width ? -width / 2 : 0, left: '50%' }}>
            <div className="bc-modal-content">
                <img
                    className="bc-modal-close-btn" onClick={onClose}
                    src="data:image/png;base64,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" alt="" />
                <ModalContentComponent {...props} />
            </div>

        </div>
    }

}

export default Modal;