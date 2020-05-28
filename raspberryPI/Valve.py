from gpiozero import *
from raspberryPI.Schedule import *
import time


class Valve(LED):

    def __init__(self, gpioNum,duration=None,setOn=False):
        super(Valve, self).__init__(gpioNum)
        if (duration == None):
            self.duration = 0
        else:
            self.duration = duration
        if(setOn == False):
            self.setOn = False
        else:
            self.setOn = True



    def changeTime(self,newHour,newMinute):
        self.schedule.setHour(newHour)
        self.schedule.setMinute(newMinute)

    def changeDuration(self,newDuration):
        self.schedule.setDuration(newDuration)

    def toggleDay(self,dayNumber):
        self.schedule.toggle(dayNumber)

    def isOn(self,dayNumber,hour,minute):
        if(self.schedule.isDayOn(dayNumber) and self.schedule.isTimeRight(hour,minute)):
            return True

    def getDayBoolean(self,dayNumber):
        return self.schedule.isDayOn(dayNumber)


    def getHour(self):
        return self.schedule.getHour()

    def quickRun(self,length):
        self.on()
        time.sleep(length)
        self.off()


