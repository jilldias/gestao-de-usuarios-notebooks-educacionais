# Estrutura da planilha

A planilha contém duas abas com responsabilidades distintas.

## Aba `notebooks`

| Coluna | Finalidade |
|---|---|
| `ID` | Identificador individual do equipamento, por exemplo `PROF 01`. |
| `LINK` | URL da aplicação web com o identificador enviado como parâmetro. |
| `QR CODE` | Código QR associado ao endereço da aplicação. |

Cada linha representa um notebook cadastrado. Os exemplos de identificadores nesta documentação são ilustrativos; não são incluídos links reais da aplicação.

## Aba `registros`

| Coluna | Finalidade | Origem |
|---|---|---|
| `DATA/HORA` | Data e hora do registro | `new Date()` no Apps Script |
| `ID` | Identificador do notebook | Parâmetro `id` enviado pela URL |
| `NOME DO PROFESSOR` | Nome informado no formulário | Campo de texto da interface |

Cada submissão acrescenta uma linha ao histórico. O código atual registra retiradas; não há um evento específico de devolução.
