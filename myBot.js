//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const botRem = new Discord.Client();

//Set listener on 'ready'
botRem.on('ready', () => {
  console.log('Rem ready!');
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'อีกระเทย') {
    message.reply('มึงสิกระเทย');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'สวัสดีครับ') {
    message.reply('ท่านสมาชิกคนชอบสี');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'น้ำทิพย์เป็นคนยังไง') {
    message.reply('เป็นกระเทย');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'แหนมเป็นคนยังไง') {
    message.reply('เป็นกระเทยไง');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'คมสันเป็นคนยังไง') {
    message.reply('เป็นอีกระเทย');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'โอ๊ตเป็นคนยังไง') {
    message.reply('อีกระเทย');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'มึงสิกระเทย') {
    message.reply('เดี๋ยวกูจะแจ้ง เดี๋ยวกูจะแจ้ง');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'พรี่แง้เป็นคนยังไง') {
    message.reply('ดี');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'นนท์เป็นคนยังไง') {
    message.reply('หล่อสุด');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'นนท์เป็นคนยังไง') {
    message.reply('สุดหล่อว่ะ');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'แจ๊ปเป็นคนยังไง') {
    message.reply('เป็นร้อนใน');
  }
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'เปิดเพลง') {
    message.reply('ก็ใส่โค๊ดเพลงที่จะเปิดมาสิวะ กระเทย');
  }
});

botRem.login('NjUyOTM5MTk2NjY2ODcxODE5.XevwRQ.xx6NIszpV-k0x90wy4TV87T-q0Y');
