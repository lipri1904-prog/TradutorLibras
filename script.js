// Ativar VLibras
new window.VLibras.Widget('https://vlibras.gov.br/app');

// Pegar elementos
const btn = document.getElementById('botaoTraduzir');
const textarea = document.getElementById('entradaTexto');
const lista = document.getElementById('listaTextos');

// Ação do botão
btn.addEventListener('click', () => {
  const texto = textarea.value.trim();
  if (!texto) return;

  // Criar bloco
  const wrapper = document.createElement('div');
  wrapper.className = 'textoItem';
  wrapper.textContent = texto;

  // Botão apagar
  const del = document.createElement('button');
  del.className = 'deleteBtn';
  del.textContent = '×';
  del.onclick = () => wrapper.remove();

  // Montar item
  wrapper.appendChild(del);
  lista.appendChild(wrapper);

  // Atualizar VLibras
  vlibras.reload();

  // Limpar campo
  textarea.value = "";
  textarea.focus();
});
