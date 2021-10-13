const Engineer = require('../lib/engineer');

test('github', () => {
    const engineerGithub = 'roedoe'
    const engineer = new Engineer(engineerGithub);
    expect(engineer.github).toBe(engineerGithub);
});