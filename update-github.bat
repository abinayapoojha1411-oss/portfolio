@echo off
set "PATH=C:\Users\Lenovo\AppData\Local\Programs\nodejs;%PATH%"
echo ================================================
echo   Pushing your updates to GitHub and Vercel...
echo ================================================
git add .
set /p commit_msg="Enter commit note (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=update portfolio content
git commit -m "%commit_msg%"
echo.
echo Pushing to origin main...
git push origin main
echo.
echo ================================================
echo   SUCCESS: Changes are now pushed to GitHub!
echo   Vercel will automatically deploy them live.
echo ================================================
pause
