import {_saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";

describe('_saveQuestion', () => {
    it('reject if any one of the input is empty', async() => {
        await expect(_saveQuestion({author:"",optionOneText:"option1",optionTwoText:"option2"})).rejects.
            toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({author:"sarahedo",optionOneText:"",optionTwoText:"option2"})).rejects.
            toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({author:"sarahedo",optionOneText:"option1",optionTwoText:""})).rejects.
            toEqual('Please provide optionOneText, optionTwoText, and author');
    });
});

describe('_saveQuestionAnswer', () => {
    it('reject if any of the input is empty', async() => {
        await expect(_saveQuestionAnswer("","qid","optionOne")).rejects.
            toEqual('Please provide authedUser, qid, and answer');
        await expect(_saveQuestionAnswer("sarahedo","","optionOne")).rejects.
            toEqual('Please provide authedUser, qid, and answer');
        await expect(_saveQuestionAnswer("sarahedo","qid","")).rejects.
            toEqual('Please provide authedUser, qid, and answer');
    });
});