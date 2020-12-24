import { storageService } from "../../../services/storageService.js";
import { utilService } from "../../../services/utilService.js";

export const keepService = {
   query,
   addNote,
   removeNote,
   getNoteById,
   saveNotesToStorage,
   clearKeepStorage,
}

var notes
const STORAGE_KEY = 'keepDB'
_createNotes()

function query() {
   return Promise.resolve(notes)
}

function getNoteById(noteId) {
   const note = notes.find(note => note.id === noteId);
   return Promise.resolve(note)
}

function addNote() {
   notes.unshift(_createNote())
   saveNotesToStorage()
}

function removeNote(noteId) {
   notes = notes.filter(note => note.id !== noteId);
   saveNotesToStorage()
   return Promise.resolve()
}

function clearKeepStorage() {
   storageService.clear(STORAGE_KEY)
}

function saveNotesToStorage() {
   storageService.save(STORAGE_KEY, notes)
}

function _createNote() {
   return {
      id: utilService.makeId(),
      type: "",
      isPinned: false,
      createdAt: Date.now(),
      info: {
         title: "",
         txt: ""
      },
      style: {
         bgc: "#AECBFA"
      }
   }
}

function _createNotes() {
   notes = storageService.load(STORAGE_KEY);
   if (!notes || !notes.length) {
      notes = _getDemoNotes()
      saveNotesToStorage();
   }
}

function _getDemoNotes() {
   const _notes = [{
      id: 'demo_id_1',
      type: "NoteTxt",
      isPinned: false,
      createdAt: Date.now(),
      info: {
         title: "asd",
         txt: "Fullstack Me Baby!"
      },
      style: {
         bgc: "#FDCFE8"
      }
   },
   {
      id: 'demo_id_2',
      type: "NoteImg",
      isPinned: true,
      createdAt: Date.now(),
      info: {
         url: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
         title: "Me playing Mi"
      },
      style: {
         bgc: "#CCFF90"
      }
   },
   {
      id: 'demo_id_3',
      type: "NoteTodos",
      isPinned: true,
      createdAt: Date.now(),
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
   }];
   return _notes;
}


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