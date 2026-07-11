from livereload import Server

server = Server()

server.watch("main.py")
server.watch("templates/*.html")
server.watch("static/css/*.css")
server.watch("static/js/*.js")

server.serve(port=5500)
