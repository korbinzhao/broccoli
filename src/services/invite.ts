import axios from 'axios';
import { inviteApply } from './apis/invite';

export interface InviteApplyData {
    name: string;
    email: string;
}

/**
 * send an invite apply
 */
export async function sendInviteApply(data: InviteApplyData) {
    const res = await axios({
        method: inviteApply.method,
        url: inviteApply.api,
        data
    }).catch(err => err);

    if (res instanceof Error) {
        return {
            error: res.message
        }
    }

    return res;
}