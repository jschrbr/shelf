from m5stack import lcd, buttonB
import api

partName = '912-A2 M3x50'


def load_screen():
    lcd.clear()
    lcd.font(lcd.FONT_Ubuntu)
    lcd.text(lcd.CENTER, lcd.CENTER, "Loading...")
    lcd.font(lcd.FONT_Default)


def get_partBtn():
    load_screen()
    parts = api.getParts()
    lcd.clear()
    for part in parts:
        if part['name'] == partName:
            partCount = part["quantity"]
            message = "{}-off {}".format(part['quantity'], part['name'])
            lcd.text(lcd.CENTER, lcd.CENTER, message)
    lcd.text(lcd.CENTER, lcd.BOTTOM, "Hold to refresh")


buttonB.releasedFor(1.5, get_partBtn)
