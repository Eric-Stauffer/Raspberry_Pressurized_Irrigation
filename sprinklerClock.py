from Valve import *
# from gpiozero import *
# import datetime
# from calendar import *
# import time
from flask import Flask

valve1 = Valve(1)
app = Flask(__name__)

@app.route('/')
def home():
    return "<button onClick=turnOn()>turn on!</button> <button onClick=turnOff()>turn off!</button>"



def turnOn():
    valve1.on()

def turnOff():
    valve1.off()


if __name__ == "__main__":
   app.run(host='0.0.0.0', port=80, debug=True)



