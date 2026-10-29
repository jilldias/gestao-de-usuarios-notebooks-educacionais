<h1 align="center">Automação de Registro de Empréstimos de Notebooks Educacionais</h1>


<p align="justify">
Sistema de registro de retirada de notebooks educacionais utilizando QR Codes, Google Sheets e Google Apps Script, desenvolvido para facilitar o controle de equipamentos e a identificação dos usuários responsáveis por sua retirada.
</p>

---

## Problema

<p align="justify">
O controle de utilização dos notebooks educacionais não era realizado de maneira efetiva. Ocorrências como equipamentos desaparecidos, problemas técnicos e retiradas sem rastreabilidade dificultavam a identificação de quem estava utilizando cada computador.
</p>

<p align="justify">
A ausência de registros consistentes também dificultava a consulta à data, ao horário e ao último usuário associado a determinado equipamento, comprometendo o acompanhamento de sua utilização.
</p>

## Solução

<p align="justify">
Desenvolvi uma solução de automação utilizando recursos do Google Workspace, com funcionamento diretamente pelo navegador e sem a necessidade de instalar aplicativos nos dispositivos dos usuários.
</p>

<p align="justify">
A estrutura do sistema utiliza uma planilha do Google Sheets para organizar o cadastro dos equipamentos e armazenar o histórico de registros. Cada notebook possui um identificador físico correspondente ao seu identificador digital, permitindo associar o equipamento ao respectivo registro.
</p>

<p align="justify">
Na aba de cadastro, cada identificador está associado a um endereço da aplicação web e a um QR Code individual. Ao realizar a leitura do código com o celular, o usuário acessa uma interface desenvolvida com HTML, CSS e JavaScript, disponibilizada pelo Google Apps Script.
</p>

<p align="justify">
Nessa interface, basta informar o nome do professor e confirmar a operação. O script recebe os dados e registra automaticamente a data, o horário, a identificação do notebook e o nome informado na planilha de controle.
</p>

<p align="justify">
Dessa forma, o processo de registro foi simplificado, reduzindo a quantidade de informações que precisam ser preenchidas manualmente e facilitando a consulta ao histórico de utilização dos equipamentos.
</p>

## Tecnologias utilizadas

<table>
  <tr>
    <td align="center" width="80">
      <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" alt="Google Sheets" width="40" height="40">
    </td>
    <td align="justify">
      <strong>Google Sheets:</strong> cadastro dos notebooks e armazenamento do histórico de registros.
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png" alt="Google Apps Script" width="40" height="40">
    </td>
    <td align="justify">
      <strong>Google Apps Script:</strong> automação das operações e integração com a planilha.
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://img.icons8.com/color/96/html-5--v1.png" alt="HTML5" width="40" height="40">
    </td>
    <td align="justify">
      <strong>HTML5:</strong> estrutura da interface de registro.
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://img.icons8.com/color/96/css3.png" alt="CSS3" width="40" height="40">
    </td>
    <td align="justify">
      <strong>CSS3:</strong> estilização da interface e adaptação para dispositivos móveis.
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://img.icons8.com/color/96/javascript--v1.png" alt="JavaScript" width="40" height="40">
    </td>
    <td align="justify">
      <strong>JavaScript:</strong> validação do campo de nome e comunicação entre a interface e o script.
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://img.icons8.com/color/96/qr-code--v1.png" alt="QR Code" width="40" height="40">
    </td>
    <td align="justify">
      <strong>QR Code:</strong> identificação individual dos equipamentos e acesso rápido à aplicação web.
    </td>
  </tr>
</table>

## Estrutura da planilha

<p align="justify">
O projeto utiliza duas abas principais:
</p>

### `notebooks`

<p align="justify">
Responsável pelo cadastro e pela identificação dos equipamentos.
</p>

| Campo | Descrição |
|---|---|
| ID | Identificador individual do notebook. |
| LINK | Endereço da aplicação web associado ao equipamento. |
| QR CODE | Código utilizado para acessar a interface de registro correspondente. |

### `registros`

<p align="justify">
Responsável por armazenar o histórico das operações realizadas.
</p>

| Campo | Descrição |
|---|---|
| DATA/HORA | Data e horário gerados automaticamente pelo script. |
| ID | Identificador do notebook associado à operação. |
| NOME DO PROFESSOR | Nome informado pelo usuário no momento do registro. |

## Fluxo de funcionamento

<p align="justify">
O processo de registro segue o fluxo abaixo:
</p>

```text
┌───────────────────────────┐
│      QR Code individual   │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│       Aplicação web       │
│     Google Apps Script    │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│ Identificação do notebook │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│ Professor informa o nome  │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│       enviar()            │
│   Envio dos dados         │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│     google.script.run     │
│ Comunicação com o servidor│
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│      salvarDados()        │
│ Gravação das informações  │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│       Google Sheets       │
│          registros        │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│  Mensagem de confirmação  │
└───────────────────────────┘
```

<p align="justify">
A data e o horário são gerados automaticamente durante a execução do script. Assim, o usuário precisa informar apenas seu nome, enquanto a identificação do equipamento é obtida a partir do QR Code utilizado.
</p>

## Resultados

<p align="justify">
A implementação proporcionou um processo de registro mais simples e organizado, facilitando a consulta ao histórico de utilização dos notebooks educacionais.
</p>

<p align="justify">
Entre os principais benefícios estão:
</p>

- Identificação individual dos equipamentos por QR Code.
- Registro automatizado de data e horário.
- Associação entre o notebook e o nome informado pelo usuário.
- Centralização das informações em uma única planilha.
- Redução da necessidade de preenchimento manual de dados.
- Facilidade de acesso pelo celular, sem instalação de aplicativos.
- Maior rastreabilidade das retiradas e apoio à gestão dos equipamentos.

## Considerações finais

<p align="justify">
O projeto demonstra como ferramentas acessíveis do Google Workspace podem ser integradas para automatizar processos administrativos e solucionar problemas operacionais reais.
</p>

<p align="justify">
A combinação de Google Sheets, Google Apps Script e QR Codes permitiu desenvolver uma solução de baixo custo, simples de utilizar e adaptada às necessidades do ambiente educacional.
</p>

Jillian Dias.