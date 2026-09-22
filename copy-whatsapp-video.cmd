@echo off
copy /Y "C:\Users\suchi\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\093F72C173C27946BB09C58B8B32122FC2A7DF01\transfers\2026-38\WhatsApp Video 2026-09-22 at 1.09.35 PM.mp4" "C:\Users\suchi\Downloads\code-arena-main\code-arena-main\Work CTI\Projects\Kids Nest\public\kids-video.mp4"
if exist "C:\Users\suchi\Downloads\code-arena-main\code-arena-main\Work CTI\Projects\Kids Nest\public\kids-video.mp4" (
  echo VIDEO_COPIED
) else (
  echo VIDEO_MISSING
)
