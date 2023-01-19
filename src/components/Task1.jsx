import React from 'react';

function Task1() {
  let [array, setArray] = React.useState([
    { name: 'First', isEdit: false },
    { name: 'Second', isEdit: false },
    { name: 'Third', isEdit: false },
  ]);

  let result = array.map((note, index) => {
    let elem;

    function edit(index) {
      let copy = Object.assign([], array);
      copy[index].isEdit = !copy[index].isEdit;
      setArray(copy);
    }

    function changeNote(index, event) {
      let copy = Object.assign([], array);
      copy[index].name = event.target.value;
      setArray(copy);
    }
    if (!note.isEdit) {
      elem = (
        <li key={index}>
          {note.name} <button onClick={() => edit(index)}>Изменить</button>
        </li>
      );
    } else {
      elem = (
        <div>
          <input type="text" value={note.name} onChange={(event) => changeNote(index, event)} />
          <button onClick={() => edit(index)}>Сохранить изменения</button>
        </div>
      );
    }

    return elem;
  });

  return (
    <div>
      <ul>{result}</ul>
    </div>
  );
}
export default Task1;
