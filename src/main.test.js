const { validateApiToken } = require('./main.js');

test('API Token validation', () => {
    expect(validateApiToken())
        .toBe(false);
    expect(validateApiToken(''))
        .toBe(false);
    expect(validateApiToken('AAAAA'))
        .toBe(false);
    expect(validateApiToken('4bezCvra8AV2_BuLpsXD'))
        .toBe(true);
});
