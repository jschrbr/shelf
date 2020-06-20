from m5stack import lcd
import buttons
import time
import math
from scales import Scales
import get_parts

partId = '15mOoyugTBBg6ACNhYBI'


buttons.get_partBtn()

scales = Scales(d_out=22, pd_sck=21)


def getCount():
    val = scales.stable_value()
    val = math.floor(val/4500)
    val = str(max(0, val))
    return val


prev_val = getCount()
scales.tare()
prev_val = getCount()

while True:
    val = getCount()
    lcd.text(lcd.CENTER, 0, val)
    if (val != prev_val):
        time.sleep(2)
        if (val != prev_val):
            prev_val = val
            get_parts.updateParts(partId, val)
            buttons.get_partBtn()

    time.sleep(2)

scales.power_off()
