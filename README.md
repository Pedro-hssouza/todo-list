# To-Do List

Este projeto é uma aplicação simples de lista de tarefas ("To-Do List") desenvolvida em HTML, CSS e JavaScript. Ele permite que o usuário adicione, marque como concluída e exclua tarefas, com persistência de dados usando `localStorage`.

## Demonstração

Aqui está uma captura de tela do funcionamento da aplicação To-Do List:

![Tela do To-Do List](./img/tela%20do%20todo%20list.png)

## Funcionalidades

- **Adicionar Tarefas:** O usuário pode adicionar uma nova tarefa digitando no campo de entrada e clicando no botão "Adicionar".
- **Marcar como Concluída:** O usuário pode marcar uma tarefa como concluída clicando no ícone de check.
- **Excluir Tarefas:** O usuário pode excluir uma tarefa clicando no ícone da lixeira.
- **Persistência de Dados:** As tarefas são armazenadas no `localStorage`, de modo que, mesmo após fechar o navegador, as tarefas ainda estarão disponíveis na próxima visita.

## Estrutura do Projeto

### Arquivos Principais

- `index.html`: Contém a estrutura HTML da página.
- `style.css`: Contém os estilos CSS para o layout da aplicação.
- `script.js`: Contém a lógica em JavaScript para adicionar, excluir e marcar tarefas como concluídas.

### HTML

- A estrutura da página inclui um campo de entrada para novas tarefas, um botão para adicionar a tarefa e uma lista (`ul`) onde as tarefas serão exibidas.

### JavaScript

- **`addNewTask()`**: Adiciona uma nova tarefa à lista de tarefas e atualiza o `localStorage`.
- **`showTask()`**: Renderiza as tarefas na tela e atualiza o `localStorage`.
- **`taskComplete(index)`**: Alterna o estado de conclusão de uma tarefa.
- **`deletarItem(index)`**: Remove uma tarefa da lista.
- **`recarregarTask()`**: Carrega as tarefas armazenadas no `localStorage` ao carregar a página.

## Fontes e Tecnologias

- **Fontes:** A aplicação utiliza a fonte "Roboto" do Google Fonts.
- **Tecnologias:** HTML, CSS, JavaScript, e `localStorage`.
T.
