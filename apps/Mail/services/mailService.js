import { storageService } from "../../../services/storageService.js";
import { utilService } from "../../../services/utilService.js";

export const mailService = {
   query,
   createEmail,
   saveEmailsToStorage,
   removeEmail
}

const KEY = 'mailDB';

function createEmail(subject, body) {
   return {
      id: utilService.makeId(),
      sender: 'Me',
      subject: subject,
      body: body,
      isRead: false,
      sentAt: Date.now()
   }
}

var emails = _createEmails()
// window.theBooks = emails //theEmails??????

function saveEmailsToStorage(emailsFromStorage = emails) {
   storageService.save(KEY, emailsFromStorage)
}

// function _addEmail() {
//    emails.unshift(_createEmail())
//    saveNotesToStorage()
//    return Promise.resolve()
// }

function removeEmail(emailId) {
   emails = emails.filter(email => email.id !== emailId);
   saveEmailsToStorage()
   return Promise.resolve()
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
   saveEmailsToStorage(emailsFromStorage);
   return emailsFromStorage

}

function query() {
   return Promise.resolve(emails)
}