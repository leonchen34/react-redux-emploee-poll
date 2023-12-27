import {_saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";

describe('_saveQuestion', () => {
    it('match returned saved question', async() => {
        let question = {
            author: "sarahedo",
            optionOneText: "chinese food",
            optionTwoText: "italian food",
        };
        let result = await _saveQuestion(question);
        expect(result.author).toMatch('sarahedo');
        expect(result.optionOne.text).toMatch('chinese food');
        expect(result.optionTwo.text).toMatch('italian food');
    });
});

describe('_saveQuestionAnswer', () => {
    it('match saved answer', async() => {
        let authedUser = "sarahedo";
        let qid="vthrdm985a262al8qx3do";
        let answer="optionOne";
        let result = await _saveQuestionAnswer(authedUser,qid,answer);
        expect(result.user.id).toMatch("sarahedo");
        expect(result.question.id).toMatch("vthrdm985a262al8qx3do");
    });

});