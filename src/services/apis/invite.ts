import { Method } from "axios";

interface ApiDefine {
    api: string;
    method: Method
}

// 邀请申请接口
export const inviteApply: ApiDefine = {
    api: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
    method: 'POST'
};