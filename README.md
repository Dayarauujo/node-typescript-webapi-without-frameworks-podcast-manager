# 🎧 Podcast Manager

## 📌 Descrição
O **Podcast Manager** é uma aplicação inspirada no estilo da Netflix, que permite centralizar diferentes episódios de podcasts separados por categoria.  
Este projeto visa facilitar o acesso e a organização de episódios de podcasts em formato de vídeo, proporcionando uma experiência de navegação intuitiva e agradável para os usuários.

---

## 🚀 Funcionalidades
- **Listar episódios de podcasts por categoria**: Organizados em seções como *saúde, bodybuilder, mentalidade e humor*, permitindo explorar facilmente os conteúdos.  
- **Filtrar episódios por nome de podcast**: Busca simples para encontrar episódios de um podcast específico.

---

## ⚙️ Implementação

### 🔹 Listar episódios por categorias
**Endpoint:** `GET /list`  
**Descrição:** Retorna uma lista de episódios de podcasts organizados por categorias.  

**Exemplo de resposta:**
```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

---

### 🔹 Filtrar episódios por nome de podcast
**Endpoint:** `GET /episode?podcastName={nome}`  
**Descrição:** Retorna uma lista de episódios de podcast com base no nome fornecido.  

**Exemplo de requisição:**
```
GET /episode?podcastName=flow
```

---

## 🛠️ Tecnologias Utilizadas
- **TypeScript** → Linguagem de programação principal.  
- **Tsup** → Ferramenta de build e empacotamento.  
- **Tsx** → Compilador TypeScript para execução.  
- **Node.js** → Ambiente de execução JavaScript.  
- **@types/node** → Definições de tipos para Node.js.  

---

## 📂 Como Utilizar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/podcast-manager.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```
4. Acesse os endpoints disponíveis para listar ou filtrar episódios de podcasts.  

---

## 🤝 Contribuição
Contribuições são bem-vindas!  
Sinta-se à vontade para abrir **issues** ou enviar **pull requests** para melhorar este projeto.  

---

## 📄 Licença
Este projeto está licenciado sob a [MIT License](LICENSE).  
