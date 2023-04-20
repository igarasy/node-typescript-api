//this file will initialize the server for all functional tests
import { SetupServer } from '@src/server'
import supertest from 'supertest'

beforeAll(() => {
  const server = new SetupServer()
  server.init()

  //this will set globally this server in jest
  global.testRequest = supertest(server.getApp())
})
