import desconto from '../src/desconto'

describe('Cálculo de Desconto Baseado na Quantidade', () => {
    it('Deve aplicar 0% de desconto para até 10 produtos', () => {
        expect(desconto(10)).toBe(0);
    });

    it('Deve aplicar 10% de desconto para de 11 a 20 produtos', () => {
        expect(desconto(20)).toBe(0.10);
    });

    it('Deve aplicar 25% de desconto para de 21 a 50 produtos', () => {
        expect(desconto(50)).toBe(0.25);
    });

    it('Deve aplicar 35% de desconto para mais de 50 produtos', () => {
        expect(desconto(51)).toBe(0.35);
    });
});
