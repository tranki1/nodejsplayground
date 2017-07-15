const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const titleOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOption = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add new note', {
    title: titleOption,
    body: bodyOption
  })
  .command('list', 'List all notes')
  .command('read', 'Read note', {
    title: titleOption
  })
  .command('remove', 'Remove note', {
    title: titleOption
  })
  .help().argv;
const command = argv._[0];

console.log('Command:', command);
console.log('yargs:', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'remove') {
  var removedNote = notes.removeNote(argv.title);
  var message = removedNote ? 'Removed note' : 'remove failed';
  console.log(message);
} else if (command === 'read') {
  var note = notes.readNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Not found note');
  }
} else {
  console.log('command not found');
}
