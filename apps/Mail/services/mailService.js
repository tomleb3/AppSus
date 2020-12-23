export const mailService = {
   query
}


var emails = [
   { id: 78, subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
   { id: 79, subject: 'hi there?', body: 'Pick up!', isRead: false, sentAt: 1551133930808 },
   { id: 76, subject: 'asd?', body: 'Pick asdasd!', isRead: false, sentAt: 1551133900000 },
   { id: 73, subject: 'susu?', body: 'Pick up!', isRead: false, sentAt: 1551133030594 }
]

function query() {
   return emails;
}