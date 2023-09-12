# Projeto de desenvolvimento utilizando conceitos de Redes de Computadores

## :octocat: Integrantes
[Geisianny B.](https://github.com/Geisianny) |[Gison V.](https://github.com/gison-vilaca)|[Rodrigo Leandro](https://github.com/Rudrigozx)

## :page_with_curl: Sobre o Projeto
O projeto é referente a 2ª Verificação de Aprendizagem da disciplina de __Redes de Computadores__ ministrada pela Professora Dra. Kádna Maria Alves Camboim vale , da UFAPE, no período 2022.2. 

 ## :pushpin: Objetivos
Desenvolver um Chat em Tempo Real: O principal objetivo deste projeto é criar um sistema de chat que permita a comunicação instantânea entre os usuários, proporcionando uma experiência de troca de mensagens em tempo real. Essa funcionalidade é essencial para diversas aplicações, desde chats de suporte ao cliente até salas de bate-papo em tempo real em jogos online.

Utilizar Tecnologia WebSockets: Para alcançar a comunicação instantânea, a tecnologia WebSocket será implementada. Os WebSockets são uma solução eficiente para comunicação bidirecional em tempo real, permitindo que os clientes e servidores enviem mensagens uns aos outros sem a necessidade de solicitações repetidas, o que reduz a latência e o consumo de recursos.

Isolar a Aplicação com Docker: Para facilitar o desenvolvimento e a implantação, a aplicação será empacotada em contêineres Docker. Essa abordagem oferece diversas vantagens, incluindo a capacidade de criar um ambiente de desenvolvimento isolado e consistente, garantindo que a aplicação funcione da mesma forma em diferentes ambientes.

Facilitar a Implantação: O uso do Docker também simplifica a implantação do chat. Os contêineres podem ser implantados em qualquer ambiente compatível com Docker, tornando o processo de implantação mais flexível e escalável. Isso significa que o chat pode ser executado em servidores locais, em nuvens públicas ou privadas, entre outros cenários.

Fornecer uma Interface de Usuário Intuitiva: Uma interface de usuário amigável será desenvolvida para que os usuários possam se conectar facilmente ao chat, enviar mensagens e receber atualizações em tempo real. A interface será projetada com foco na usabilidade e na experiência do usuário.

Manter a Conexão Segura e Estável: A segurança e a estabilidade da comunicação em tempo real são fundamentais. O projeto garantirá que as mensagens sejam transmitidas de forma segura e que a conexão seja estável, minimizando perdas de mensagens e protegendo a privacidade dos usuários.

Aprender a Configurar um Servidor WebSocket: Para suportar a comunicação em tempo real, será necessário configurar e gerenciar um servidor WebSocket no ambiente Node.js. Isso envolverá a implementação de rotas WebSocket e a gestão de conexões entre clientes e servidor.

Demonstrar o Uso do Docker: O projeto demonstrará como criar um Dockerfile para empacotar a aplicação e suas dependências em um contêiner Docker. Serão destacadas as vantagens da virtualização de aplicativos, como a portabilidade e a consistência em diferentes ambientes.

Facilitar a Comunicação Instantânea: A solução desenvolvida permitirá a troca rápida e eficiente de mensagens entre os usuários, oferecendo recursos como salas de chat, se necessário. Isso garantirá uma experiência de comunicação instantânea eficaz.

Promover a Escalabilidade e Portabilidade: O uso do Docker tornará o projeto mais escalável e portátil. Os contêineres podem ser facilmente replicados e implantados em diferentes ambientes, oferecendo flexibilidade para atender às necessidades de diferentes cenários de implantação.

Em resumo, este projeto visa criar um chat em tempo real usando Docker e WebSocket do Node.js, priorizando a comunicação instantânea, segurança, facilidade de implantação e escalabilidade. Esses objetivos proporcionarão uma solução robusta e flexível para atender às demandas de comunicação em tempo real em diversas aplicações.

## :keyboard: Como executar o projeto

* Construindo:
  ```
	Docker build -t chat-app .
  ```
* Executando:
  ```
	Docker run -p 3000:3000 -d chat-app
  ```
  ***Acesso: localhost:3000***

* Limpeza do contêiner:
  ```
	Docker stop <container_id>
  ```

## :hammer_and_wrench: Tecnologias Usadas

### [Docker](https://www.docker.com/)
*   Versão 24.0.5

### [Node.js](https://nodejs.org/en)
*   Versão 18.17.0

## :construction: Status do Projeto
Em construção...
