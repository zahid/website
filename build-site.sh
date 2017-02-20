#!/bin/bash

if [ -n "$(git status --porcelain)" ]; then
    echo "Make sure you commit your changes first!"
    exit 1;
else
    echo "Building site"
    npm run build
    mv build/ docs/
    git add docs/
    git commit -am "Creating new build for version $(git rev-parse --verify HEAD)"

    echo "Deploying site to Github"
    git push origin master
fi
