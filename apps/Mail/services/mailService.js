import { storageService } from "../../../services/storageService.js";
import { utilService } from "../../../services/utilService.js";

export const mailService = {
   query,
   createEmail
}

const KEY = 'mailDB';

function createEmail() {
   console.log('HI');
   return {
      id: utilService.makeId(), //makeId
      sender: 'Me',
      subject: '',
      body: '',
      isRead: false,
      sentAt: Date.now()
   }
}

var emails = _createEmails()
   // window.theBooks = emails //theEmails??????

function _saveEmailsToStorage(emailsFromStorage = emails) {
   storageService.save(KEY, emailsFromStorage)
}




function _createEmails() {
   var emailsFromStorage = storageService.load(KEY)
   if (!emailsFromStorage || !emailsFromStorage.length) {
      emailsFromStorage = [{
            id: 71,
            sender: 'Joe',
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: 1551133930594
         },
         {
            id: 72,
            sender: 'Netflix',
            subject: 'hi there?',
            body: 'Pick up!',
            isRead: false,
            sentAt: 1551133930808
         },
         {
            id: 73,
            sender: 'Clalit',
            subject: 'Meet in 8:30',
            body: 'Pick lorem asdasd mi est eros convallis auctor arcu dapibus himenaeosmi est eros convallis auctor arcu dapibus himenaeos!',
            isRead: false,
            sentAt: 1551133900000
         },
         {
            id: 74,
            sender: 'Tom',
            subject: 'fofo?',
            body: 'Pick up!est eros convallis auctor arcu dapibus himenaeosmi est eros convallis auctor arcu dapibus himenaeos!est eros convallis auctor arcu dapibus himenaeosmi est eros convallis auctor arcu dapibus himenaeos!est eros convallis auctor arcu dapibus himenaeosmi est eros convallis auctor arcu dapibus himenaeos!',
            isRead: false,
            sentAt: 1551133030594
         }
      ]
   }
   console.log(emailsFromStorage);
   _saveEmailsToStorage(emailsFromStorage);
   return emailsFromStorage

}

function query() {
   return Promise.resolve(emails)
}