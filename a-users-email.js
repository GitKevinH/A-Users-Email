// list of items in  Mail IOS
//     Mailbox:
//         gmail1
//  inbox
// drafts
// sent
// junk
// trash
// allmail
// important
// notes

let mailIOS = {
  mailbox: {
    gmail: {
      inbox: [
        {
          from: "person",
          title: "Hello World!",
          body: "Hey there, how are you?",
        },

        {
          from: "person",
          title: "Hello Universe!",
          body: "Hey, how are ya?",
        },
      ],
      drafts: [
         {
          to: "person",
          title: "Hello Friend!",
          body: "How are ya?",
        },
    ],
      sent: [
        
           {
            to: "boss",
            title: "Sick Day",
            body: "Taking a sick day",
          },

          {
            to: "team",
            title: "Sick Day",
            body: "I'm taking a sick day, I told the boss already",
          },
        
      ],
      junk: [
        
           {
            from: "scammer",
            title: "Extended warranty",
            body: "Your warranty for you home is expiring",
          },
        
      ],
      trash: {
        email: {
          from: "Chipotle",
          title: "Burrito Day",
          body: "BOGO Burritos",
        },
      },
      allmail: [], // This is empty until the the code below concatonates the inbox & junk arrays together to show all mail recieved.
      notes: [
        "Note1: text belongs here",
        "Note2: text belongs here",
        "Note3: You get the idea",
      ],
    },
  },
};

 // Gets list of mailbox names (this is pointed to the gmail account, if there were other accounts it would point to whatever the named account is)
for (let allMailBoxes in mailIOS.mailbox.gmail) {
 
  console.log(allMailBoxes);
}

//Concatonates all email from inbox and junk into allMail and then prints it out.
mailIOS.mailbox.gmail.allmail = mailIOS.mailbox.gmail.inbox.concat(mailIOS.mailbox.gmail.junk);
for (let allEmail of mailIOS.mailbox.gmail.allmail) {
 
    console.log(allEmail);
  }


// Get text of the 2nd email. Remove the .body to get the whole message with sender, title, and body.
console.log(mailIOS.mailbox.gmail.inbox[0].body); 


// Marks an email as sent
mailIOS.mailbox.gmail.sent[0].sentcheck = "true";

// Checks if email was indeed marked as sent.
console.log(mailIOS.mailbox.gmail.sent[0].sentcheck); 

//Adds draft email to drafts mailbox

mailIOS.mailbox.gmail.drafts.push({
    to: "draftieboi",
    title: "Ole Buddy!",
    body: "ARE YOU STILL ALIVE??",
  });


  // Checks if email was added to drafts.
  console.log(mailIOS.mailbox.gmail.drafts[1]) 
