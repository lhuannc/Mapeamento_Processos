Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Aplicação Processo Seletivo","publishDate":"05/09/2024 15:44:35","pages":[{"id":"b6ad8131-ee9f-44e6-9c2c-33aa5eb71c9f","name":"Processos Seletivos","version":"1.0","author":"Lhuann Cordeiro","image":"files\\diagrams\\Processos Seletivos.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"2b2511cc-c515-43c5-9a59-355e7d340710","name":"Criação, Publicação e Gestão de Processo Seletivo","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Calibri;font-size:11pt;font-weight:normal;font-style:normal;\">Esse processo tem como objetio prim&aacute;rio mapear as atividades para cria&ccedil;&atilde;o do processo seletivo e suas sub atividades. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":993.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[{"id":"31e73641-538f-455a-a3ae-71bfc4d2388a","name":"teste","value":"files\\attachments\\Captura de tela 2024-09-04 103920.png","type":"image","description":""}],"pageElements":[{"id":"505aaabc-7574-40a0-ae08-1be06c45bb8e","name":"Exibir Dados do Processo Seletivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1652.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"fbced402-ca43-4cec-8bf4-028f8bcf6ee2","name":"Habilitar Inscrição do Candidato","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1800.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"bfce7e79-6cc3-45b4-961a-9cb3f515e8c9","name":"Efetuar Cadastro","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2132.0,"y":720.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Criação de Cadastro - Criação de Cadastro","type":"url","pageRef":"15350607-64db-4a80-bde3-4f03347fdaab","processPageRef":"d4188cc8-7d94-4cc2-a4ee-d59ed9f1d618"}]},{"id":"6848f509-236a-468c-99ab-b17809b572fd","name":"Cadastrar Pessoa Jurídica","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":384.0,"y":82.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[{"id":"2b6f95e9-3ccd-4c76-82ed-0e868abc670d","name":"Documento","value":"files\\attachments\\Captura de tela 2024-09-02 083906.png","type":"url","urlText":"Captura de tela 2024-09-02 083906.png","description":""},{"id":"620ac659-9757-4b76-b7b9-6ed4460dd4dd","name":"Espeficiações","type":"table","description":"","table":{"headers":[{"id":"","value":"Campo","description":""},{"id":"","value":"Tipo","description":"Tipo de Informação"},{"id":"","value":"Descrição","description":""},{"id":"","value":"Regra","description":"O botão possui regra"}],"exportAsTable":true,"table":[[{"id":"8c080361-d83a-459f-a05f-baaa3e319e68","name":"Campo","value":"CNPJ","type":"text","description":""},{"id":"789887d4-8557-4ead-9a5f-c105a4d992ae","name":"Tipo","value":"Numero","type":"text","description":"Tipo de Informação"},{"id":"7fc352e5-5819-4dc2-85eb-5ee55c176dc7","name":"Descrição","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Preencher o Cadastro Nacional de Pessoa Jur&iacute;dica</span></p>","type":"text","description":""},{"id":"ad20ad77-1516-47aa-b381-3080ee8db6d1","name":"Regra","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Esse campo ser&aacute; necess&aacute;rio para acionar dados da API. </span></p>","type":"text","description":"O botão possui regra"}]]}}],"presentationAction":{"value":"files\\attachments\\66d87ab1cb54b.pdf","type":"url","urlText":"66d87ab1cb54b.pdf"}},{"id":"af99f39f-838f-462d-8e8f-80803238d3ce","name":"Cadastrar Contrato","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Calibri;font-size:11pt;font-weight:normal;font-style:normal;\">b</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":555.0,"y":82.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"f1c8e9b2-d973-4441-a17c-3ab40f40c90f","name":"Habilitar Criação de processo seletivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1154.0,"y":71.0}],"radius":0.0,"height":82.0,"width":107.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"f24aac94-38a9-4c45-8a34-2bcf0cf14daf","name":"Criar Processo Seletivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1163.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Criação de Processo Seletivo - Criação de Processo Seletivo","type":"url","pageRef":"aff07d14-9d94-4b70-b22c-92fbef0efdb4","processPageRef":"05c48c15-3e17-4c4d-b9e8-c3aa326c8924"}]}]}],"subPages":[{"id":"15350607-64db-4a80-bde3-4f03347fdaab","name":"Criação de Cadastro - Criação de Cadastro","image":"files\\diagrams\\Criacao de Cadastro.svg","isSubprocessPage":true,"isCallActivityPage":true,"elements":[{"id":"505aaabc-7574-40a0-ae08-1be06c45bb8e","name":"Exibir Dados do Processo Seletivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1652.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"fbced402-ca43-4cec-8bf4-028f8bcf6ee2","name":"Habilitar Inscrição do Candidato","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1800.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"bfce7e79-6cc3-45b4-961a-9cb3f515e8c9","name":"Efetuar Cadastro","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2132.0,"y":720.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Criação de Cadastro - Criação de Cadastro","type":"url","pageRef":"15350607-64db-4a80-bde3-4f03347fdaab","processPageRef":"d4188cc8-7d94-4cc2-a4ee-d59ed9f1d618"}]},{"id":"6848f509-236a-468c-99ab-b17809b572fd","name":"Cadastrar Pessoa Jurídica","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":384.0,"y":82.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[{"id":"2b6f95e9-3ccd-4c76-82ed-0e868abc670d","name":"Documento","value":"files\\attachments\\Captura de tela 2024-09-02 083906.png","type":"url","urlText":"Captura de tela 2024-09-02 083906.png","description":""},{"id":"620ac659-9757-4b76-b7b9-6ed4460dd4dd","name":"Espeficiações","type":"table","description":"","table":{"headers":[{"id":"","value":"Campo","description":""},{"id":"","value":"Tipo","description":"Tipo de Informação"},{"id":"","value":"Descrição","description":""},{"id":"","value":"Regra","description":"O botão possui regra"}],"exportAsTable":true,"table":[[{"id":"8c080361-d83a-459f-a05f-baaa3e319e68","name":"Campo","value":"CNPJ","type":"text","description":""},{"id":"789887d4-8557-4ead-9a5f-c105a4d992ae","name":"Tipo","value":"Numero","type":"text","description":"Tipo de Informação"},{"id":"7fc352e5-5819-4dc2-85eb-5ee55c176dc7","name":"Descrição","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Preencher o Cadastro Nacional de Pessoa Jur&iacute;dica</span></p>","type":"text","description":""},{"id":"ad20ad77-1516-47aa-b381-3080ee8db6d1","name":"Regra","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Esse campo ser&aacute; necess&aacute;rio para acionar dados da API. </span></p>","type":"text","description":"O botão possui regra"}]]}}],"presentationAction":{"value":"files\\attachments\\66d87ab1cb54b.pdf","type":"url","urlText":"66d87ab1cb54b.pdf"}},{"id":"af99f39f-838f-462d-8e8f-80803238d3ce","name":"Cadastrar Contrato","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Calibri;font-size:11pt;font-weight:normal;font-style:normal;\">b</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":555.0,"y":82.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"f1c8e9b2-d973-4441-a17c-3ab40f40c90f","name":"Habilitar Criação de processo seletivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1154.0,"y":71.0}],"radius":0.0,"height":82.0,"width":107.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"f24aac94-38a9-4c45-8a34-2bcf0cf14daf","name":"Criar Processo Seletivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1163.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Criação de Processo Seletivo - Criação de Processo Seletivo","type":"url","pageRef":"aff07d14-9d94-4b70-b22c-92fbef0efdb4","processPageRef":"05c48c15-3e17-4c4d-b9e8-c3aa326c8924"}]}],"parentRef":"b6ad8131-ee9f-44e6-9c2c-33aa5eb71c9f"},{"id":"aff07d14-9d94-4b70-b22c-92fbef0efdb4","name":"Criação de Processo Seletivo - Criação de Processo Seletivo","image":"files\\diagrams\\Criacao de Processo Seletivo.svg","isSubprocessPage":true,"isCallActivityPage":true,"elements":[{"id":"505aaabc-7574-40a0-ae08-1be06c45bb8e","name":"Exibir Dados do Processo Seletivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1652.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"fbced402-ca43-4cec-8bf4-028f8bcf6ee2","name":"Habilitar Inscrição do Candidato","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1800.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"bfce7e79-6cc3-45b4-961a-9cb3f515e8c9","name":"Efetuar Cadastro","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2132.0,"y":720.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Criação de Cadastro - Criação de Cadastro","type":"url","pageRef":"15350607-64db-4a80-bde3-4f03347fdaab","processPageRef":"d4188cc8-7d94-4cc2-a4ee-d59ed9f1d618"}]},{"id":"6848f509-236a-468c-99ab-b17809b572fd","name":"Cadastrar Pessoa Jurídica","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":384.0,"y":82.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[{"id":"2b6f95e9-3ccd-4c76-82ed-0e868abc670d","name":"Documento","value":"files\\attachments\\Captura de tela 2024-09-02 083906.png","type":"url","urlText":"Captura de tela 2024-09-02 083906.png","description":""},{"id":"620ac659-9757-4b76-b7b9-6ed4460dd4dd","name":"Espeficiações","type":"table","description":"","table":{"headers":[{"id":"","value":"Campo","description":""},{"id":"","value":"Tipo","description":"Tipo de Informação"},{"id":"","value":"Descrição","description":""},{"id":"","value":"Regra","description":"O botão possui regra"}],"exportAsTable":true,"table":[[{"id":"8c080361-d83a-459f-a05f-baaa3e319e68","name":"Campo","value":"CNPJ","type":"text","description":""},{"id":"789887d4-8557-4ead-9a5f-c105a4d992ae","name":"Tipo","value":"Numero","type":"text","description":"Tipo de Informação"},{"id":"7fc352e5-5819-4dc2-85eb-5ee55c176dc7","name":"Descrição","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Preencher o Cadastro Nacional de Pessoa Jur&iacute;dica</span></p>","type":"text","description":""},{"id":"ad20ad77-1516-47aa-b381-3080ee8db6d1","name":"Regra","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Esse campo ser&aacute; necess&aacute;rio para acionar dados da API. </span></p>","type":"text","description":"O botão possui regra"}]]}}],"presentationAction":{"value":"files\\attachments\\66d87ab1cb54b.pdf","type":"url","urlText":"66d87ab1cb54b.pdf"}},{"id":"af99f39f-838f-462d-8e8f-80803238d3ce","name":"Cadastrar Contrato","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Calibri;font-size:11pt;font-weight:normal;font-style:normal;\">b</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":555.0,"y":82.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"f1c8e9b2-d973-4441-a17c-3ab40f40c90f","name":"Habilitar Criação de processo seletivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1154.0,"y":71.0}],"radius":0.0,"height":82.0,"width":107.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"f24aac94-38a9-4c45-8a34-2bcf0cf14daf","name":"Criar Processo Seletivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1163.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Criação de Processo Seletivo - Criação de Processo Seletivo","type":"url","pageRef":"aff07d14-9d94-4b70-b22c-92fbef0efdb4","processPageRef":"05c48c15-3e17-4c4d-b9e8-c3aa326c8924"}]}],"parentRef":"b6ad8131-ee9f-44e6-9c2c-33aa5eb71c9f"}]},{"id":"aff07d14-9d94-4b70-b22c-92fbef0efdb4","name":"Criação de Processo Seletivo","mainProcessId":"99328014-793b-45f9-b985-dd617a77df5e","version":"1.0","author":"00343426","image":"files\\diagrams\\Criacao de Processo Seletivo.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[],"subPages":[]},{"id":"15350607-64db-4a80-bde3-4f03347fdaab","name":"Criação de Cadastro","mainProcessId":"3bf1fcb5-c96d-4259-894f-b0193ae4148d","version":"1.0","author":"00343426","image":"files\\diagrams\\Criacao de Cadastro.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[],"subPages":[]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Responsável","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"Ir para Matriz","calledBy":"Chamada por","attachmentsTooltip":"Exibir anexos","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Mostrar tudo","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Início","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","viewDetails":"Ver detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"A página não pode ser exibida","resourceNotFound":"O recurso solicitado não foi encontrado:","applyTheme":"Aplicando novo tema","showMore":"Mostrar mais","showLess":"Mostrar menos","hideDescription":"Ocultar descrição","showDescription":"Mostrar descrição","presentationActionLink":"Exibir ações de apresentação","goToLinkThrow":"Ir para o evento de destino","goToLinkCatch":"Ir para o evento de origem","goToSubProcess":"Ir para o subprocesso","viewByList":"Lista de processos","viewByTree":"Hierarquia de processos","diagramList":"Lista de processos","folderTree":"Hierarquia de processos"},"resourcePage":{"id":"Resources","name":"Recursos","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"341713f4-b10b-48d9-96e7-d951361116a5","name":"Gerente","description":"Gerente é o usuário que possuí acessos máximos na aplicação.","rol":"Função"},{"id":"62ca6484-8a91-47c5-8872-5cd4576dc862","name":"Coordenador","description":"Responsável pela criação de editais e criação de modelos de editais.","rol":"Função"}]},"searchMap":[{"containerId":"b6ad8131-ee9f-44e6-9c2c-33aa5eb71c9f","containerName":"Processos Seletivos","isSubprocess":false,"elements":[{"id":"2b2511cc-c515-43c5-9a59-355e7d340710","value":"Criação, Publicação e Gestão de Processo Seletivo"},{"id":"de4fea15-d176-4178-867d-f91ada93ece8","value":"Gerente DP"},{"id":"a69507c2-a528-4341-acc8-fd1c3886564d","value":"Coodenador DP"},{"id":"7c27b25d-439d-4a15-91e2-cc2a69a14244","value":"Analista DP"},{"id":"6a83fc20-3ca1-47f3-9c1c-62214473ebea","value":"Candidato"},{"id":"97415f20-ebef-4149-8d1a-92fa31884372","value":"CRIAÇÃO DE PROCESSO SELETIVO"},{"id":"1b502066-aaab-4ee6-b6f5-7ed3914a4d14","value":"PUBLICAÇÃO"},{"id":"cdc359b1-5835-4186-8996-2e2f432e492a","value":"INSCRIÇÃO"},{"id":"0cf98055-cf05-452c-8be0-ed46449801a5","value":"GESTÃO DO CANDIDATO"},{"id":"362192ae-ecf8-4f92-bb76-8aef85c688e1","value":"ADMISSÃO"},{"id":"921f901e-1589-44ca-97e4-cf9111e95435","value":""},{"id":"43d65490-b202-4748-843d-49e4a7db3ea7","value":"Cadastrar Massivo"},{"id":"b714fccc-4e62-4182-a189-031fc3998075","value":"Cadastrar Manual"},{"id":"b1863409-c68d-4f57-a9e0-67f1bb20294c","value":""},{"id":"c3841920-c25e-4d89-9dd0-2e0dd0707293","value":"Tem Pessoa Pessoa Jurídica Cadastrada?"},{"id":"a962f3bb-dddb-4723-a94f-ae6ea4f452e1","value":"Cadastrar Quadro de Cargos"},{"id":"af99f39f-838f-462d-8e8f-80803238d3ce","value":"Cadastrar Contrato"},{"id":"6848f509-236a-468c-99ab-b17809b572fd","value":"Cadastrar Pessoa Jurídica"},{"id":"f1c8e9b2-d973-4441-a17c-3ab40f40c90f","value":"Habilitar Criação de processo seletivo"},{"id":"cf70d3d7-8f6d-44d4-86eb-a463baea0bd8","value":"Tem Convênio Cadastrado?"},{"id":"3b6ef6a1-1898-40c1-b97d-61f4ef8cbddd","value":"Tem Cargo Cadastrado?"},{"id":"f1369074-6e04-479e-9f6d-13015425485d","value":"Publicar Processo Seletivo"},{"id":"2c7ec7b0-74be-4d00-bddc-ef24bb52b6de","value":""},{"id":"f24aac94-38a9-4c45-8a34-2bcf0cf14daf","value":"Criar Processo Seletivo"},{"id":"53e38087-c970-451e-b68e-4dacbf5c1a6f","value":"Inscrever na Vaga"},{"id":"d0ece6fb-1e0f-483f-9ce8-532e69d49330","value":"Tem Login?"},{"id":"42c44ba1-a469-4dd7-be11-b534ca4ac008","value":"Efetuar Login"},{"id":"bfce7e79-6cc3-45b4-961a-9cb3f515e8c9","value":"Efetuar Cadastro"},{"id":"505aaabc-7574-40a0-ae08-1be06c45bb8e","value":"Exibir Dados do Processo Seletivo"},{"id":"fbced402-ca43-4cec-8bf4-028f8bcf6ee2","value":"Habilitar Inscrição do Candidato"},{"id":"a66034e2-0841-4bf3-b799-c7f7ebf86af3","value":"Tarefa 1"}]},{"containerId":"aff07d14-9d94-4b70-b22c-92fbef0efdb4","containerName":"Criação de Processo Seletivo","isSubprocess":false,"elements":[{"id":"d617f979-c467-479b-8bf5-e2ae3508e6e8"},{"id":"05c48c15-3e17-4c4d-b9e8-c3aa326c8924","value":"Criação de Processo Seletivo"},{"id":"d19f196c-8c67-4207-bf65-252fbf255554","value":""},{"id":"17bb5a71-3af8-423e-9c55-fbe9586db548","value":"Definir Convênio"},{"id":"32b6967d-cc25-4dcc-90c8-f75d883802b6","value":"Definir Local de  Trabalho"},{"id":"3bff1b02-ee0a-4e91-afc8-ea803074f05a","value":"Definir Vagas"},{"id":"3300f451-0ba6-41e1-9418-9d047551c342","value":"Definir Perguntas Por Vagas"},{"id":"25feafca-655b-45ff-85c6-fda7a52682c2","value":"Tarefa 1"}]},{"containerId":"15350607-64db-4a80-bde3-4f03347fdaab","containerName":"Criação de Cadastro","isSubprocess":false,"elements":[{"id":"926e312a-3546-43d3-af3f-b2cba8ec5613"},{"id":"d4188cc8-7d94-4cc2-a4ee-d59ed9f1d618","value":"Criação de Cadastro"},{"id":"5c446cc3-c96d-4164-b4b4-6d07c4ef2871","value":"Candidato"},{"id":"812908aa-ae16-4b91-a68a-87871911da36"},{"id":"a62214f2-b27b-4764-bf9c-8d76953882bf","value":"Inserir Dados Pessoais"}]}]}