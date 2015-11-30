import BaseHTTPServer
import SimpleHTTPServer
import time
from os import curdir

FILE = 'index.html'
HOST_NAME = 'localhost'
PORT_NUMBER = 8000

class Handler(SimpleHTTPServer.SimpleHTTPRequestHandler):

    def do_GET(self):
        if self.path=="/":
            self.path += FILE

        try:
            sendReply = False
            if self.path.endswith(".html"):
            	mimetype='text/html'
            	sendReply = True
            if self.path.endswith(".jpg"):
            	mimetype='image/jpg'
            	sendReply = True
            if self.path.endswith(".png"):
            	mimetype='image/png'
            	sendReply = True
            if self.path.endswith(".ico"):
            	mimetype='image/x-icon'
            	sendReply = True
            if self.path.endswith(".js"):
            	mimetype='application/javascript'
            	sendReply = True
            if self.path.endswith(".css"):
            	mimetype='text/css'
            	sendReply = True

            if sendReply == True:
                f = open( curdir + self.path )
                self.send_response(200)
                self.send_header('Content-type', mimetype)
                self.end_headers()
                self.wfile.write(f.read())
                f.close()
                return

        except IOError:
            self.send_error(404,'File Not Found: %s' % self.path)

def start_server():

    server = BaseHTTPServer.HTTPServer(('localhost', PORT_NUMBER), Handler)
    print time.asctime(), "Server Starts - %s:%s" % (HOST_NAME, PORT_NUMBER)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass

    server.server_close()

    print time.asctime(), "Server Stops - %s:%s" % (HOST_NAME, PORT_NUMBER)

if __name__ == "__main__":
    start_server()
