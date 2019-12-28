const deleteTodos = btn => {
  
    const todoDocId=btn.parentNode.querySelector('[name=todoDocId]').value;
    const liWrappingTodo = btn.closest('li');

    fetch('/delete-todo/' + todoDocId, { //registered this router in todoRoutes.js
      method: 'DELETE',
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log(data);
        liWrappingTodo.parentNode.removeChild(liWrappingTodo);
      })
      .catch(err => {
        console.log(err);
      }); 
  };
  