#!/bin/sh
echo "[NOTICE] Clear old files..."
rm -rf /jffs/merlin-web
rm -rf /tmp/merlin-web*
echo "[NOTICE] Download zip file..."
wget https://github.com/thesadboy/merlin-web-for-r6900/raw/master/tools/merlin-web.zip -P /tmp/ --no-check-certificate
echo "[NOTICE] Unzip zip file"
unzip /tmp/merlin-web.zip -d /tmp/
echo "[NOTICE] copy /www to /jffs/merlin-web"
cp -r /www /jffs/merlin-web
echo "[NOTICE] Override /jffs/merlin-web with downloaded files"
cp -r /tmp/merlin-web/* /jffs/merlin-web
if [ ! -f "/jffs/scripts/init-start" ]
then
  echo "[NOTICE] Create /jffs/scripts/init-start and add startup cmd"
  echo "!/bin/sh" >> /jffs/scripts/init-start
  echo "mount --bind /jffs/merlin-web /www" >> /jffs/scripts/init-start
  chmod 777 /jffs/scripts/init-start
else
  echo "[NOTICE] Add startup cmd into /jffs/scripts/init-start"
  echo "mount --bind /jffs/merlin-web /www" >> /jffs/scripts/init-start
fi
echo "[NOTICE] Restart router..."
restart