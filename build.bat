@echo off
set "PATH=C:\Users\Lenovo\AppData\Local\Programs\nodejs;%PATH%"
echo Building production bundle for Webnest Portfolio...
call npm run build
pause
