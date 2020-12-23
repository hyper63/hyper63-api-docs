const sh = require('shelljs')

const $ = sh.exec

sh.cp('~/hyper63/projects/atlas/swagger.yml', './public/swagger.yml')

