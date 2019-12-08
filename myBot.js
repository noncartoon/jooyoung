const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Hello!');
});

client.on('message', message => {
  if (message.content === '/อีกะเทย') {
    message.channel.sendMessage('มึงสิกะเทย')
  } else if (message.content === '/พรี่คาซึยะ') {
    message.channel.sendMessage('ค้าบบบบ')
  } else if (message.content === '/สวัสดีค่ะ') {
    message.channel.sendMessage('ไม่เอาๆ ต้องสวัสดีคะสิ กะเทย')
  } else if (message.content === '/สวัสดีคะ') {
    message.channel.sendMessage('ยอดเยี่ยม')
  } else if (message.content === '/รักนะ') {
    message.channel.sendMessage('รักเหมือนกัน จุ๊บๆ')
  }
});

client.on('message', message => {
  if (message.content === '/สวัสดีครับ') {
    message.channel.sendMessage('ท่านสมาชิกคนชอบสี');
  }
});

client.on('message', message => {
  if (message.content === '/น้ำทิพย์เป็นคนยังไง') {
    message.channel.sendMessage('เป็นกะเทย');
  }
});

client.on('message', message => {
  if (message.content === '/คมสันเป็นคนยังไง') {
    message.channel.sendMessage('เป็นอีกะเทย');
  }
});

client.on('message', message => {
  if (message.content === 'มึงสิกะเทย') {
    message.channel.sendMessage('เดี๋ยวกูจะแจ้ง เดี๋ยวกูจะแจ้ง');
  }
});

client.on('message', message => {
  if (message.content === '/ชานนท์เป็นคนยังไง') {
    message.channel.sendMessage('หล่อสุด');
  }
});

client.on('message', message => {
  if (message.content === '/แจ๊ปเป็นคนยังไง') {
    message.channel.sendMessage('เป็นร้อนใน');
  }
});

client.on('message', message => {
  if (message.content === '/เปิดเพลง') {
    message.channel.sendMessage('ก็ใส่โค๊ดเพลงที่จะเปิดมาสิวะ กระเทย');
  }
});

client.login('NjUyOTM5MTk2NjY2ODcxODE5.XezGLA._MPkVCXE7c7iSMDX9qzAsHI20Qs');
