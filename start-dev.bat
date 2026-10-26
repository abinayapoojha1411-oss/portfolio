@echo off
set "PATH=C:\Users\Lenovo\AppData\Local\Programs\nodejs;%PATH%"
echo Starting Abinaya Portfolio dev server at http://127.0.0.1:5173/ ...
call npm run dev -- --host 127.0.0.1 --port 5173
pause
