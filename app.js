const Koa = require('koa')
const convert = require('koa-convert')
const serve = require("koa-static")
const Router = require('koa-router')
const views = require('koa-views')
const path = require('path')
const config = require('config')
const logger = require('koa-logger')

const app = new Koa()

app.use(logger())

const router = new Router()

// Static file path
app.use(convert(serve(path.join(__dirname, 'public'))))

app.use(views(path.join(__dirname, 'views'), { extension: 'pug' }))

router.get('/', async (ctx, next) => {
	await ctx.render('index')
})

app.use(router.routes())

app.listen(config.server.port, () => {
	console.log("server starting on " + config.server.port)
})
