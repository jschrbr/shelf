# boot.py - - runs on boot-up
# This file is executed on every boot (including wake-boot from deepsleep)
import sys
from network import mDNS, telnet, STA_IF, WLAN
from machine import idle

sys.path[1] = '/flash/lib'

mdns = mDNS()
wlan = WLAN(STA_IF)
wlan.active(True)

wlan.connect("Derp", "P0pp311@")
while not wlan.isconnected():
    idle()
mdns.start('m5', 'MicroPython ESP32')
telnet.start(user='repl', password='DevPw')
