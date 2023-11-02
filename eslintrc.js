module.exports = {
    // ... outras configurações do ESLint ...

    plugins: ['cypress'],

    env: {
        // Adicione o ambiente do Cypress
        'cypress/globals': true,
        mocha: true,
        jasmine: true,
        cy: true,
        Cypress: true,
        jest: true,
    },
};