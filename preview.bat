@echo off
set "PATH=C:\Users\Lenovo\AppData\Local\Programs\nodejs;%PATH%"
echo Starting Webnest production preview server...
call npm run preview -- --open
pause
