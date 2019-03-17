#!/usr/bin/env sh

echo "准备node_modules"

set -x
npm install yarn --registry=https://registry.npm.taobao.org
set +x

yarn --version

set -x
yarn install --registry=https://registry.npm.taobao.org
set +x