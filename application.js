$(document).ready(function() {
  var todoTemplate= $.trim($('#todo-template').html());
  
  $('.add-todo').on('click', addTodo);  
  $('#todo-list').on('click', '.delete', removeTodo);

  function removeTodo(){
    $(this).closest('div').remove();
  }

  function addTodo() {
    $todo = buildTodo();
    $('#todo-list').append($todo);
    clearInput();
  }
  
  function clearInput() {
     $('#title-input').val('');
     $('#content-input').val('');
     $('#title_input').focus();
  }

  function buildTodo() {

  $todoTemplate=$(todoTemplate);
    title = $('#title-input').val();
    content = $('#content-input').val();


  $todoTemplate.find('.title-render span').text(title);
  $todoTemplate.find('.content-render span').text(content);
    
    return $todoTemplate;
  }

});
