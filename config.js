const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263716729222";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_39_09_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICA2LFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExNixcbiAgICAgICAgNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk3LFxuICAgICAgICA1MSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhODdMR2xNaG9wUUtQMWJWbEowVCs1ZmJ5dXF1czJ5dGJZVXcyK3UweFhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1bGpaQ1pHZVRtZTU2RWtZZmY3dDhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRlNWY3NTA3LThhM2ItNDgxYS04MTBkLTU1YmE1MjA3MTllNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxMixcbiAgICAgIDE3MSxcbiAgICAgIDE5MixcbiAgICAgIDQ5LFxuICAgICAgOTQsXG4gICAgICAyMTEsXG4gICAgICAxNjgsXG4gICAgICA0MyxcbiAgICAgIDEyOSxcbiAgICAgIDExOSxcbiAgICAgIDIxNixcbiAgICAgIDEzNixcbiAgICAgIDI1NSxcbiAgICAgIDE0MixcbiAgICAgIDEzMyxcbiAgICAgIDEwLFxuICAgICAgMTE1LFxuICAgICAgMTc5LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMTc3LFxuICAgICAgMTY2LFxuICAgICAgMTg4LFxuICAgICAgMTI5LFxuICAgICAgMTM0LFxuICAgICAgMTAsXG4gICAgICA1NCxcbiAgICAgIDE5LFxuICAgICAgMTk0LFxuICAgICAgMTg5LFxuICAgICAgNDgsXG4gICAgICA3OCxcbiAgICAgIDMsXG4gICAgICAyNTEsXG4gICAgICAxNSxcbiAgICAgIDE0MyxcbiAgICAgIDM2LFxuICAgICAgMjUzLFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQUdMSFk4RDFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNjcyOTIyMjo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA4ODM0NjU1ODc1MTExOjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IMTV1QURFTW43c2JjR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidmR2dUNUUnRydjBrejZWaXZQVWxZZHpaT1IvQkpXeEw3NXhuMVY5d3hVUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0b0NQd1EyTmEyb0NBeUlXTi9YRnphVW5sczA0UnRacE5UaW1QdGtycmU2YThrRm1LVlljSlZrQXZUTUhLSUZDZ01sVEhaekxlaDl5VHQyUkRvMDVEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHd1ZEeEphVGo0ckF4Kyt6MW0vMDZLVmF3V2NMa0lBOHpjMFdlVnJOREFISklPR0lYRUpFYVFkd01NNndTR0IyMml6Z21MOERISE9kSjI1YzNjaGpDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTY3MjkyMjI6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjc3NDczMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhCd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEJ3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieC85K3lMVmtXeGJRcUdoRDJ2cUVER1VPL3ZzbEpIRXlQNys0N0hmREFJbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA4MzE5MTk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI1MzA3MDQ3MTg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
