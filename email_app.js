var appData = {
    name: 'Gmail',
    mailboxes: [
        { name:'inbox',
          children: [
              { name: 'work',
                emails: [
                  {
                    from: 'boss@job.com',
                    to: 'yassi@email.com',
                    subject: 'Monday Meeting',
                    content: 'Meeting is Cancelled, Enjoy your Monday.',
                    date: '12/25/2016',
                    starred: true,
                    labels: ['work','meetings']
                  },
                  {
                    from: 'assistant@job.com',
                    to: 'yassi@email.com',
                    subject: 'I got Chai',
                    content: 'Your Chai is on your desk.',
                    date: '1/2/2015',
                    starred: false,
                    labels: []
                  }
                ]
              },
              { name: 'travel',
                emails: [
                  {
                    from: 'Jamaica@expedia.com',
                    to: 'yassi@email.com',
                    subject: 'Booking Confirmed',
                    content: 'Have a great Trip',
                    date: '11/2/2016',
                    starred: true,
                    labels: ['personal','travel','reciepts']
                  },
                  {
                    from: 'assistant@job.com',
                    to: 'yassi@email.com',
                    subject: 'Travell confirmation',
                    content: 'Your Tickets are booked',
                    date: '1/2/2015',
                    starred: false,
                    labels: ['travel']
                  }
                ]
              }
          ]  //end of inbox
        },
        { name: 'sent',
          emails: [
            {
              from: 'yassi@email.com',
              to: 'boss@job.com',
              subject: 'Request PTO',
              content: 'These are my travel dates.',
              date: '13/12/2016',
              starred: false,
              labels: []
            },
            {
              from: 'yassi@email.com',
              to: 'assistant@job.com',
              subject: 'Tickets recieved',
              content: 'Thank you',
              date: '1/2/2015',
              starred: false,
              labels: []
            }
          ]
        }
    ],
    labels: [
      'meetings',
      'work',
      'personal',
      'reciepts',
      'travel'
    ],
    contacts: [
        {name: 'John Smith', email: 'boss@job.com'},
        {name: 'Peter Pan', email: 'assistant@job.com'},
        {name: 'Pink Panther', email: 'pink@friend.com'},
        {name: 'Donald Duck' , email: 'donald@donaldduck.com'}
    ]

}
//List of all inboxes
console.log('\nList of all inboxes:\n' );
for(var i = 0 ; i < appData.mailboxes.length; i++){
  console.log(appData.mailboxes[i].name);
}
//Number of emails in each mailbox
for(var i = 0 ; i < appData.mailboxes.length; i++){
  if(appData.mailboxes[i].emails != null){
    console.log('\nEmails under ' + appData.mailboxes[i].name + ':' + appData.mailboxes[i].emails.length);
  }
  else{
    if(appData.mailboxes[i].children != null){
      for(var j=0 ; j < appData.mailboxes[i].children.length; j++)
      console.log('\nEmails under ' + appData.mailboxes[i].children[j].name + ':' + appData.mailboxes[i].children[j].emails.length);
    }
  }
}
//add an email to sent
for(var i = 0 ; i < appData.mailboxes.length ; i++){
  if(appData.mailboxes[i].name === 'sent'){
    var email = {
      from: 'yassi@email.com',
      to: 'boss@job.com',
      subject: 'PTO Follow Up',
      content: 'Still waiting approval',
      date: '14/12/2016',
      starred: false,
      labels: []
    }
    appData.mailboxes[i].emails.push(email);
  }
}
for(var i = 0 ; i < appData.mailboxes.length ; i++){
  if(appData.mailboxes[i].name === 'sent'){
    for(var j = 0 ; j < appData.mailboxes[i].emails.length ;j ++)
    console.log('\nSent Emails: ' + appData.mailboxes[i].emails[j].subject + ' Sent ' + appData.mailboxes[i].emails[j].date + '\n');
  }
}
//At this point I think I have managed to make this pretty complicated for myself :D
