# Arquitetura do sistema

<div align="justify">

A solução é composta por uma planilha do Google Sheets, uma aplicação web publicada pelo Google Apps Script e QR Codes individuais associados aos notebooks. A planilha concentra os dados, enquanto o Apps Script disponibiliza a interface e executa a gravação dos registros.

</div>

## Componentes

- **Google Sheets:** mantém as abas `notebooks` e `registros`.
- **Google Apps Script:** processa as solicitações e grava os dados.
- **HTML, CSS e JavaScript:** formam a interface acessada pelo navegador do celular.
- **QR Code:** contém o endereço da aplicação web com o identificador do equipamento.

## Fluxo lógico

```text
Celular → QR Code → Aplicação web → doGet(e)
                                  ↓
                         Interface HTML/JS
                                  ↓
                         google.script.run
                                  ↓
                           salvarDados()
                                  ↓
                         Google Sheets
                         aba registros
```

<div align="justify">

O identificador do notebook é transmitido como parâmetro da URL. A aplicação usa esse valor para apresentar o equipamento na interface. Quando o usuário envia o formulário, o nome e o identificador são enviados à função do servidor, que acrescenta uma linha à aba de registros com a data e hora atuais.

</div>

## Limites conhecidos

- O nome é digitado pelo usuário e não representa autenticação de identidade.
- O código apresentado não valida o ID contra a aba `notebooks`.
- O código apresentado não registra devoluções.
- A mensagem de sucesso não confirma explicitamente que uma linha foi gravada caso a aba de destino não exista.
