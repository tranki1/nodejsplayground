const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return (notes = JSON.parse(notesString));
  } catch (e) {
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  var notes = fetchNotes();
  console.log(`Print ${notes.length} notes`);
  notes.forEach(note => logNote(note));
};
var removeNote = title => {
  var notes = fetchNotes();
  var removedNotes = notes.filter(note => note.title !== title);
  saveNotes(removedNotes);
  return notes.length !== removedNotes.length;
};

var readNote = title => {
  var notes = fetchNotes();
  var filteredNote = notes.filter(note => note.title === title);
  return filteredNote[0];
};

var logNote = note => {
  debugger;
  console.log('__');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote,
  logNote
};
