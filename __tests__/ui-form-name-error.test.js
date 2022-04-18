describe('ui test', () => {
    beforeAll(async () => {
        await page.goto('http://127.0.0.1:9000');
    });

    it('should click invite button', async () => {
        // Assert that a button containing text "Request an invite'" will be clicked
        await expect(page).toClick('button', { text: 'Request an invite' })
    });

    it('should match a input with a "name" name then fill it with text', async () => {
        await expect(page).toFill('input[name="name"]', 'Ja')
    });
   
    it('should click send button', async () => {
        // Assert that a button containing text "Request an invite'" will be clicked
        await expect(page).toClick('button', { text: 'Send' })
    });

    it('should name length cannot less than 3', async () => {

        const errorTipText = await page.evaluate(() => {
            const btn = document.querySelector('.bc-error-tip');

            return btn.innerHTML;
        });

        await expect(errorTipText).toBe('Your full name length cannot less than 3');
    })


});