
		
function editar(id, txt_tarefa){
    
    //CRIAR UM FORM DE EDIÇÃO
    let form = document.createElement('form');
    form.action = 'tarefa_controller.php?acao=atualizar';
    form.method = 'post';
    form.className = 'row'; 

    //CRIAR UM IMPUT PARA ENTRADA DO TEXTO
    let inputTarefa = document.createElement('input');
    inputTarefa.type = 'text';
    inputTarefa.name = 'tarefa';
    inputTarefa.className = 'col-9 form-control';
    inputTarefa.value = txt_tarefa

    //CRIAR UM INPUT HIDDEN PARA GUARADAR O ID DA TAREFA
    let inputId = document.createElement('input');
    inputId.type = 'hidden';
    inputId.name = 'id';
    inputId.value = id

    //CRIAR UM BOTÃO PARA ENVIO DO FORM
    let button = document.createElement('button');
    button.type = 'submit';
    button.className = 'col-3 btn btn-info';
    button.innerHTML = 'Atualizar';

    //INCLUIR INPUTTAREFA NO FORM
    form.appendChild(inputTarefa);

    //INCLUIR INPUTID NO FORM
    form.appendChild(inputId);

    //INCLUIR BUTTON NO FORM
    form.appendChild(button);

    //TESTE
    //console.log(form);

    //alert(id);

    //SELECIONAR A DIV TAREFA
    let tarefa = document.getElementById('tarefa_'+id);

    //LIMPAR O TEXTO DA TAREFA PARA INCLUSÃO DO FORM
    tarefa.innerHTML = '';

    //INCLUIR FORM NA PÁGINA
    tarefa.insertBefore(form, tarefa[0]);


}

function remover(id) {
    location.href = 'todas_tarefas.php?acao=remover&id='+id;
}

function marcarRealizada(id) {
    location.href = 'todas_tarefas.php?acao=marcarRealizada&id='+id;
}
