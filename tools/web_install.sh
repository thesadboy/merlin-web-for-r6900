#!/bin/sh
rm -rf /tmp/merlin-web*
echo "Download zip file..."
wget https://github.com/thesadboy/merlin-web-for-r6900/raw/master/tools/merlin-web.zip -P /tmp/ --no-check-certificate
echo "Unzip zip file"
unzip /tmp/merlin-web.zip -d /tmp/
echo "copy /www to /jffs/merlin-web"
cp -r /www /jffs/merlin-web
echo "override /jffs/merlin-web with downloaded files"
cp -r /tmp/merlin-web/* /jffs/merlin-web
if [ ! -f "/jffs/scripts/init-start" ]
then
  echo "create /jffs/scripts/init-start and add startup cmd"
  echo "!/bin/sh" >> /jffs/scripts/init-start
  echo "mount --bind /jffs/merlin-web /www" >> /jffs/scripts/init-start
  chmod 777 /jffs/scripts/init-start
else
  echo "add startup cmd into /jffs/scripts/init-start"
  echo "mount --bind /jffs/merlin-web /www" >> /jffs/scripts/init-start
fi