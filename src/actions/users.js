export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function updateUserQuestions(user,qId) {
    return {
        type: UPDATE_USER_QUESTIONS,
        user,
        qId,
    }
}

export function updateUserAnswers(user) {
    return {
        type: UPDATE_USER_ANSWERS,
        user,
    }
}