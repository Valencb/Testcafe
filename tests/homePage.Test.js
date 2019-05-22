import { t } from 'testcafe'
import homePage from '../pages/homePage'
import landingPage from '../pages/landingPage';

fixture('Sucessful task')
.page('https://todoist.com/')


//Con el await le indico que espera ha realizar el flujo de ladingpag
test('Task', async t => {
    await landingPage.loginFlow()
    await homePage.addTaskFlow()
    //await t.expect(homePage.test.exists).ok()
    //await t.wait(1000),
})
