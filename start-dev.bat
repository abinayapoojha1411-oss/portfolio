@echo off
set "PATH=C:\Users\Lenovo\AppData\Local\Programs\nodejs;%PATH%"
echo Starting Webnest dev server at http://localhost:5173/ ...
call npm run dev -- --open
pause
