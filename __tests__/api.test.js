const { sendInviteApply } = require('../src/services/invite');

describe('sendApply', () => {

    it('should response status 200', async () => {
        const res = await sendInviteApply({ name: 'jack', email: 'jack@hotmail.com' });

        expect(res.status).toBe(200);
    });

    it('should response with error', async () => {
        const res = await sendInviteApply({ email: 'jack@hotmail.com' });

        expect(res.status).toBe(400);
    });

});