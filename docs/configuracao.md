# Configuração e implantação

Este documento descreve as etapas gerais para configurar uma instalação do projeto. Os nomes de menus podem variar conforme a interface atual do Google.

## 1. Preparar a planilha

1. Crie uma planilha no Google Sheets.
2. Crie a aba `notebooks` com as colunas `ID`, `LINK` e `QR CODE`.
3. Cadastre um identificador para cada equipamento.
4. Crie a aba `registros` com as colunas `DATA/HORA`, `ID` e `NOME DO PROFESSOR`.

## 2. Adicionar o Apps Script

1. Abra o editor do Google Apps Script associado à planilha.
2. Insira o código do projeto.
3. Confirme que os nomes das abas correspondem aos utilizados no script.
4. Salve o projeto.

## 3. Implantar como aplicação web

1. No Apps Script, abra a opção de implantação e escolha uma nova implantação.
2. Selecione o tipo de implantação **Aplicativo da web**.
3. Configure a execução e as permissões de acesso conforme as políticas da organização.
4. Conclua a implantação e teste a URL gerada.


## 4. Associar os QR Codes

Para cada notebook, armazene na coluna `LINK` o endereço da aplicação web acrescido do parâmetro `id` correspondente. Gere um QR Code para cada endereço e insira-o na coluna `QR CODE` ou no material de identificação do equipamento.

## 5. Testar o fluxo

- Leia o QR Code com um celular.
- Confirme que a interface apresenta o ID esperado.
- Informe um nome de teste e envie.
- Verifique se uma nova linha aparece na aba `registros` com data/hora, ID e nome.
- Teste o comportamento quando o nome não é preenchido.

**Privacidade:** não publique URLs reais de implantação, nomes de professores, registros de uso ou outros dados internos em um repositório público.
