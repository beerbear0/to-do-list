import './App.css';
function App() {
  return (
    <div>
      <section className='header'>
        <h3 className='header__title'>To Do List</h3>
      </section>
      <section className='content'>
        <div className='tasks'>
          <div className='tasks__div' >
            <input className='tasks__input' placeholder='Введите текст' />
            <button className='task__btn tasks__send'>Send</button>
          </div>
          <div className='task'>
            <p className='task__text'>Текст задачи</p>
            <button className='task__btn task__btn_edit' />
            <button className='task__btn tast__btn_delete'>Delete</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
