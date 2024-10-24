import readlineSync from 'readline-sync';

export const makeGreeting = () => { 
    let userName = readlineSync.question('May I have your name?: ');
    return ('Hello, ' + userName + '!');
};