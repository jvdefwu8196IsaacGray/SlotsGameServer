pm2 start --name lobby ./server.js -- -a lobby -f 500;
pm2 start --name fish ./server.js -- -a fish -f 100;
pm2 start --name laba ./server.js -- -a laba;
pm2 start --name ftxy2 ./server.js -- -a yafen/ftxy2 -f 1000;
pm2 start --name slwh ./server.js -- -a yafen/slwh -f 1000;