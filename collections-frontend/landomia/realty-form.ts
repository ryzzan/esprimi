import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../src/enums/form';
import { FrontendFrameworkEnum } from '../../src/enums/main';
import {
  MainInterface,
} from '../../src/interfaces/main';

export const REALTY_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: 'Imóvel',
    id: 'realtyForm',
    elements: [
      {
        tabs: [
          {
            title: 'Dados mínimos',
            elements: [
              {
                select: {
                  label: 'Tipo de imóvel',
                  name: 'realtyTypeId',
                  type: FormInputTypeEnum.Text,
                  optionsApi: {
                      endpoint: 'realty-types',
                      labelField: 'name',
                      valueField: '_id',
                  },
                  isRequired: true,
                },
              },
              {
                  array: {
                      id: 'businessArray',
                      title: 'Negociação',
                      elements: [{
                        select: {
                          label: 'Tipo de negociação',
                          name: 'businessType',
                          type: FormInputTypeEnum.Text,
                          optionsApi: {
                              endpoint: 'realty-business',
                              labelField: 'name',
                              valueField: '_id',
                          },
                          isRequired: true,
                        },
                      },
                      {
                        select: {
                          label: 'Moeda',
                          name: 'tradingCurrency',
                          type: FormInputTypeEnum.Text,
                          optionsApi: {
                              endpoint: 'trading-currencies',
                              labelField: 'name',
                              valueField: '_id',
                          },
                          isRequired: true,
                        },
                      },
                      {
                          input: {
                              label: 'Preço',
                              name: 'businessPrice',
                              placeholder: 'Valor da negociação',
                              type: FormInputTypeEnum.Text,
                              isRequired: true,
                          }
                      },
                    ]
                  }
              },
              {
                  input: {
                      label: 'Área construída',
                      name: 'buildingArea',
                      placeholder: 'Área em m²',
                      type: FormInputTypeEnum.Text,
                      isRequired: true,
                  }
              },
              {
                  input: {
                      label: 'Área do terreno',
                      name: 'landArea',
                      placeholder: 'Área em m²',
                      type: FormInputTypeEnum.Text,
                      isRequired: true,
                  }
              },
              {
                  input: {
                      label: 'Largura da frente do terreno',
                      name: 'frontWidth',
                      placeholder: 'Largura em m',
                      type: FormInputTypeEnum.Text,
                      isRequired: true,
                  }
              },
              {
                  input: {
                      label: 'Largura dos fundos do terreno',
                      name: 'backWidth',
                      placeholder: 'Largura em m',
                      type: FormInputTypeEnum.Text,
                      isRequired: true,
                  }
              },
              {
                  input: {
                      label: 'Profundidade direita frontal do terreno',
                      name: 'rightDepth',
                      placeholder: 'Profundidade em m',
                      type: FormInputTypeEnum.Text,
                      isRequired: true,
                  }
              },
              {
                  input: {
                      label: 'Profundidade esquerda frontal do terreno',
                      name: 'leftDepth',
                      placeholder: 'Profundidade em m',
                      type: FormInputTypeEnum.Text,
                      isRequired: true,
                  }
              },
              {
                  checkbox: {
                      label: 'Terreno murado',
                      name: 'isWalled',
                      optionsObject: [{
                          label: 'Terreno murado',
                          value: 'teste'
                      }],
                      isRequired: true,
                      isMultiple: true
                  }
              },
            ],
            id: 'realtyTab',
            label: 'Dados mínimos',
          },
          {
              id: 'ownerTab',
              title: 'Proprietário',
              elements: [{
                select: {
                    label: 'País',
                    name: 'countryOwner',
                    type: FormInputTypeEnum.Text,
                    optionsApi: {
                        endpoint: 'countries',
                        labelField: 'name',
                        valueField: 'code',
                    },
                    isRequired: true
                },
            },
            {
                input: {
                    label: 'Identidade única',
                    placeholder: 'CPF no Brasil, SS nos EUA, IU na União Européia',
                    name: 'uniqueId',
                    type: FormInputTypeEnum.Text,
                }
            },
            {
                input: {
                    label: 'Nome',
                    placeholder: 'Nome vindo da API',
                    name: 'name',
                    type: FormInputTypeEnum.Text,
                    isDisabled: true
                }
            },
            {
                input: {
                    label: 'Gênero',
                    placeholder: 'Gênero vindo da API',
                    name: 'gender',
                    type: FormInputTypeEnum.Text,
                    isDisabled: true
                }
            }, 
            {
                array: {
                    id: 'contactArray',
                    title: 'Contato',
                    elements:[{
                        select: {
                            label: 'Tipo de contato',
                            name: 'contactTypeId',
                            type: FormInputTypeEnum.Text,
                            optionsApi: {
                                endpoint: 'contactTypes',
                                labelField: 'name',
                                valueField: '_id',
                            }
                        }
                    }, 
                    {
                        input: {
                            label: 'Valor',
                            name: 'value',
                            placeholder: 'O conteúdo do contato',
                            type: FormInputTypeEnum.Text
                        }
                    }, 
                    {
                        input: {
                            label: 'Complemento',
                            name: 'complement',
                            placeholder: 'Alguma informação a mais acerca do contato',
                            type: FormInputTypeEnum.Text
                        }
                    }]
                }
            }]
          },
          {
            title: 'Localização',
            elements: [
                {
                    select: {
                        label: 'País',
                        name: 'countryLocation',
                        type: FormInputTypeEnum.Text,
                        optionsApi: {
                            endpoint: 'countries',
                            labelField: 'name',
                            valueField: 'code',
                        },
                        isRequired: true
                    },
                },
                {
                    input: {
                        label: 'Código postal',
                        name: 'zipCode',
                        placeholder: 'Código de endereçamento postal',
                        type: FormInputTypeEnum.Text,
                    },
                },
                {
                    input: {
                        label: 'Logradouro',
                        name: 'address',
                        placeholder: 'Rua, Avenida, Travessa etc.',
                        type: FormInputTypeEnum.Text,
                        isRequired: true,
                    },
                },
                {
                    input: {
                        label: 'Número',
                        name: 'number',
                        placeholder: 'Número da localização',
                        type: FormInputTypeEnum.Text,
                        isRequired: true,
                    },
                },
                {
                    input: {
                        label: 'Latitude',
                        name: 'latitude',
                        placeholder: 'Distância em relação ao marco do equador',
                        type: FormInputTypeEnum.Text,
                        isRequired: true,
                    },
                },
                {
                    input: {
                        label: 'Longitude',
                        name: 'longitude',
                        placeholder: 'Distância em relação ao meridiano Greenwich',
                        type: FormInputTypeEnum.Text,
                        isRequired: true,
                    },
                },
                {
                    input: {
                        label: 'Bairro',
                        name: 'district',
                        placeholder: 'Bairro do logradouro',
                        type: FormInputTypeEnum.Text,
                        isDisabled: true,
                    },
                },
                {
                    input: {
                        label: 'Cidade',
                        name: 'city',
                        placeholder: 'Cidade do bairro',
                        type: FormInputTypeEnum.Text,
                        isDisabled: true,
                    },
                },
                {
                    input: {
                        label: 'Estado',
                        name: 'state',
                        placeholder: 'Estado da cidade',
                        type: FormInputTypeEnum.Text,
                        isDisabled: true,
                    },
                },
            ],
            id: 'locationTab',
            label: 'Localização',
          },
          {
            id: 'roomTab',
            title: 'Cômodos e instalações',
            label: 'Cômodos e instalações',
            elements: [{
                array: {
                    id: 'roomArray',
                    title: 'Cômodo',
                    label: 'Cômodo',
                    todo: ` 1 - Adicionar uma array registrando as instalações que tem no cômodo e a quantidade de cada uma. Exemplo: 3 interruptores, 5 tomadas, 1 armário embutido
                            2 - Dados específicos para determinados côpmodos. Exemplo: Dados do banheiro de SUÍTE`,
                    elements: [{
                        select: {
                            label: 'Cômodo',
                            name: 'realtyRoomId',
                            type: FormInputTypeEnum.Text,
                            optionsApi: {
                                endpoint: 'realtyRooms',
                                labelField: 'name',
                                valueField: '_id',
                            },
                            isRequired: true
                        }
                    },
                    {
                        input: {
                            label: 'Área do cômodo',
                            name: 'roomArea',
                            placeholder: 'Área em m²',
                            type: FormInputTypeEnum.Text,
                            isRequired: true,
                        }
                    },
                    {
                        input: {
                            label: 'Largura da frente do cômodo',
                            name: 'roomFrontWidth',
                            placeholder: 'Largura em m',
                            type: FormInputTypeEnum.Text
                        }
                    },
                    {
                        input: {
                            label: 'Largura dos fundos do cômodo',
                            name: 'roomBackWidth',
                            placeholder: 'Largura em m',
                            type: FormInputTypeEnum.Text
                        }
                    },
                    {
                        input: {
                            label: 'Profundidade direita frontal do cômodo',
                            name: 'roomRightDepth',
                            placeholder: 'Profundidade em m',
                            type: FormInputTypeEnum.Text
                        }
                    },
                    {
                        input: {
                            label: 'Profundidade esquerda frontal do cômodo',
                            name: 'roomLeftDepth',
                            placeholder: 'Profundidade em m',
                            type: FormInputTypeEnum.Text,
                            isRequired: true,
                        }
                    }
                ]
                }
            },
            {
                array: {
                    id: 'facilityArray',
                    title: 'Instalação',
                    label: 'Instalação',
                    elements: [{
                        select: {
                            label: 'Instalação',
                            name: 'facilityId',
                            type: FormInputTypeEnum.Text,
                            optionsApi: {
                                endpoint: 'facilities',
                                labelField: 'name',
                                valueField: '_id',
                            }
                        }
                    },
                    {
                        input: {
                            label: 'Área da instalação',
                            name: 'facilityArea',
                            placeholder: 'Área em m³',
                            type: FormInputTypeEnum.Text,
                            isRequired: true,
                        }
                    },
                    {
                        input: {
                            label: 'Largura da frente da instalação',
                            name: 'facilityFrontWidth',
                            placeholder: 'Largura em m',
                            type: FormInputTypeEnum.Text
                        }
                    },
                    {
                        input: {
                            label: 'Largura dos fundos da instalação',
                            name: 'facilityBackWidth',
                            placeholder: 'Largura em m',
                            type: FormInputTypeEnum.Text
                        }
                    },
                    {
                        input: {
                            label: 'Profundidade direita frontal da instalação',
                            name: 'facilityRightDepth',
                            placeholder: 'Profundidade em m',
                            type: FormInputTypeEnum.Text
                        }
                    },
                    {
                        input: {
                            label: 'Profundidade esquerda frontal da instalação',
                            name: 'facilityLeftDepth',
                            placeholder: 'Profundidade em m',
                            type: FormInputTypeEnum.Text,
                        }
                    },
                    {
                        input: {
                            label: 'Altura direita frontal da instalação',
                            name: 'facilityRightHeight',
                            placeholder: 'Altura em m',
                            type: FormInputTypeEnum.Text,
                        }
                    },
                    {
                        input: {
                            label: 'Altura esquerda frontal da instalação',
                            name: 'facilityLeftHeight',
                            placeholder: 'Altura em m',
                            type: FormInputTypeEnum.Text,
                        }
                    },
                ]
                }
            }]
          },
          {
              id: 'rateParamsTab',
              title: 'Parâmetros de avaliação',
              elements: [{
                  select: {
                      label: 'Parâmetros existentes',
                      name: 'existingRateParametersId',
                      type: FormInputTypeEnum.Text,
                      optionsApi: {
                          endpoint: 'realty-rate-parameters',
                          labelField: 'name',
                          valueField: '_id',
                          todo: 'Relate register date to existing rate parameter'
                      },
                      isMultiple: true,
                  }
              },
              {
                  array: {
                      id: 'rateParameterPreviewArray',
                      title: 'Previsão de parâmetros',
                      elements:[{
                        select: {
                            label: 'Parâmetro',
                            name: 'nonExistingRateParametersId',
                            type: FormInputTypeEnum.Text,
                            optionsApi: {
                                endpoint: 'realty-rate-parameters',
                                labelField: 'name',
                                valueField: '_id',
                            }
                        }
                    },
                    {
                        input: {
                            label: 'Data de previsão',
                            placeholder: 'Data para implementação do parâmetro',
                            name: 'date',
                            type: FormInputTypeEnum.Date,
                        }
                    }]
                  }
              }]
          }
        ],
      },
    ],
    actions: [
      {
        button: {
          label: 'Criar',
          type: FormButtonTypeEnum.Submit,
          icon: 'save',          
        },
      },
    ],
    service: {
      baseUrl: 'http://localhost:3000',
      endPoint: 'realties',
      hasAuthorization: true,
      methods: [
        ServiceFunctionsEnum.Get,
        ServiceFunctionsEnum.Delete,
        ServiceFunctionsEnum.Save,
        ServiceFunctionsEnum.Update,
        ServiceFunctionsEnum.Find,
      ],
    },
  },
};