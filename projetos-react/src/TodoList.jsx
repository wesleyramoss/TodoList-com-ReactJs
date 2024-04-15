import './TodoList.css'

import { useState } from 'react'

import Icone from './icon.webp'

function TodoList(){

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("")

    function adicionaItem(form){
        form.preventDefault();
        if(!novoItem){
            return;
        }
        setLista([...lista, {text: novoItem, isCompleted: false} ])
        setNovoItem("");
        document.getElementById('input-entrada').focus()
    }

    function clicou(index){
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted
        setLista(listaAux)
    }

    function deleta(index){
        const listaAux = [...lista];
        listaAux.splice(index, 1);
        setLista(listaAux);
    }

    function deletaTudo(){
        setLista([])
    }

    return(
        <div>
            <h1>Lista De Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input 
                id='input-entrada'
                type="text"
                placeholder="Digite sua Tarefa"
                value={novoItem}
                onChange={(e) => {setNovoItem(e.target.value)}}
                />
                <button type="submit" className='add'>Adicionar</button>
            </form>
                <div className="listaDeTarefas">
                    <div style={{textAlign: 'center'}}>
                    {
                        lista.length <1
                        ?
                        <img src={Icone}/>
                        :
                        lista.map((item, index) => (
                            <div className={item.isCompleted ? "item completo" : "item"} >
                            <span onClick={() => {clicou(index)}} >{item.text}</span>
                            <button onClick={() => {deleta(index)}} className='btn-task'>Deletar</button>
                        </div>
                        ))
                    }
                    </div>
                    {
                        lista.length > 0 &&
                        <button onClick={() => {deletaTudo()}} className='deleteAll'>Deletar Todas</button>
                    }
                </div>
        </div>
    )
}

export default TodoList