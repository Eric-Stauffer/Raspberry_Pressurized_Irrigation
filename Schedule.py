from datetime import *

class Schedule():
    def __init__(self):
        self.monday = False
        self.tuesday = False
        self.wednesday = False
        self.thursday = False
        self.friday = False
        self.saturday = False
        self.sunday = False
        self.hour = 12
        self.duration = 0
        self.minute = 0

    def isDayOn(self,dayNumber):
        if (dayNumber == 0):
            return self.monday
        elif (dayNumber == 1):
            return self.tuesday
        elif (dayNumber == 2):
            return self.wednesday
        elif (dayNumber == 3):
            return self.thursday
        elif (dayNumber == 4):
            return self.friday
        elif (dayNumber == 5):
            return self.saturday
        elif (dayNumber == 6):
            return self.sunday

    def toggle(self,dayNumber):
        if (dayNumber == 0):
            self.monday = not self.monday
        elif (dayNumber == 1):
            self.tuesday = not self.tuesday
        elif (dayNumber == 2):
            self.wednesday = not self.wednesday
        elif (dayNumber == 3):
            self.thursday = not self.thursday
        elif (dayNumber == 4):
            self.friday = not self.friday
        elif (dayNumber == 5):
            self.saturday = not self.saturday
        elif (dayNumber == 6):
            self.sunday = not self.sunday


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
