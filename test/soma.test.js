import soma from '../src/soma'

describe('Teste de soma', () => {

    it('Deve somar 2 + 3 e o resultado deve ser 5', () => {
        expect(soma(2,3)).toBe(5)
    });

    it('Deve somar 2 + 3 e o resultado deve ser 5', () => {
        expect(soma(5,5)).toBe(10)
    });
    
});