/*
 * Automação de registro de retirada de notebooks educacionais.
 */

//Função executada quando a aplicação recebe uma requisição GET
function doGet(e) {
  var id = "PROF 01";

  if (e && e.parameter && e.parameter.id) {
    id = e.parameter.id;
  }
//Página Web
  var html = '<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{font-family:sans-serif;padding:25px;text-align:center}input{width:100%;padding:15px;font-size:20px;margin-top:15px;border:2px solid #ccc;border-radius:8px}button{width:100%;padding:15px;margin-top:15px;background:#000;color:#fff;border:none;font-size:20px;border-radius:8px}#idBox{background:#e8f5e9;padding:12px;border-radius:8px;font-weight:bold;font-size:24px}</style></head><body><div id="idBox">' + id + '</div><p>Digite seu nome</p><input type="text" id="nome" placeholder="Prof. Joao"><button onclick="enviar()">REGISTRAR</button><p id="msg"></p><script>function enviar(){var nome=document.getElementById("nome").value.trim();var id="' + id + '";if(!nome){alert("Digite o nome");return}document.getElementById("msg").innerText="Salvando...";google.script.run.withSuccessHandler(function(){document.getElementById("msg").innerText="✅ Registrado! "+id;document.getElementById("nome").value=""}).salvarDados({id:id,nome:nome})}<\/script></body></html>';

  return HtmlService.createHtmlOutput(html).setTitle(id);
}

//Função de persistência dos dados(grava os dados na planilha)
function salvarDados(dados) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var aba = ss.getSheetByName("registros") || ss.getSheetByName("Registros");

  if (aba) {
    aba.appendRow([new Date(), dados.id, dados.nome]);
  }
}
