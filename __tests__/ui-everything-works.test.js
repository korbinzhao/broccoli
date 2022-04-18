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
        await expect(page).toFill('input[name="email"]', 'jack@hotmail.com')
    });

    it('should match a input with a "confirmEmail" name then fill it with text', async () => {
        await expect(page).toFill('input[name="confirmEmail"]', 'jack@hotmail.com')
    });

    it('should click send button', async () => {
        // Assert that a button containing text "Request an invite'" will be clicked
        await expect(page).toClick('button', { text: 'Send' })
    });

    it('should no error tip button exists', async () => {

        const errorTipBtn = await page.evaluate(() => {
            return document.querySelector('.bc-error-tip');
        });

        await expect(errorTipBtn).toBe(null);
    });

    it('should do right things when api response ', async () => {

        const apiRes = await page.waitForResponse('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth');

        const apiResStatus = apiRes.status();

        console.log(apiResStatus, typeof apiResStatus);

        const checkResult = await page.evaluate(async (apiResStatus) => {

            // wait for page do action 
            await new Promise((resolve) => {
                setTimeout(resolve, 5000);
            });

            if (1 * apiResStatus === 200) {
                const successPanelStatusNode = document.querySelector('.success-panel-status');

                if (successPanelStatusNode && successPanelStatusNode.innerHTML === 'All done!') {
                    return {
                        success: true,
                        message: 'api success, success panel show',
                        panelText: successPanelStatusNode.innerHTML
                    };
                } else {
                    return {
                        success: false,
                        message: 'api success, success panel not show',
                        panelText: successPanelStatusNode.innerHTML
                    };
                }

            } else {
                const errorTipNode = document.querySelector('.bc-error-tip');

                if (errorTipNode && errorTipNode.innerHTML) {
                    return {
                        success: true,
                        message: 'api error, error tip show'
                    };
                } else {
                    return {
                        success: false,
                        message: 'api error, error tip not show'
                    };
                }
            }

        }, apiResStatus);

        console.log('checkResult', checkResult);

        await expect(checkResult.success).toBe(true);
    });


});