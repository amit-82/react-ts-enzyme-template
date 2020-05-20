module.exports = {
    //roots: ["<rootDir>/src"],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[t|j]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['./jest-setup.ts'],
    moduleDirectories: ['.', 'src', 'node_modules'],
};
