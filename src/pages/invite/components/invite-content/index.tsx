import React from "react";

import './index.less';

interface InviteContentProps {
    onInviteButtonClick: () => void;
}

function InviteContent({ onInviteButtonClick }: InviteContentProps) {
    return <div className="bc-invite-content">
        <h1>A better way</h1>
        <h1>to enjoy every day.</h1>
        <p>Be the first to know when we launch.</p>

        <button className="bc-button" onClick={onInviteButtonClick}>
            Request an invite
        </button>
    </div>
}

export default InviteContent;