import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; //cria um uuid essa biblioteca
import classNames from 'classnames';

import GlobalStyles from "./components/styled/Global";
import { StyledMain } from './components/styled/Main.styled.js';
import { StyledBanner } from './components/styled/Banner.styled.js';
import Header from './components/Header';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import TodoFilters from './components/TodoFilters.js';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() { //todo eh a variavel e o set todo a funcao que seta ai ele recebe objetos
  const [todos, setTodos] = useState([]);// cria um state para salvar na memoria os dados
  const [filter, setFilter] = useState('all');//a variavel filter e o setfilter eh a funcao que define filter como strin all
  const [filteredTodos, setFilteredTodos] = useState([]); //variavel filter... e a funcao faz ele receber um objeto dos todos filtrados
  const [allFilterActive, setAllFilterActive] = useState(true);
  const [activeFilterActive, setActiveFilterActive] = useState(false);
  const [completedFilterActive, setCompletedFilterActive] = useState(false);

  const newTodoInput = useRef();

  useEffect(() => {//quando entra na pagina faz uma acao
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);//verifica se tem no local storage e seta os todos
      setFilter('all');
      setFilteredTodos(storedTodos);
    }
  }, [])

  useEffect(() => {
    if(todos.length !== 0) { //armazena o todo na web sem dar o crtl f5
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    } //
  }, [todos]) //toda vez que a variavel todo sofrer alteracao salva de novo

  // Adicionar todo
  function handleAddTodo() {
    const todoName = newTodoInput.current.value;
    if (todoName === "") {
      return;
    }//esses 3 pontos significa que vai pegar tudo que tem no todo e acrescentar no final dele o novo objeto todo  mantendo o que ja tinha
    setTodos([...todos, { id: uuidv4(), todoName: todoName, complete: false }]);
    newTodoInput.current.value = null;//limpa o input depois de acresentar
  }

  // mudar para feito e nao feito
  function toggleTodo(id) {
    const newTodos = [...todos];// pega todos todos coloca em new todo
    const selectedTask = todos.find(todo => todo.id === id); //da um find pelo id
    selectedTask.complete = !selectedTask.complete;//quando achar ele vai marcar a opcao contraria
    setTodos(newTodos) // atualiza os todos
  }

  // deletar todos todos completos
  function handleClear() {
    const remainingTodos = todos.filter(todo => !todo.complete); //filtra todos que estao completos
    setTodos(remainingTodos); //atualiza e recebe apenas os que nao estao completos
  }

  // deletar todo
  function deleteTodo(id) {
    const remainingTodos = todos.filter(todo => todo.id !== id);//filtra pelo id e remove
    setTodos(remainingTodos); //atualiza e seta de novo
  }

  // contar todos a fazer
  function countRemaining() {
    const count = todos.filter(todo => !todo.complete); //pega todos os todos a fazer

    if (count.length === 1) { //conta 1 objeto apenas
      return `1 item left`;
    } else {
      return `${count.length} items left`; // conta tamannho do objeto + de 1
    }
  }

  // filtros
  useEffect(() => {
    filterList();//
  }, [todos, filter])//toda vez que o todo ou a variavel filter sofrerem alteracao chama filter list

  function filterList() {
    if (filter === 'all') {//se for todos vai pegar todos todos sem filtros
      setFilteredTodos(todos);  
      setAllFilterActive(true);
      setActiveFilterActive(false);
      setCompletedFilterActive(false);
    } else if (filter === 'active') {
      const activeTodos = todos.filter(todo => !todo.complete);//antes de setar da um filter pegando os ativos nao completos
      setFilteredTodos(activeTodos); //depois de filtrar seta os ativos 
      setActiveFilterActive(true); //depois seta os booleanos
      setAllFilterActive(false);
      setCompletedFilterActive(false);
    } else if (filter === 'completed') {
      const completedTodos = todos.filter(todo => todo.complete); //filtra os completos
      setFilteredTodos(completedTodos);//deppois de filtrar seta os completos
      setCompletedFilterActive(true);//depois define os booleanos
      setAllFilterActive(false);
      setActiveFilterActive(false);
    }
  }




  return (
      <StyledMain>
      <GlobalStyles />
        
      <StyledBanner />
      <Header />

      <TodoInput newTodoInput={newTodoInput} handleAddTodo={handleAddTodo} />

      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} classNames={classNames} />

      <TodoFilters 
        countRemaining={countRemaining} 
        setFilter={setFilter}
        handleClear={handleClear}
        allFilterActive={allFilterActive}
        activeFilterActive={activeFilterActive}
        completedFilterActive={completedFilterActive}
      />

    </StyledMain>
  );
}

export default App;
