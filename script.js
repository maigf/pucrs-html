// Validação simples do formulário
document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  alert(`Obrigado, ${nome}! Seu cadastro foi realizado com sucesso. Confirmação enviada para: ${email}`);
  this.reset();
});

// Impede selecionar datas passadas
const inputData = document.getElementById("data");
const hoje = new Date().toISOString().split("T")[0];
inputData.setAttribute("min", hoje);
