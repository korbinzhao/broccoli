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

    it('should match a input with a "email" name then fill it with text', async () => {
        await expect(page).toFill('input[name="email"]', 'jack@.com')
    });

    // it('should match a input with a "confirmEmail" name then fill it with text', async () => {
    //     await expect(page).toFill('input[name="confirmEmail"]', 'jack@hotmail.com')
    // });

    it('should click send button', async () => {
        // Assert that a button containing text "Request an invite'" will be clicked
        await expect(page).toClick('button', { text: 'Send' })
    });

    it('should enter a valid email', async () => {

        const errorTipText = await page.evaluate(() => {
            const btn = document.querySelector('.bc-error-tip');

            return btn.innerHTML;
        });

        await expect(errorTipText).toBe('Please enter a valid email');
    })


});