import SwaggerUI from 'swagger-ui'

SwaggerUI({
  url: window.location.origin + '/swagger.yml',
  dom_id: '#swagger'
})

