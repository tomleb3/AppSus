export const keepService = {
   query
}

function query() {
   return notes;
}


var notes = [{
      id: 789,
      type: "NoteText",
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
         url: "http://some-img/me",
         title: "Me playing Mi"
      },
      style: {
         bgc: "#888888"
      }
   },
   {
      id: 791,
      type: "NoteTodos",
      isPinned: false,
      info: {
         title: "What to buy:",
         todos: [
            { txt: "Milk", doneAt: null },
            { txt: "Bread", doneAt: 187111111 }
         ]
      },
      style: {
         bgc: "#f6f6f6"
      }
   }
];