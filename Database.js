import * as SQLite from "expo-sqlite";

import { useEffect } from 'react';

function openDatabase() {
  const db = SQLite.openDatabase('notes.db');
  return db;
}

class Database {
  constructor() {
    this.db = openDatabase();
    this.createTable();
  }

  createTable() {
    this.db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists items (id integer primary key not null, date date, value text);'
      );
    });
  }

  insertNote(content) {
    const currentDate = new Date().toISOString().split('T')[0];

    this.db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO items (date, value) VALUES (?, ?);',
        [currentDate, content],
        (txObj, resultSet) => {
          console.log('Note inserted successfully');
          console.log(content);
        },
        (txObj, error) => {
          console.log('Error in inserting note:', error);
        }
      );
    });
  }

  getAllNotes(callback) {
    this.db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM items;',
        [],
        (txObj, resultSet) => {
          const notesArray = [];
          const { rows } = resultSet;

          for (let i = 0; i < rows.length; i++) {
            const note = {
              id: rows.item(i).id,
              content: rows.item(i).value,
              created_at: rows.item(i).date,
            };
            notesArray.push(note);
          }

          callback(notesArray);
        },
        (txObj, error) => {
          console.log('Error in retrieving notes:', error);
        }
      );
    });
  }

  deleteNote(id) {
    this.db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM items WHERE id = ?;',
        [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            console.log('Note deleted successfully');
          } else {
            console.log('Note not found');
          }
        },
        (txObj, error) => {
          console.log('Error in deleting note:', error);
        }
      );
    });
  }
}

export default Database;