from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class EmergencyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        emergency_contacts = {
            "hotlines": [
                {"name": "Crisis Hotline", "number": "1-800-273-8255"},
                {"name": "Emergency Services", "number": "911"},
                {"name": "Support Text Line", "number": "741741"}
            ],
            "resources": [
                {
                    "name": "Immediate Help Guide",
                    "url": "/resources/immediate-help"
                },
                {
                    "name": "Crisis Centers",
                    "url": "/resources/crisis-centers"
                }
            ]
        }
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(emergency_contacts).encode())

def run_server(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, EmergencyHandler)
    print(f'Starting emergency services server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()