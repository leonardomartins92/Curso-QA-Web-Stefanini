$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Checkout.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Checkout"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar checkout com Sucesso",
  "description": "",
  "id": "checkout;realizar-checkout-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarCheckout"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que esteja na pagina do carrinho com o produto \"\u003cproduto1\u003e\" adicionado",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "acionar o botao de checkout",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "adicionar o campo de nome como \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "adicionar o campo de sobrenome como \"\u003csobrenome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "adicionar o campo de codigo postal como \"\u003ccep\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "acionar o botao de continuar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "devera surgir a descricao da ordem de compra",
  "keyword": "Entao "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "checkout;realizar-checkout-com-sucesso;",
  "rows": [
    {
      "cells": [
        "produto1",
        "nome",
        "sobrenome",
        "cep"
      ],
      "line": 19,
      "id": "checkout;realizar-checkout-com-sucesso;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack",
        "Leonardo",
        "Rodrigues",
        "36090-300"
      ],
      "line": 20,
      "id": "checkout;realizar-checkout-com-sucesso;;2"
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket",
        "Maria",
        "Da Silva",
        "00000-000"
      ],
      "line": 21,
      "id": "checkout;realizar-checkout-com-sucesso;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2300074900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que esteja logado no sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 421942700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 577115100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Realizar checkout com Sucesso",
  "description": "",
  "id": "checkout;realizar-checkout-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Checkout"
    },
    {
      "line": 8,
      "name": "@RealizarCheckout"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que esteja na pagina do carrinho com o produto \"Sauce Labs Backpack\" adicionado",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "acionar o botao de checkout",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "adicionar o campo de nome como \"Leonardo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "adicionar o campo de sobrenome como \"Rodrigues\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "adicionar o campo de codigo postal como \"36090-300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "acionar o botao de continuar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "devera surgir a descricao da ordem de compra",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 48
    }
  ],
  "location": "ContinuarComprandoSteps.que_esteja_na_pagina_do_carrinho_com_o_produto_adicionado(String)"
});
formatter.result({
  "duration": 284776900,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.acionar_o_botao_de_checkout()"
});
formatter.result({
  "duration": 125557600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leonardo",
      "offset": 32
    }
  ],
  "location": "CheckoutSteps.adicionar_o_campo_de_nome_como(String)"
});
formatter.result({
  "duration": 173437000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rodrigues",
      "offset": 37
    }
  ],
  "location": "CheckoutSteps.adicionar_o_campo_de_sobrenome_como(String)"
});
formatter.result({
  "duration": 134057100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36090-300",
      "offset": 41
    }
  ],
  "location": "CheckoutSteps.adicionar_o_campo_de_codigo_postal_como(String)"
});
formatter.result({
  "duration": 122646000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.acionar_o_botao_de_continuar()"
});
formatter.result({
  "duration": 203955800,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.devera_surgir_a_descricao_da_ordem_de_compra()"
});
formatter.result({
  "duration": 41837800,
  "status": "passed"
});
formatter.after({
  "duration": 726387200,
  "status": "passed"
});
formatter.before({
  "duration": 1517513300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que esteja logado no sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 338532800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 496616800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Realizar checkout com Sucesso",
  "description": "",
  "id": "checkout;realizar-checkout-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Checkout"
    },
    {
      "line": 8,
      "name": "@RealizarCheckout"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que esteja na pagina do carrinho com o produto \"Sauce Labs Fleece Jacket\" adicionado",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "acionar o botao de checkout",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "adicionar o campo de nome como \"Maria\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "adicionar o campo de sobrenome como \"Da Silva\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "adicionar o campo de codigo postal como \"00000-000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "acionar o botao de continuar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "devera surgir a descricao da ordem de compra",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Fleece Jacket",
      "offset": 48
    }
  ],
  "location": "ContinuarComprandoSteps.que_esteja_na_pagina_do_carrinho_com_o_produto_adicionado(String)"
});
formatter.result({
  "duration": 287818300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.acionar_o_botao_de_checkout()"
});
formatter.result({
  "duration": 126423800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria",
      "offset": 32
    }
  ],
  "location": "CheckoutSteps.adicionar_o_campo_de_nome_como(String)"
});
formatter.result({
  "duration": 109004400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da Silva",
      "offset": 37
    }
  ],
  "location": "CheckoutSteps.adicionar_o_campo_de_sobrenome_como(String)"
});
formatter.result({
  "duration": 139840200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00000-000",
      "offset": 41
    }
  ],
  "location": "CheckoutSteps.adicionar_o_campo_de_codigo_postal_como(String)"
});
formatter.result({
  "duration": 112805500,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.acionar_o_botao_de_continuar()"
});
formatter.result({
  "duration": 135891400,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.devera_surgir_a_descricao_da_ordem_de_compra()"
});
formatter.result({
  "duration": 30643700,
  "status": "passed"
});
formatter.after({
  "duration": 708094100,
  "status": "passed"
});
formatter.uri("Features/ContinuarComprando.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Carrinho",
  "description": "",
  "id": "carrinho",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Carrinho"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Adicionar outro Produto com Sucesso",
  "description": "",
  "id": "carrinho;adicionar-outro-produto-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@ContinuarComprando"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que esteja na pagina do carrinho com o produto \"\u003cproduto1\u003e\" adicionado",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "o usuario acionar o botao de continuar comprando",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao adicionar ao carrinho do produto de nome \"\u003cproduto2\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o item devera ser adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "carrinho;adicionar-outro-produto-com-sucesso;",
  "rows": [
    {
      "cells": [
        "produto1",
        "produto2"
      ],
      "line": 17,
      "id": "carrinho;adicionar-outro-produto-com-sucesso;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 18,
      "id": "carrinho;adicionar-outro-produto-com-sucesso;;2"
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)",
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 19,
      "id": "carrinho;adicionar-outro-produto-com-sucesso;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1499233700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que esteja logado no sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 339166600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 483168100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Adicionar outro Produto com Sucesso",
  "description": "",
  "id": "carrinho;adicionar-outro-produto-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@ContinuarComprando"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que esteja na pagina do carrinho com o produto \"Sauce Labs Backpack\" adicionado",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "o usuario acionar o botao de continuar comprando",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao adicionar ao carrinho do produto de nome \"Test.allTheThings() T-Shirt (Red)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o item devera ser adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 48
    }
  ],
  "location": "ContinuarComprandoSteps.que_esteja_na_pagina_do_carrinho_com_o_produto_adicionado(String)"
});
formatter.result({
  "duration": 314035400,
  "status": "passed"
});
formatter.match({
  "location": "ContinuarComprandoSteps.o_usuario_acionar_o_botao_de_continuar_comprando()"
});
formatter.result({
  "duration": 119483600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 58
    }
  ],
  "location": "ContinuarComprandoSteps.clicar_no_botao_adicionar_ao_carrinho_do_produto_de_nome(String)"
});
formatter.result({
  "duration": 188155500,
  "status": "passed"
});
formatter.match({
  "location": "ContinuarComprandoSteps.o_item_devera_ser_adicionado_ao_carrinho()"
});
formatter.result({
  "duration": 136199400,
  "status": "passed"
});
formatter.after({
  "duration": 700082800,
  "status": "passed"
});
formatter.before({
  "duration": 1508561300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que esteja logado no sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 337885300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 488995300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Adicionar outro Produto com Sucesso",
  "description": "",
  "id": "carrinho;adicionar-outro-produto-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@ContinuarComprando"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que esteja na pagina do carrinho com o produto \"Test.allTheThings() T-Shirt (Red)\" adicionado",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "o usuario acionar o botao de continuar comprando",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao adicionar ao carrinho do produto de nome \"Sauce Labs Bolt T-Shirt\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o item devera ser adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 48
    }
  ],
  "location": "ContinuarComprandoSteps.que_esteja_na_pagina_do_carrinho_com_o_produto_adicionado(String)"
});
formatter.result({
  "duration": 185684800,
  "status": "passed"
});
formatter.match({
  "location": "ContinuarComprandoSteps.o_usuario_acionar_o_botao_de_continuar_comprando()"
});
formatter.result({
  "duration": 137640300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Bolt T-Shirt",
      "offset": 58
    }
  ],
  "location": "ContinuarComprandoSteps.clicar_no_botao_adicionar_ao_carrinho_do_produto_de_nome(String)"
});
formatter.result({
  "duration": 315121100,
  "status": "passed"
});
formatter.match({
  "location": "ContinuarComprandoSteps.o_item_devera_ser_adicionado_ao_carrinho()"
});
formatter.result({
  "duration": 173154700,
  "status": "passed"
});
formatter.after({
  "duration": 786858100,
  "status": "passed"
});
formatter.uri("Features/FinalizarPedido.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Pedido"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Realizar pedido com Sucesso",
  "description": "",
  "id": "checkout;realizar-pedido-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@RealizarPedido"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que o usuario adicionou o produto \"\u003cproduto\u003e\" ao carrinho",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "prosseguiu para a pagina de descricao de checkout",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "acionar o botao de finalizar pedido",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "devera surgir a pagina de sucesso da ordem",
  "keyword": "Entao "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "checkout;realizar-pedido-com-sucesso;",
  "rows": [
    {
      "cells": [
        "produto"
      ],
      "line": 17,
      "id": "checkout;realizar-pedido-com-sucesso;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 18,
      "id": "checkout;realizar-pedido-com-sucesso;;2"
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 19,
      "id": "checkout;realizar-pedido-com-sucesso;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1599462500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que esteja logado no sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 412706500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 625268200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Realizar pedido com Sucesso",
  "description": "",
  "id": "checkout;realizar-pedido-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Pedido"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    },
    {
      "line": 9,
      "name": "@RealizarPedido"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que o usuario adicionou o produto \"Sauce Labs Backpack\" ao carrinho",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "prosseguiu para a pagina de descricao de checkout",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "acionar o botao de finalizar pedido",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "devera surgir a pagina de sucesso da ordem",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 35
    }
  ],
  "location": "FinalizarPedidoSteps.que_o_usuario_adicionou_o_produto_ao_carrinho(String)"
});
formatter.result({
  "duration": 342025200,
  "status": "passed"
});
formatter.match({
  "location": "FinalizarPedidoSteps.prosseguiu_para_a_pagina_de_descricao_de_checkout()"
});
formatter.result({
  "duration": 734499700,
  "status": "passed"
});
formatter.match({
  "location": "FinalizarPedidoSteps.acionar_o_botao_de_finalizar_pedido()"
});
formatter.result({
  "duration": 97877000,
  "status": "passed"
});
formatter.match({
  "location": "FinalizarPedidoSteps.devera_surgir_a_pagina_de_sucesso_da_ordem()"
});
formatter.result({
  "duration": 50211900,
  "status": "passed"
});
formatter.after({
  "duration": 666573900,
  "status": "passed"
});
formatter.before({
  "duration": 1593089800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que esteja logado no sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 346266200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 498294900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Realizar pedido com Sucesso",
  "description": "",
  "id": "checkout;realizar-pedido-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Pedido"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    },
    {
      "line": 9,
      "name": "@RealizarPedido"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que o usuario adicionou o produto \"Test.allTheThings() T-Shirt (Red)\" ao carrinho",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "prosseguiu para a pagina de descricao de checkout",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "acionar o botao de finalizar pedido",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "devera surgir a pagina de sucesso da ordem",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 35
    }
  ],
  "location": "FinalizarPedidoSteps.que_o_usuario_adicionou_o_produto_ao_carrinho(String)"
});
formatter.result({
  "duration": 323882700,
  "status": "passed"
});
formatter.match({
  "location": "FinalizarPedidoSteps.prosseguiu_para_a_pagina_de_descricao_de_checkout()"
});
formatter.result({
  "duration": 648525900,
  "status": "passed"
});
formatter.match({
  "location": "FinalizarPedidoSteps.acionar_o_botao_de_finalizar_pedido()"
});
formatter.result({
  "duration": 88844600,
  "status": "passed"
});
formatter.match({
  "location": "FinalizarPedidoSteps.devera_surgir_a_pagina_de_sucesso_da_ordem()"
});
formatter.result({
  "duration": 35353800,
  "status": "passed"
});
formatter.after({
  "duration": 718090000,
  "status": "passed"
});
formatter.uri("Features/Inventario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Inventario",
  "description": "",
  "id": "inventario",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Inventario"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Adicionar Produto com Sucesso",
  "description": "",
  "id": "inventario;adicionar-produto-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@AdicionarProduto"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "acionar o botao adicionar ao carrinho do produto de nome \"\u003cproduto1\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "acionar o outro botao adicionar ao carrinho do produto de nome \"\u003cproduto2\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema devera apresentar os dois produtos na lista do carrinho.",
  "keyword": "Entao "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "inventario;adicionar-produto-com-sucesso;",
  "rows": [
    {
      "cells": [
        "produto1",
        "produto2"
      ],
      "line": 15,
      "id": "inventario;adicionar-produto-com-sucesso;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 16,
      "id": "inventario;adicionar-produto-com-sucesso;;2"
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket",
        "Sauce Labs Onesie"
      ],
      "line": 17,
      "id": "inventario;adicionar-produto-com-sucesso;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1554410200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que esteja logado no sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 340550700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 498277700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Adicionar Produto com Sucesso",
  "description": "",
  "id": "inventario;adicionar-produto-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@AdicionarProduto"
    },
    {
      "line": 2,
      "name": "@Inventario"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "acionar o botao adicionar ao carrinho do produto de nome \"Sauce Labs Backpack\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "acionar o outro botao adicionar ao carrinho do produto de nome \"Test.allTheThings() T-Shirt (Red)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema devera apresentar os dois produtos na lista do carrinho.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 58
    }
  ],
  "location": "InventarioSteps.acionar_o_botao_adicionar_ao_carrinho_do_produto_de_nome(String)"
});
formatter.result({
  "duration": 117569400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 64
    }
  ],
  "location": "InventarioSteps.acionar_o_outro_botao_adicionar_ao_carrinho_do_produto_de_nome(String)"
});
formatter.result({
  "duration": 65944700,
  "status": "passed"
});
formatter.match({
  "location": "InventarioSteps.o_sistema_devera_apresentar_os_dois_produtos_na_lista_do_carrinho()"
});
formatter.result({
  "duration": 221043200,
  "status": "passed"
});
formatter.after({
  "duration": 709525500,
  "status": "passed"
});
formatter.before({
  "duration": 1572607900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que esteja logado no sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 342212200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 483450400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Adicionar Produto com Sucesso",
  "description": "",
  "id": "inventario;adicionar-produto-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@AdicionarProduto"
    },
    {
      "line": 2,
      "name": "@Inventario"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "acionar o botao adicionar ao carrinho do produto de nome \"Sauce Labs Fleece Jacket\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "acionar o outro botao adicionar ao carrinho do produto de nome \"Sauce Labs Onesie\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema devera apresentar os dois produtos na lista do carrinho.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Fleece Jacket",
      "offset": 58
    }
  ],
  "location": "InventarioSteps.acionar_o_botao_adicionar_ao_carrinho_do_produto_de_nome(String)"
});
formatter.result({
  "duration": 115353300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 64
    }
  ],
  "location": "InventarioSteps.acionar_o_outro_botao_adicionar_ao_carrinho_do_produto_de_nome(String)"
});
formatter.result({
  "duration": 116242500,
  "status": "passed"
});
formatter.match({
  "location": "InventarioSteps.o_sistema_devera_apresentar_os_dois_produtos_na_lista_do_carrinho()"
});
formatter.result({
  "duration": 163201200,
  "status": "passed"
});
formatter.after({
  "duration": 684362000,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo os Produtos.",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 16,
      "id": "login;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 17,
      "id": "login;realizar-login-com-sucesso;;2"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ],
      "line": 18,
      "id": "login;realizar-login-com-sucesso;;3"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 19,
      "id": "login;realizar-login-com-sucesso;;4"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 20,
      "id": "login;realizar-login-com-sucesso;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1504549800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 346341100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo os Produtos.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 193997500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 194207500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 150974800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_os_Produtos()"
});
formatter.result({
  "duration": 99140600,
  "status": "passed"
});
formatter.after({
  "duration": 728138100,
  "status": "passed"
});
formatter.before({
  "duration": 1470736400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 348916200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"locked_out_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo os Produtos.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 207210400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 159916900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 127440300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_os_Produtos()"
});
formatter.result({
  "duration": 60114331300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.id: inventory_container\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat utils.MetodosUteis.esperarElemento(MetodosUteis.java:18)\r\n\tat pageobjects.LoginPage.validarInventario(LoginPage.java:49)\r\n\tat stepdefinitions.LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_os_Produtos(LoginSteps.java:48)\r\n\tat ✽.Entao o sistema devera autorizar o login, exibindo pagina contendo os Produtos.(Features/Login.feature:13)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#inventory_container\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027PCDOLEO\u0027, ip: \u0027192.168.0.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Leo\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:62766}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dc2e0dc4f556ec84b0eedcc2eb807fd8\n*** Element info: {Using\u003did, value\u003dinventory_container}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utils.MetodosUteis.esperarElemento(MetodosUteis.java:18)\r\n\tat pageobjects.LoginPage.validarInventario(LoginPage.java:49)\r\n\tat stepdefinitions.LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_os_Produtos(LoginSteps.java:48)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:768)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 672730700,
  "status": "passed"
});
formatter.before({
  "duration": 1531904600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 1130968300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"problem_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo os Produtos.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 167234900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 125200700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 149324900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_os_Produtos()"
});
formatter.result({
  "duration": 82887800,
  "status": "passed"
});
formatter.after({
  "duration": 710264200,
  "status": "passed"
});
formatter.before({
  "duration": 1465692400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 363642000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"performance_glitch_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo os Produtos.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 215352100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 129994900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 5165880500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_os_Produtos()"
});
formatter.result({
  "duration": 265513200,
  "status": "passed"
});
formatter.after({
  "duration": 708396900,
  "status": "passed"
});
formatter.uri("Features/RemoverDoCarrinho.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Remover",
  "description": "",
  "id": "remover",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Carrinho"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Remover Produto com Sucesso",
  "description": "",
  "id": "remover;remover-produto-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@AdicionarProduto"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "o produto \"\u003citem\u003e\" esta no carrinho",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o usuario clicar no botao de remover desse item",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o item devera ser retirado do carrinho",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "remover;remover-produto-com-sucesso;",
  "rows": [
    {
      "cells": [
        "item"
      ],
      "line": 16,
      "id": "remover;remover-produto-com-sucesso;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 17,
      "id": "remover;remover-produto-com-sucesso;;2"
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 18,
      "id": "remover;remover-produto-com-sucesso;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1489082500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que esteja logado no sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 381708200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 593428000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Remover Produto com Sucesso",
  "description": "",
  "id": "remover;remover-produto-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@AdicionarProduto"
    },
    {
      "line": 2,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "o produto \"Sauce Labs Backpack\" esta no carrinho",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o usuario clicar no botao de remover desse item",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o item devera ser retirado do carrinho",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 11
    }
  ],
  "location": "CarrinhoSteps.o_produto_esta_no_carrinho(String)"
});
formatter.result({
  "duration": 387949700,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_usuario_clicar_no_botao_de_remover_desse_item()"
});
formatter.result({
  "duration": 77556000,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_item_devera_ser_retirado_do_carrinho()"
});
formatter.result({
  "duration": 30102601200,
  "status": "passed"
});
formatter.after({
  "duration": 643049000,
  "status": "passed"
});
formatter.before({
  "duration": 1527876200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que esteja logado no sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 340827600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 477906500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Remover Produto com Sucesso",
  "description": "",
  "id": "remover;remover-produto-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@AdicionarProduto"
    },
    {
      "line": 2,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "o produto \"Test.allTheThings() T-Shirt (Red)\" esta no carrinho",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o usuario clicar no botao de remover desse item",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o item devera ser retirado do carrinho",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 11
    }
  ],
  "location": "CarrinhoSteps.o_produto_esta_no_carrinho(String)"
});
formatter.result({
  "duration": 207307200,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_usuario_clicar_no_botao_de_remover_desse_item()"
});
formatter.result({
  "duration": 56849300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_item_devera_ser_retirado_do_carrinho()"
});
formatter.result({
  "duration": 30008711200,
  "status": "passed"
});
formatter.after({
  "duration": 664102900,
  "status": "passed"
});
});