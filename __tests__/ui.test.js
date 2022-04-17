describe('ui test', () => {
    beforeAll(async () => {
        await page.goto('http://127.0.0.1:9000');
    });

    it('should click invite button', async () => {
        // Assert that a button containing text "Request an invite'" will be clicked
        await expect(page).toClick('button', { text: 'Request an invite' })
    });

    it('should match a input with a "name" name then fill it with text', async () => {
        await expect(page).toFill('input[name="name"]', 'Jack')
    });

    it('should match a input with a "name" name then fill it with text', async () => {
        await expect(page).toFill('input[name="email"]', 'jack@hotmail.com')
    });

    it('should match a input with a "name" name then fill it with text', async () => {
        await expect(page).toFill('input[name="confirmEmail"]', 'jack@hotmail.com')
    });

    it('should click send button', async () => {
        // Assert that a button containing text "Request an invite'" will be clicked
        await expect(page).toClick('button', { text: 'Send' })
    });

    it('should match a button with a "" text inside', async () => {
        await expect(page).toMatchElement('.bc-error-tip', { text: '' })
    })


});