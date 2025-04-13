import {RouteType} from "@/sistema/_root/types/root-types";
import {icones as icone} from "@/sistema/_root/icones/_index";

const tamanhoIcone = 18;
export const rotasRecursosHumanos: RouteType[] = [
    {
        title: 'Colaborador',
        icon: <icone.colaboradores size={tamanhoIcone} />,
        href: '/adm/colaborador',
        breadcrumbRef: 'colaborador'
    },
    {
        title: 'Folha de Pagamento',
        icon: <icone.folhaPagamento size={tamanhoIcone} />,
        breadcrumbRef: 'folha_pagamento',
        subRoute: [
            {
                title: 'Lançamentos',
                href: '/rh/folha/lancamentos',
                breadcrumbRef: 'lancamentos_folha'
            },
            {
                title: 'Eventos',
                href: '/rh/folha/eventos',
                breadcrumbRef: 'eventos_folha'
            },
            {
                title: 'Contra-cheques',
                href: '/rh/folha/contra-cheques',
                breadcrumbRef: 'contra_cheques'
            }
        ]
    },
    {
        title: 'Ponto e Frequência',
        icon: <icone.pontoFrequencia size={tamanhoIcone} />,
        breadcrumbRef: 'ponto',
        subRoute: [
            {
                title: 'Registro de Ponto',
                href: '/rh/ponto/registro',
                breadcrumbRef: 'registro_ponto'
            },
            {
                title: 'Espelho de Ponto',
                href: '/rh/ponto/espelho',
                breadcrumbRef: 'espelho_ponto'
            },
            {
                title: 'Jornadas',
                href: '/rh/ponto/jornada',
                breadcrumbRef: 'jornadas'
            },
            {
                title: 'Escalas',
                href: '/rh/ponto/escala',
                breadcrumbRef: 'escala'
            }
        ]
    },
    {
        title: 'Benefícios',
        icon: <icone.beneficios size={tamanhoIcone} />,
        breadcrumbRef: 'beneficios',
        subRoute: [
            {
                title: 'Vale Transporte',
                href: '/rh/beneficios/vale-transporte',
                breadcrumbRef: 'vale_transporte'
            },
            {
                title: 'Vale Alimentação',
                href: '/rh/beneficios/vale-alimentacao',
                breadcrumbRef: 'vale_alimentacao'
            },
            {
                title: 'Plano de Saúde',
                href: '/rh/beneficios/plano-saude',
                breadcrumbRef: 'plano_saude'
            },
            {
                title: 'Convênios',
                href: '/rh/beneficios/convenios',
                breadcrumbRef: 'convenios'
            }
        ]
    },
    {
        title: 'Treinamentos',
        icon: <icone.treinamentos size={tamanhoIcone} />,
        breadcrumbRef: 'treinamentos',
        subRoute: [
            {
                title: 'Cursos',
                href: '/rh/treinamentos/cursos',
                breadcrumbRef: 'cursos'
            },
            {
                title: 'Avaliações de Desempenho',
                href: '/rh/treinamentos/avaliacoes',
                breadcrumbRef: 'avaliacoes_desempenho'
            },
            {
                title: 'Plano de Carreira',
                href: '/rh/treinamentos/plano-carreira',
                breadcrumbRef: 'plano_carreira'
            }
        ]
    },
    {
        title: 'Recrutamento e Seleção',
        icon: <icone.recrutamentoSelecao size={tamanhoIcone} />,
        breadcrumbRef: 'recrutamento',
        subRoute: [
            {
                title: 'Vagas',
                href: '/rh/recrutamento/vagas',
                breadcrumbRef: 'vagas'
            },
            {
                title: 'Candidatos',
                href: '/rh/recrutamento/candidatos',
                breadcrumbRef: 'candidatos'
            },
            {
                title: 'Processos Seletivos',
                href: '/rh/recrutamento/processos',
                breadcrumbRef: 'processos_seletivos'
            }
        ]
    },
    {
        title: 'Desligamentos',
        icon: <icone.desligamentos size={tamanhoIcone} />,
        breadcrumbRef: 'desligamentos',
        subRoute: [
            {
                title: 'Rescisões',
                href: '/rh/desligamento/rescisoes',
                breadcrumbRef: 'rescisoes'
            },
            {
                title: 'Entrevistas de Saída',
                href: '/rh/desligamento/entrevistas',
                breadcrumbRef: 'entrevistas_saida'
            }
        ]
    },
    {
        title: 'Administração',
        icon: <icone.administracao size={tamanhoIcone} />,
        breadcrumbRef: 'administracao',
        subRoute: [
            {
                title: 'Empresa',
                breadcrumbRef: 'empresa',
                subRoute: [
                    {
                        title: 'Cliente',
                        href: '/adm/cliente',
                        breadcrumbRef: 'cliente'
                    },
                    {
                        title: 'Departamentos',
                        href: '/adm/departamento',
                        breadcrumbRef: 'departamento'
                    },
                    {
                        title: 'Cargos',
                        href: '/adm/cargo',
                        breadcrumbRef: 'cargo'
                    },
                    {
                        title: 'Usuários',
                        href: '/adm/usuario',
                        breadcrumbRef: 'usuario'
                    }
                ]
            },
            {
                title: 'Unidades',
                href: '/adm/unidade',
                breadcrumbRef: 'unidade'
            }
        ]
    }
];

