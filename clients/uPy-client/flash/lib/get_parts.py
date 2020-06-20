import requests
import json

url = 'http://us-central1-shelf-io.cloudfunctions.net/api/parts'


def getParts():
    res = requests.get(url)
    message = json.loads(res[-1])
    return message


def updateParts(id, quantity):
    message = "id={}&quantity={}".format(id, quantity)
    res = requests.put(url, data=message)
    pass


if __name__ == "__main__":
    getParts()
    updateParts()
