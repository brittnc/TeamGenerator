const Intern = require('../lib/intern');

test('school', () => {
    const internSchool = 'UNC';
    const intern = new Intern(internSchool);
    expect(intern.school).toBe(internSchool);
});