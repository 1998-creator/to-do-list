function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue.length < 1) {
    alert('You must fill in the blank!');
  } else {
    $('#list').append(li);
  }

  function crossOut() {
    li.addClass('strike');
  }
  li.on('click', function crossOut() {
    li.addClass('strike');
  });

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  $(crossOutButton).on('click', function () {
    $(this).parent().remove();
  });

  $('#list').sortable();
}





