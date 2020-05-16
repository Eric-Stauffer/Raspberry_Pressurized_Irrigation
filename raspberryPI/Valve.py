from gpiozero import *
from raspberryPI.Schedule import *
import time


class Valve(DigitalOutputDevice):

    def __init__(self, gpioNum):
        super(Valve, self).__init__(gpioNum)
        self.schedule = Schedule()


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

    def getDuration(self):
        return self.schedule.duration

    def getHour(self):
        return self.schedule.getHour()

    def quickRun(self,length):
        self.on()
        time.sleep(length)
        self.off()

    def quickRun(self):
        self.on()
        time.sleep(180)
        self.off()
