1. Start EC2
2. Wait for 2/2 status checks
3. SSH into server
4. pm2 status
5. sudo systemctl status nginx
6. Open http://3.7.39.177
7. Test homepage and disclaimer

If new code:
- git pull origin main
- npm install
- NODE_OPTIONS="--max-old-space-size=768" npm run build
- pm2 restart vikalp
- pm2 save