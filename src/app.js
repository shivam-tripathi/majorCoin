#!/usr/bin/env node
import HttpServer from './httpserver';

let httpServer = new HttpServer();
httpServer.run();