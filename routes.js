const routes = require('next-routes')
                                            
module.exports  =  routes()
.add('index', '/')
.add('about', '/ueberuns')
.add('contact', '/kontakt')
.add('gallery', '/foto')
.add('notfound', '/*')
.add('impressum', '/impressum')