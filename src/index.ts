import { Hono } from 'hono'

export type Env = {
  DB: D1Database;
}

const app = new Hono<{Bindings:Env}>();

app.get('/', (c) => {
  return c.text(`Hello Hono🔥❤️‍🔥!`)
})

export default app
