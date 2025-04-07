export class Util {

    static mascaraCPF(valor?: string): string {
        if (valor) {
            valor.replace(/\D/g, '');
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

            return valor;
        }

        return ''
    }

    static mascaraCNPJ(valor?: string): string {
        if (valor) {
            valor.replace(/\D/g, '');
            valor = valor.replace(/^(\d{2})(\d)/, '$1.$2');
            valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            valor = valor.replace(/\.(\d{3})(\d)/, '.$1/$2');
            valor = valor.replace(/(\d{4})(\d{1,2})$/, '$1-$2');

            return valor;
        }

        return ''
    }

    static formatarMoedaBrasileira(valor: number): string {
        return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor);
    }

    static extrairNumeros(str: string): string {
        if (str && str.length > 0) {
            const numeros = str.match(/\d+/g);
            return numeros ? numeros.join('') : '';
        }
        return ''
    }

    static generateRandomId(min: number = 1, max: number = 100000): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}