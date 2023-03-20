export interface DataTable {
    codigo: number;
    nombre: string;
    cuentas: {
        codigo: number;
        nombre: string;
        subcuentas: {
            codigo: number;
            nombre: string;
        }[]
    }[]
}