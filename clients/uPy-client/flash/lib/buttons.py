from m5stack import lcd, buttonA, buttonB, buttonC
import get_parts

partName = '912-A2 M3x50'


def load_screen():
    lcd.clear()
    lcd.font(lcd.FONT_Ubuntu)
    lcd.text(lcd.CENTER, lcd.CENTER, "Loading...")
    lcd.font(lcd.FONT_Default)


def get_partBtn():
    load_screen()
    parts = get_parts.getParts()
    lcd.clear()
    for part in parts:
        if part['name'] == partName:
            partCount = part["quantity"]
            message = "{}-off {}".format(part['quantity'], part['name'])
            lcd.text(lcd.CENTER, lcd.CENTER, message)
    lcd.text(lcd.CENTER, lcd.BOTTOM, "Hold to refresh")


# def add_partBtn():
#     load_screen()
#     parts = get_parts.getParts()
#     lcd.clear()
#     for part in parts:
#         if part['name'] == partName:
#             partCount = part["quantity"]
#     partCount += 1
#     get_parts.updateParts(partId, partCount)
#     get_partBtn()


# def sub_partBtn():
#     load_screen()
#     parts = get_parts.getParts()
#     lcd.clear()
#     for part in parts:
#         if part['name'] == partName:
#             partCount = part["quantity"]
#     partCount -= 1
#     get_parts.updateParts(partId, partCount)
#     get_partBtn()


buttonB.releasedFor(1.5, get_partBtn)
# buttonB.releasedFor(1.5, add_partBtn)
# buttonC.releasedFor(1.5, sub_partBtn)
