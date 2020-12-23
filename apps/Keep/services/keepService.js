import { storageService } from "../../../services/storageService.js";

export const keepService = {
   query
}

var notes = [{
   id: 789,
   type: "NoteTxt",
   isPinned: false,
   info: {
      title: "asd",
      txt: "Fullstack Me Baby!"
   },
   style: {
      bgc: "#686868"
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
      bgc: "#008888"
   }
},
{
   id: 791,
   type: "NoteTodos",
   isPinned: false,
   info: {
      title: "What to buy:",
      todos: [
         { txt: "Milk", createAt: null },
         { txt: "Bread", createAt: 187111111 }
      ]
   },
   style: {
      bgc: "#d400d4"
   }
}
];

const STORAGE_KEY = 'keepDB';

function query() {
   const _notes = storageService.load(STORAGE_KEY);
   return (_notes) ? _notes : notes
}

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