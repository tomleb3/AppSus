import { storageService } from "./storageService.js";

export const keepService = {
   query,
   addNote,
   removeNote
}

var notes

const STORAGE_KEY = 'keepDB';

function query() {
   return notes
}

function addNote() {
   notes.unshift(createNote())
}

function removeNote(noteId) {
   notes = notes.filter(note => note.id !== noteId)
}

function createNote() {
   return {
      id: 749,
      type: "",
      isPinned: false,
      info: {
         title: "",
         txt: ""
      },
      style: {
         bgc: "#AECBFA"
      }
   }
}

(() => {
   const _notes = storageService.load(STORAGE_KEY);
   if (_notes && _notes.length) notes = _notes
   else notes = [{
      id: 789,
      type: "NoteTxt",
      isPinned: false,
      info: {
         title: "asd",
         txt: "Fullstack Me Baby!"
      },
      style: {
         bgc: "#FDCFE8"
      }
   },
   {
      id: 790,
      type: "NoteImg",
      isPinned: false,
      info: {
         url: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
         title: "Me playing Mi"
      },
      style: {
         bgc: "#CCFF90"
      }
   },
   {
      id: 791,
      type: "NoteTodos",
      isPinned: false,
      info: {
         title: "What to buy:",
         todos: [
            { txt: "Milk", isChecked: true, createAt: null },
            { txt: "Bread", isChecked: false, createAt: 187111111 },
            { txt: "Cheese", isChecked: true, createAt: 187111111 },
            { txt: "Eggs", isChecked: false, createAt: null }
         ]
      },
      style: {
         bgc: "#FFF475"
      }
   }
   ]
})();

// storageService.save(STORAGE_KEY, notes)

// function initStorage() {
//    const _notes = storageService.load(STORAGE_KEY);
//    if (!_notes || !_notes.length) storageService.save(STORAGE_KEY, notes)
//       // return (_notes) ? _notes : notes



// function getNoteById(noteId) {
//    const note = notes.find(note => note.id === noteId);
//    return Promise.resolve(note);
// }


//
// {
//    id: 792,
//    type: "NoteVideo",
//    isPinned: false,
//    info: {
//       url: "http://some-img/me",
//       title: "Im a Video"
//    },
//    style: {
//       bgc: "#f6f6f6"
//    }
// }