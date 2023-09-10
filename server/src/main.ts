//require('dotenv').config();
//const SwaggerUI = require('swagger-ui-express');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { CourseCommanderModule } from '@modules/courseCommander.module';
import { BaseModule } from './base';
import { ValidationPipe } from '@nestjs/common';

// start the develop branch
// starting the server branch
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ORIGIN,
  });

  const appDescreption = `
  ## This is the documentation for the Residence Management API.

  The API contains several endpoints:
  
  You can view all the endpoints right here, switch to a specific endpoint
  using the topbar menu, or switch the URL.

  ### Course Commander 
  see [/api/Course Commander](#/Course%20Commander)

  The Course Commander API contains those methods.

  ### Base
  see [/api/Base](#/Base)

  The Base API contains those methods.
  `

  const options = new DocumentBuilder()
    .setTitle('Residence Management')
    .setDescription(appDescreption)
    .build();
  const optionsOne = new DocumentBuilder().setTitle('Course Commander').build();
  const optionsTwo = new DocumentBuilder().setTitle('Base').build();
  
  const documentOne = SwaggerModule.createDocument(app, optionsOne, {
    include: [CourseCommanderModule],
  });
  
  const documentTwo: OpenAPIObject = SwaggerModule.createDocument(app, optionsTwo, {
    include: [BaseModule],
  })
  
  const appDocument = SwaggerModule.createDocument(app, {
    ...options,
    tags: [
      {
        name: 'Course Commander',
        externalDocs: {
          url: 'api/courseCommander',
          description: 'The Course Commander API'
        }
      },
      {
        name: 'Base',
        externalDocs: {
          url: 'api/base',
          description: 'The Base API'
        }
      }
    ]
  });

  const appOptions = {
    customCss: `
      .swagger-ui .info hgroup.main a {
        font-size: 1.2em
      }

      .swagger-ui .info .title {
        color: #3b4151;
        font-family: sans-serif;
        font-size: 36px;
        font-weight: 900;
        margin: 0
      }
      
      .swagger-ui .info .title small {
        background: #7d8492;
        border-radius: 57px;
        display: inline-block;
        font-size: 10px;
        margin: 0 0 0 10px;
        padding: 4px 8px;
        position: relative;
        top: 5px;
        vertical-align: super
      }
    `,
    customJsStr: '\n\
      window.onchange = window.onload = function() {\n\
        const CaseInsensitiveFilterPlugin = function (system) {\n\
          return {\n\
            fn: {\n\
              opsFilter: (taggedOps, phrase) => {\n\
                const filtered = taggedOps.filter((tagObj, tag) => tag.toLowerCase().indexOf(phrase.toLowerCase()) !== -1);\n\
                console.log(filtered);\n\
                return filtered;\n\
              }\n\
            }\n\
          }\n\
        };\n\
        //const HideInfoUrlPartsPlugin = () => {\n\
        //  return {\n\
        //    wrapComponents: {\n\
        //      InfoUrl: () => () => null\n\
        //    }\n\
        //  }\n\
        //}\n\
        \n\
        let showModels;\n\
        if (document.location.search.includes("?urls.primaryName=Main%20Menu")) {\n\
          showModels = -1;\n\
        }\n\
        else {\n\
          showModels = 1;\n\
        }\n\
        \n\
        let configObject = JSON.parse(`{"urls":[{"url":"/api-yaml","name":"Main Menu"}, {"url":"/api/courseCommander-yaml","name":"Course Commander API"}, {"url":"/api/base-yaml","name":"Base API"}], "docExpansion": "list", "filter": true, "defaultModelsExpandDepth": ${showModels}, "deepLinking": true}`);\n\
        \n\
        configObject.dom_id = "#swagger-ui";\n\
        configObject.presets = [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset];\n\
        configObject.plugins = [SwaggerUIBundle.plugins.DownloadUrl, CaseInsensitiveFilterPlugin, /*HideInfoUrlPartsPlugin*/];\n\
        configObject.layout = "StandaloneLayout";\n\
        \n\
        const ui = SwaggerUIBundle(configObject);\n\
        \n\
        window.ui = ui\n\
      }\n\
    ',
    explorer: true,
    customSiteTitle: 'Residence Management',
    // swaggerOptions: {
    //   urls: [
    //     {
    //       url: 'http://localhost:5000/api-yaml',
    //       name: 'Main Menu'
    //     },
    //     {
    //       url: 'http://localhost:5000/api/courseCommander-yaml',
    //       name: 'Course Commander API'
    //     },
    //     {
    //       url: 'http://localhost:5000/api/base-yaml',
    //       name: 'Base API'
    //     }
    //   ],
    //   "urls.primaryName": "Main Menu",
    //   docExpansion: 'none',
    //   filter: true,
    //   deepLinking: true,
    //   defaultModelsExpandDepth: 1,
    // }
  }

  SwaggerModule.setup('api', app, appDocument, appOptions);
  SwaggerModule.setup('api/courseCommander', app, documentOne);
  SwaggerModule.setup('api/base', app, documentTwo);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }))

  await app.listen(process.env.PORT);
}
bootstrap();
