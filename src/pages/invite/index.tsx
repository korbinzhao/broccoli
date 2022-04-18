import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import Modal from "../../components/modal";

const InviteContent = React.lazy(() => import('./components/invite-content'));
const InviteForm = React.lazy(() => import('./components/invite-form'));
const SuccessPanel = React.lazy(() => import('./components/success-panel'));

const FormModal = Modal(InviteForm);
const SuccessPanelModal = Modal(SuccessPanel);

import './index.less';

function Invite() {

    const [formModalVisible, setFormModalVisible] = useState(false);
    const [successPanelModalVisible, setSuccessPanelModalVisible] = useState(false);

    const onInviteButtonClick = () => {
        setFormModalVisible(true);
    }

    const closeInviteModal = () => {
        setFormModalVisible(false);
    }

    const showSuccessPanel = () => {
        closeInviteModal();
        setSuccessPanelModalVisible(true);
    }

    const closeSuccessPanelModal = () => {
        setSuccessPanelModalVisible(false);
    }

    return <div className="bc-invite-container">
        <Suspense fallback={<div className="bc-loading">Loading...</div>}>
            <InviteContent onInviteButtonClick={onInviteButtonClick} />
            <FormModal
                visible={formModalVisible}
                width={360}
                onClose={closeInviteModal}
                onSubmitSuccess={showSuccessPanel}
            />
            <SuccessPanelModal
                visible={successPanelModalVisible}
                width={360}
                onClose={closeSuccessPanelModal}
            />
        </Suspense>

    </div>
}

export default Layout(Invite);