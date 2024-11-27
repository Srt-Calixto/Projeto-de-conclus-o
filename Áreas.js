let next = document.querySelector('.next') /* botão de navegação para frente */ 
let prev = document.querySelector('.prev') /* botão de navegação para trás */ 

next.addEventListener('click', function(){ 
    let items = document.querySelectorAll('.item') /* Obtém todos os elementos com a classe .item */
    document.querySelector('.slide').appendChild(items[0]) /*Seleciona o contêiner que contém todos os itens do carrossel. */ 
    /**Move o primeiro item (items[0]) da lista para o final do contêiner .slide. Isso faz parecer que os itens se deslocaram para a esquerda.*/
})
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item') /**Obtém novamente a lista de itens no carrossel.  */
    document.querySelector('.slide').prepend(items[items.length - 1]) 
    /* items[items.length - 1]: Seleciona o último item da lista. */ 
    /**prepend(items[items.length - 1]): Move o último item para o início do contêiner .slide. Isso faz parecer que os itens se deslocaram para a direita.*/

})