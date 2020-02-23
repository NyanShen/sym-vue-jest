module.exports = {
    moduleFileExtensions: ['vue', 'js', 'jsx', 'json'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.(css|scss|sass|less|styl|svg|png|jeg|woff|woff2)': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest'
    },
    transformIgnorePatterns: ['/node-modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: [
        '**/tests/unit/**/*.(spec|test).(js|jsx|ts|tsx)|**/__tests__/**/*.(js|jsx|ts|tsx)'
    ],
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ]
}