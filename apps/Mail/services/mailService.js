import { storageService } from "./storageService.js";

export const mailService = {
   query
}

const KEY = 'emails';

var emails = _createEmails()
   // window.theBooks = emails //theEmails??????

function _saveEmailsToStorage(emailsFromStorage = emails) {
   storageService.saveToStorage(KEY, emailsFromStorage)
}


function _createEmails() {
   var emailsFromStorage = storageService.loadFromStorage(KEY)
   if (!emailsFromStorage || !emailsFromStorage.length) {
      emailsFromStorage = [{
            id: 78,
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: 1551133930594
         },
         {
            id: 79,
            subject: 'hi there?',
            body: 'Pick up!',
            isRead: false,
            sentAt: 1551133930808
         },
         {
            id: 76,
            subject: 'Meet in 8:30',
            body: 'Pick lorem asdasd mi est eros convallis auctor arcu dapibus himenaeosmi est eros convallis auctor arcu dapibus himenaeos!',
            isRead: false,
            sentAt: 1551133900000
         },
         {
            id: 73,
            subject: 'fofo?',
            body: 'Pick up!est eros convallis auctor arcu dapibus himenaeosmi est eros convallis auctor arcu dapibus himenaeos!est eros convallis auctor arcu dapibus himenaeosmi est eros convallis auctor arcu dapibus himenaeos!est eros convallis auctor arcu dapibus himenaeosmi est eros convallis auctor arcu dapibus himenaeos!',
            isRead: false,
            sentAt: 1551133030594
         }
      ]
   }
   _saveEmailsToStorage(emailsFromStorage);
   return emailsFromStorage

}

function query() {
   return Promise.resolve(emails)
}