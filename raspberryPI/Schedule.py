from datetime import *
from raspberryPI.Valve import Valve

class Schedule():
    def __init__(self):
        self.sunday = False
        self.monday = True
        self.tuesday = True
        self.wednesday = True
        self.thursday = True
        self.friday = True
        self.saturday = False
        self.hour = 12
        self.minute = 0
        self.valve1 = Valve(1)
        self.valve2 = Valve(2)
        self.valve3 = Valve(3)
        self.valve4 = Valve(4)
        self.valve5 = Valve(5)
        self.valve6 = Valve(6)
        self.valve7 = Valve(7)
        self.valve8 = Valve(8)

    def isDayOn(self,dayNumber):
        if (dayNumber == 0):
            return self.sunday
        elif (dayNumber == 1):
            return self.monday
        elif (dayNumber == 2):
            return self.tuesday
        elif (dayNumber == 3):
            return self.wednesday
        elif (dayNumber == 4):
            return self.thursday
        elif (dayNumber == 5):
            return self.friday
        elif (dayNumber == 6):
            return self.saturday


    def toggle(self,dayNumber):
        if (dayNumber == 0):
            self.sunday = not self.sunday
        elif (dayNumber == 1):
            self.monday = not self.monday
        elif (dayNumber == 2):
            self.tuesday = not self.tuesday
        elif (dayNumber == 3):
            self.wednesday = not self.wednesday
        elif (dayNumber == 4):
            self.thursday = not self.thursday
        elif (dayNumber == 5):
            self.friday = not self.friday
        elif (dayNumber == 6):
            self.saturday = not self.saturday



    def setHour(self,newHour):
        self.hour = newHour
    def getHour(self):
        return self.hour

    def setMinute(self,newMinute):
        self.minute = newMinute

    def getMinute(self):
        return self.minute

    def setDuration(self,newDuration):
        self.duration = newDuration * 60



    def isTimeRight(self,hour,minute):
        if (hour == self.hour and minute == self.minute):
            return True


