import React, { useState } from "react";
import { sendInviteApply } from 'services/invite';

import './index.less';

interface FormValues {
    name: string;
    email: string;
    confirmEmail: string;
}

/**
 * check form data whether valid
 */
const validForm = ({ name, email, confirmEmail }: FormValues) => {

    const EMIAL_REGEX = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;

    if (!name || name.length < 3) {
        return {
            isValid: false,
            error: 'Your full name length cannot less than 3'
        }
    }

    console.log(email, EMIAL_REGEX.test(email))

    if (!EMIAL_REGEX.test(email)) {
        return {
            isValid: false,
            error: 'Please enter a valid email'
        }
    }

    if (email !== confirmEmail) {
        return {
            isValid: false,
            error: 'Your emails do not match'
        }
    }

    return {
        isValid: true,
        error: ''
    }


}

interface InviteFormProps {
    onSubmitSuccess: () => void;
}

function InviteForm({ onSubmitSuccess }: InviteFormProps) {

    const [errorMsg, setErrorMsg] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const submit = async () => {
        const { isValid, error } = validForm({ name, email, confirmEmail });

        setErrorMsg(error);

        if (isValid && !isLoading) {
            setIsLoading(true);
            const { error, status } = await sendInviteApply({ name, email });

            if (status === 200) {
                onSubmitSuccess();
            } else {
                setErrorMsg(error);
            }

            setIsLoading(false);
        }
    }

    const onValueChange = (key: 'name' | 'email' | 'confirmEmail', value: string) => {
        switch (key) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'confirmEmail':
                setConfirmEmail(value);
                break;
        }
    }

    return <div className="bc-invite-form-container">
        <div className="bc-form-title">
            <p>Request an invite</p>
            <p className="bc-bottom-line"></p>
        </div>
        <div className="bc-form-item">
            <input type="text" placeholder="Full Name" name="name"
                onChange={(e) => {
                    onValueChange('name', e.target.value)
                }} />
        </div>
        <div className="bc-form-item">
            <input type="text" placeholder="Email" name="email"
                onChange={(e) => {
                    onValueChange('email', e.target.value)
                }} />
        </div>
        <div className="bc-form-item">
            <input type="text" placeholder="Confirm email" name="confirmEmail"
                onChange={(e) => {
                    onValueChange('confirmEmail', e.target.value)
                }} />
        </div>

        <div className="bc-form-confirm">
            <button
                className="bc-button"
                onClick={submit}
                disabled={isLoading}
            >
                {isLoading ? 'Sending, please wait...' : 'Send'}
            </button>
        </div>

        {errorMsg ? <p className="bc-error-tip">{errorMsg}</p> : null}
    </div>;
}

export default InviteForm;