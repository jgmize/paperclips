#!/bin/sh

wget -m http://www.decisionproblem.com/paperclips/
mkdir -p src
mv www.decisionproblem.com/paperclips/* src
rm -rf www.decisionproblem.com
find . -name '*\?*' | while read -r path ; do
    mv "$path" "${path%\?*}"
done
