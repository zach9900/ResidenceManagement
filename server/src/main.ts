//require('dotenv').config();
//const SwaggerUI = require('swagger-ui-express');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { CourseCommanderModule } from '@modules/courseCommander.module';
import { BaseModule } from './base';
import { ValidationPipe } from '@nestjs/common';
import { CommanderModule } from './commander/mvc/commander.module';
import { FloorModule } from '@modules/floor.module';
import { HiltonModule } from '@modules/hilton.module';
import { ManagerModule } from './manager/mvc/manager.module';
import { RoomModule } from './room';
import { SoldierModule } from './soldier';

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
  const baseOpt = new DocumentBuilder().setTitle('Base').build();
  const commanderOpt = new DocumentBuilder().setTitle('Commander').build();
  const courseCommanderOpt = new DocumentBuilder().setTitle('Course Commander').build();
  const floorOpt = new DocumentBuilder().setTitle('Floor').build();
  const hiltonOpt = new DocumentBuilder().setTitle('Hilton').build();
  const managerOpt = new DocumentBuilder().setTitle('Manager').build();
  const roomOpt = new DocumentBuilder().setTitle('Room').build();
  const soldierOpt = new DocumentBuilder().setTitle('Soldier').build();
  
  const baseDoc = SwaggerModule.createDocument(app, baseOpt, {
    include: [BaseModule],
  });
  const commanderDoc = SwaggerModule.createDocument(app, commanderOpt, {
    include: [CommanderModule],
  });
  const courseCommanderDoc = SwaggerModule.createDocument(app, courseCommanderOpt, {
    include: [CourseCommanderModule],
  });
  const floorDoc = SwaggerModule.createDocument(app, floorOpt, {
    include: [FloorModule],
  });
  const hiltonDoc = SwaggerModule.createDocument(app, hiltonOpt, {
    include: [HiltonModule],
  });
  const managerDoc = SwaggerModule.createDocument(app, managerOpt, {
    include: [ManagerModule],
  });
  const roomDoc = SwaggerModule.createDocument(app, roomOpt, {
    include: [RoomModule],
  });
  const soldierDoc = SwaggerModule.createDocument(app, soldierOpt, {
    include: [SoldierModule],
  });
  
  const appDocument = SwaggerModule.createDocument(app, {
    ...options,
    tags: [
      {
        name: 'Base',
        externalDocs: {
          url: 'api/base',
          description: 'The Base API'
        }
      },
      {
        name: 'Commander',
        externalDocs: {
          url: 'api/commander',
          description: 'The Commander API'
        }
      },
      {
        name: 'Course Commander',
        externalDocs: {
          url: 'api/courseCommander',
          description: 'The Course Commander API'
        }
      },
      {
        name: 'Floor',
        externalDocs: {
          url: 'api/floor',
          description: 'The Floor API'
        }
      },
      {
        name: 'Hilton',
        externalDocs: {
          url: 'api/hilton',
          description: 'The Hilton API'
        }
      },
      {
        name: 'Manager',
        externalDocs: {
          url: 'api/manager',
          description: 'The Manager API'
        }
      },
      {
        name: 'Room',
        externalDocs: {
          url: 'api/room',
          description: 'The Room API'
        }
      },
      {
        name: 'Soldier',
        externalDocs: {
          url: 'api/soldier',
          description: 'The Soldier API'
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
      window.onpageshow = window.onload = function() {\n\
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
        let configObject = JSON.parse(`{"urls":[{"url":"/api-yaml","name":"Main Menu"}, {"url":"/api/base-yaml","name":"Base API"}, {"url":"/api/commander-yaml","name":"Commander API"}, {"url":"/api/courseCommander-yaml","name":"Course Commander API"}, {"url":"/api/floor-yaml","name":"Floor API"}, {"url":"/api/hilton-yaml","name":"Hilton API"}, {"url":"/api/manager-yaml","name":"Manager API"}, {"url":"/api/room-yaml","name":"Room API"}, {"url":"/api/soldier-yaml","name":"Soldier API"}], "docExpansion": "list", "filter": true, "defaultModelsExpandDepth": ${showModels}, "deepLinking": true}`);\n\
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
  SwaggerModule.setup('api/base', app, baseDoc);
  SwaggerModule.setup('api/commander', app, commanderDoc);
  SwaggerModule.setup('api/courseCommander', app, courseCommanderDoc);
  SwaggerModule.setup('api/floor', app, floorDoc);
  SwaggerModule.setup('api/hilton', app, hiltonDoc);
  SwaggerModule.setup('api/manager', app, managerDoc);
  SwaggerModule.setup('api/room', app, roomDoc);
  SwaggerModule.setup('api/soldier', app, soldierDoc);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }))

  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
