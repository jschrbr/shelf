from m5stack import lcd
from scales import Scales
import views
import time
import math
import api

partId = '15mOoyugTBBg6ACNhYBI'
massFactor = 4500
scales = Scales(d_out=22, pd_sck=21)


def getCount():
    val = scales.stable_value()
    val = math.floor(val/massFactor)
    val = str(max(0, val))
    return val


views.get_partBtn()

prev_val = getCount()
scales.tare()
prev_val = getCount()

while True:
    val = getCount()
    lcd.text(lcd.CENTER, 0, val)
    if (val != prev_val):
        time.sleep(1.2)
        if (val != prev_val):
            prev_val = val
            api.updateParts(partId, val)
            views.get_partBtn()

    time.sleep(2)
