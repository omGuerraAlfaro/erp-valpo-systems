export interface CategoryInterface {
    cod: number;
    nombre_cod: string;
    sub_categoria: [
        {
            cod: number;
            nombre_cod: string;
            index_sub: [
                {
                    cod: number;
                    nombre_cod: string;
                    indicador: [
                        {
                            cod: number;
                            nombre_cod: string;
                        }
                    ]
                }
            ]
        }
    ];

}
