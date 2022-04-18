import React, { useState } from "react";
import { sendInviteApply } from 'services/invite';

import './index.less';

interface FormValues {
    name: string;
    email: string;
    confirmEmail: string;
}

interface InviteFormProps {
    onSubmitSuccess: () => void;
}

const EMIAL_REGEX = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;
const HARDCODE_EMAIL = 'usedemail@airwallex.com';

function InviteForm({ onSubmitSuccess }: InviteFormProps) {

    const [errorMsg, setErrorMsg] = useState('');
    const [errorFieldName, setErrorFieldName] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    /**
 * check form data whether valid
 */
    const validForm = ({ name, email, confirmEmail }: FormValues) => {

        if (!name || name.length < 3) {
            setErrorFieldName('name');
            return {
                isValid: false,
                error: 'Your full name length cannot less than 3'
            }
        }

        if (!EMIAL_REGEX.test(email)) {
            setErrorFieldName('email');
            return {
                isValid: false,
                error: 'Please enter a valid email'
            }
        } else if (email === HARDCODE_EMAIL) {
            setErrorFieldName('email');
            return {
                isValid: false,
                error: 'Email is already in use'
            }
        }

        if (email !== confirmEmail) {
            setErrorFieldName('confirmEmail');
            return {
                isValid: false,
                error: 'Your emails do not match'
            }
        }

        setErrorFieldName('');

        return {
            isValid: true,
            error: ''
        }

    }

    const submit = async () => {
        const { isValid, error } = validForm({ name, email, confirmEmail });

        setErrorMsg(error);

        if (isValid && !isLoading) {
            setIsLoading(true);
            const { data: { errorMessage }, status } = await sendInviteApply({ name, email });

            if (status === 200) {
                onSubmitSuccess();
            } else {
                setErrorMsg(errorMessage);
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
        <div className="bc-title">
            <p>Request an invite</p>
            <p className="bc-bottom-line"></p>
        </div>
        <div className="bc-form-item">
            <input type="text" placeholder="Full name" name="name"
                style={{ borderColor: errorFieldName === 'name' ? 'red' : '#333' }}
                onChange={(e) => {
                    onValueChange('name', e.target.value)
                }} />
        </div>
        <div className="bc-form-item">
            <input type="text" placeholder="Email" name="email"
                style={{ borderColor: errorFieldName === 'email' ? 'red' : '#333' }}
                onChange={(e) => {
                    onValueChange('email', e.target.value)
                }} />
        </div>
        <div className="bc-form-item">
            <input type="text" placeholder="Confirm email" name="confirmEmail"
                style={{ borderColor: errorFieldName === 'confirmEmail' ? 'red' : '#333' }}
                onChange={(e) => {
                    onValueChange('confirmEmail', e.target.value)
                }} />
        </div>

        <div className="bc-form-confirm">
            <button
                className="bc-button"
                onClick={submit}
                disabled={isLoading}
                style={{
                    backgroundColor: isLoading ? '#EBF5FB' : '',
                    cursor: isLoading ? 'default' : '',
                    color: isLoading ? '#333' : '#fff'
                }}
            >
                {isLoading ? 'Sending, please wait...' : 'Send'}
            </button>
        </div>

        {errorMsg ? <p className="bc-error-tip">{errorMsg}</p> : null}
    </div>;
}

export default InviteForm;