if "%2" EQU "" (
  set PARAM1=HEAD
  set PARAM2=%1
) else (
  set PARAM1=%1
  set PARAM2=%2
)

setlocal enabledelayedexpansion
set RET_DIR=
for /F "usebackq" %%i in (`git diff --name-only %PARAM1% %PARAM2%`) do (
  set RET_DIR=!RET_DIR! "%%i"
)

git archive --format=zip --prefix=archive/ %PARAM1% %RET_DIR% -o archive.zip