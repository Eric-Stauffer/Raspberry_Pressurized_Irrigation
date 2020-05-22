from datetime import *

class Schedule():
    def __init__(self):
        self.monday = False
        self.tuesday = True
        self.wednesday = False
        self.thursday = True
        self.friday = True
        self.saturday = False
        self.sunday = True
        self.hour = 12
        self.duration = 0
        self.minute = 0

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


