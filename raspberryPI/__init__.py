from flask import Flask, jsonify
from raspberryPI.Schedule import Schedule
import threading
from datetime import datetime as dt
import time



mySchedule = Schedule()


def runMySchedule():
    while True:
        print(mySchedule.hour, mySchedule.minute, mySchedule.thursday, mySchedule.valve1.setOn)
        if (int(dt.now().strftime("%-H")) == mySchedule.hour and int(dt.now().strftime("%-M")) == mySchedule.minute):
            mySchedule.runDaySchedule(int(dt.now().strftime("%w")))
            time.sleep(2)
        time.sleep(59)

clock = threading.Thread(target=runMySchedule)
app = Flask(__name__)
from raspberryPI import routes





