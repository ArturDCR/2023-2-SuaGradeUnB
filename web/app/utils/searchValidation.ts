searchValidation.ts:
/**
 * Valida os campos de busca de disciplina
 * 
 * @param search - Texto de busca da disciplina
 * @param year - Ano selecionado
 * @param period - Período selecionado
 * @returns Array de mensagens de erro (vazio se não houver erros)
 */
export function validateSearchFields(search: string, year: string, period: string): string[] {
    const errors: string[] = [];
    
    const textSearch = search.trim();
    
    if (!textSearch) {
        errors.push('Escreva no nome da disciplina');
    }
    
    if (!year || !period) {
        errors.push('Escolha o ano/período');
    }
    
    return errors;
}