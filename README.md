# piserver
Multi-Purpose utility server

## Start Slave Server
npm start

## Start Master Server
npm run master



pm2 start index.js --name="piserver"
pm2 start master.js --name="pimaster"
