# Funcionamento do Google Apps Script

O script contém duas funções principais: `doGet(e)` e `salvarDados(dados)`.

## `doGet(e)`

Essa função atende a uma solicitação HTTP GET da aplicação web. Ela define inicialmente o ID como `PROF 01` e, quando o parâmetro `id` existe na URL, utiliza o valor recebido. Em seguida, constrói a página HTML que mostra o ID, o campo para o nome e o botão de registro.

O HTML utiliza CSS para formatar a interface e JavaScript para tratar o envio. A função `enviar()` verifica se o nome está vazio e interrompe o envio se necessário.

## `google.script.run`

Esse recurso permite que o JavaScript da página chame uma função do servidor do Google Apps Script. No projeto, ele chama `salvarDados()` e envia um objeto com as propriedades `id` e `nome`.

## `salvarDados(dados)`

A função obtém a planilha ativa, procura uma aba chamada `registros` ou `Registros` e, se a encontrar, acrescenta uma linha com:

1. `new Date()` — data e hora;
2. `dados.id` — identificador do notebook;
3. `dados.nome` — nome informado.

## Pontos de atenção

- A função procura apenas os nomes de aba `registros` e `Registros`.
- Não há validação do identificador contra a aba `notebooks`.
- Não há `withFailureHandler()` para apresentar erros ao usuário.
- Como a função não retorna um resultado que confirme a gravação, a interface pode exibir sucesso mesmo se a aba não for encontrada.
- O fuso horário apresentado deve ser conferido nas configurações da planilha e do projeto Apps Script.
