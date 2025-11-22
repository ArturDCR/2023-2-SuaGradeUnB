InputForm.test.tsx:
/**
 * Testes para a funcionalidade de validação de busca de disciplinas
 * Issue: Validação inadequada quando Ano/Período e Matéria estão vazios
 * 
 * O problema identificado é que quando ambos os campos estão vazios,
 * apenas a mensagem sobre o campo "Matéria" é exibida, ignorando
 * a validação do campo "Ano/Período".
 */

import { describe, it, expect } from '@jest/globals';
import { validateSearchFields } from '@/app/utils/validation/searchValidation';

describe('Validação de campos de busca de disciplina', () => {
    describe('Ciclo 1: Validação quando todos os campos estão vazios', () => {
        it('deve retornar erros para todos os campos quando estão vazios', () => {
            const errors = validateSearchFields('', '', '');
            
            expect(errors).toContain('Escreva no nome da disciplina');
            expect(errors).toContain('Escolha o ano/período');
            expect(errors.length).toBe(2);
        });
    });

    describe('Ciclo 2: Validação quando apenas ano/período estão vazios', () => {
        it('deve retornar erro apenas para ano/período quando search está preenchido', () => {
            const errors = validateSearchFields('Cálculo', '', '');
            
            expect(errors).not.toContain('Escreva no nome da disciplina');
            expect(errors).toContain('Escolha o ano/período');
            expect(errors.length).toBe(1);
        });
    });

    describe('Ciclo 3: Validação quando apenas search está vazio', () => {
        it('deve retornar erro apenas para search quando ano/período estão preenchidos', () => {
            const errors = validateSearchFields('', '2024', '1');
            
            expect(errors).toContain('Escreva no nome da disciplina');
            expect(errors).not.toContain('Escolha o ano/período');
            expect(errors.length).toBe(1);
        });
    });

    describe('Ciclo 4: Validação quando todos os campos estão preenchidos', () => {
        it('deve retornar array vazio quando todos os campos estão preenchidos corretamente', () => {
            const errors = validateSearchFields('Cálculo', '2024', '1');
            
            expect(errors.length).toBe(0);
        });
    });
});