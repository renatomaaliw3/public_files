@echo off


set /P desc=Enter Description: 
set "str= - "

set "DATESTAMP=%DATE:~10,4%_%DATE:~4,2%_%DATE:~7,2%"
set "TIMESTAMP=%TIME:~0,2%_%TIME:~3,2%_%TIME:~6,2%"

set "DATEANDTIME=%DATESTAMP%_%TIMESTAMP%"
set "CONCAT=%str%%DATEANDTIME%"

git add . --all
git commit -m "%desc%%CONCAT%"
git push

echo.
echo ---------------------------
echo Changes Successfully Saved!
echo ---------------------------
echo.

pause