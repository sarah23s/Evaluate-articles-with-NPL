// Import the js file to test
import { handleSubmit } from '../client/js/formHandler'
import { sentiment_analysis_TEST } from '../client/js/formHandler'
// for async/await tests
import 'regenerator-runtime/runtime'






test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
});


test('sentiment_analysis_TEST', async function () {
    await sentiment_analysis_TEST("Google helped me");
});