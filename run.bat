@echo off 
cd backend 
start cmd /k "npm run dev" 
cd ../frontend 
npm run dev 
