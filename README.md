# piserver
Multi-Purpose utility server

## Start Slave Server
npm start

## Start Master Server
npm run master



pm2 start pm2_slave.json
pms start pm2_master.json

pm2 start slave.js --name="piserver"
pm2 start master.js --name="pimaster"
