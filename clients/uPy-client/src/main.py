# pylint: disable=unresolved-import
import test
import display
from m5stack import lcd
import socket
import json

import requests
import curl

lcd.println("bum")

# url = 'http://192.168.86.21:3000/'
# headers = {'content-type': 'application/json'}

# res = requests.get(url)
# message = json.loads(res[-1])
# lcd.println(message['hello'])

# message = "hello={}".format(message['hello'])
# res = requests.post(url, params=message, headers=headers)


# hostname = '192.168.86.21'
# port = 3000
# path = '/'
# sock = socket.socket()
# addr = socket.getaddrinfo(hostname, port)
# sock.connect(addr[0][-1])


# def send_header(header):
# #   lcd.println(str(header))
#   sock.write(header + '\r\n')
# send_header(b'GET {} HTTP/1.1'.format(path))
# send_header(b'Host: {}'.format(hostname))
# send_header(b'')

# header = sock.readline()[:-2]
# assert header == b'HTTP/1.1 200 OK', header
# # lcd.println('socket connected')
# length = None

# while header:
#     header = sock.readline()[:-2]
#     # lcd.println(str(header))
#     if not header:
#         break

#     header, value = header.split(b': ')
#     header = header.lower()
#     if header == b'content-type':
#         assert value == b'application/json; charset=utf-8'
#     elif header == b'content-length':
#         length = int(value)

# # lcd.println(length)
# assert length
# data = sock.read(length).decode('utf-8')
# # lcd.println(data)
# message = json.loads(data)
# lcd.println(message['hello'])
# sock.close()

# # message = "hello={}".format(message['hello'])
# message = json.dumps(message)

# lcd.println(message)
# sock = socket.socket()
# addr = socket.getaddrinfo(hostname, port)
# sock.connect(addr[0][-1])

# send_header(b'POST {} HTTP/1.1'.format(path))
# send_header(b'Host: {}'.format(hostname))
# send_header(b'Content-Type: application/json')
# send_header(b'Content-Length: {}'.format(len(message)))
# send_header(b'{}'.format(message))
# send_header(b'')
# header = sock.readline()[:-2]
# assert header == b'HTTP/1.1 200 OK', header
# sock.close()

# import apps.scale

# scales = apps.scale.Scales(d_out=21, pd_sck=22)
# scales.tare()
# val = scales.stable_value()
# lcd.print(abs(int(val/600)))
# val = scales.stable_value()
# lcd.print(abs(int(val/600)))
# val = scales.stable_value()
# lcd.print(abs(int(val/600)))
# val = scales.stable_value()
# lcd.print(abs(int(val/600)))
# scales.power_off()
