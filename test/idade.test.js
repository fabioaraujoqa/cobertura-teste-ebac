import idade from '../src/idade'

describe('Teste de Idade', () => {
    it('Deve permitir a entrada de maior de 16', () => {
        expect(idade(17)).toBe('Parabéns, cadastro efetuado com sucesso!')
    });

    it('Deve bloquear a entrada de menor de 16', () => {
        expect(idade(10)).toBe('Idade não permitida. Procure seus pais!')
    });
});