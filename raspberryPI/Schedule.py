import multiprocessing
from datetime import *
import time
from raspberryPI.Valve import Valve
from datetime import datetime as dt
import multiprocessing

class Schedule():
    def __init__(self):
        self.sunday = False
        self.monday = False
        self.tuesday = False
        self.wednesday = False
        self.thursday = False
        self.friday = False
        self.saturday = False
        self.hour = 0
        self.minute = 0
        self.valve1 = Valve(14)
        self.valve2 = Valve(15)
        self.valve3 = Valve(18)
        self.valve4 = Valve(23)
        self.valve5 = Valve(24)
        self.valve6 = Valve(25)
        self.valve7 = Valve(8)
        self.valve8 = Valve(7)

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

    def setDay(self,dayNumber,bool):
        if (dayNumber == 0):
            if(bool == 1): self.sunday = True
            else: self.sunday = False
        elif (dayNumber == 1):
            if (bool == 1):
                self.monday = True
            else:
                self.monday = False
        elif (dayNumber == 2):
            if (bool == 1):
                self.tuesday = True
            else:
                self.tuesday = False
        elif (dayNumber == 3):
            if (bool == 1):
                self.wednesday = True
            else:
                self.wednesday = False
        elif (dayNumber == 4):
            if (bool == 1):
                self.thursday = True
            else:
                self.thursday = False
        elif (dayNumber == 5):
            if (bool == 1):
                self.friday = True
            else:
                self.friday = False
        elif (dayNumber == 6):
            if (bool == 1):
                self.saturday = True
            else:
                self.saturday = False


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

    def getZoneDuration(self,zone):
        if(zone == 1) : return self.valve1.duration
        elif(zone == 2) : return self.valve2.duration
        elif (zone == 3): return self.valve3.duration
        elif (zone == 4): return self.valve4.duration
        elif (zone == 5): return self.valve5.duration
        elif (zone == 6): return self.valve6.duration
        elif (zone == 7): return self.valve7.duration
        elif (zone == 8): return self.valve8.duration

    def setZoneDuration(self,zone,duration):
        if(zone == 1) : self.valve1.duration = duration
        elif(zone == 2) : self.valve2.duration = duration
        elif (zone == 3): self.valve3.duration =  duration
        elif (zone == 4): self.valve4.duration = duration
        elif (zone == 5): self.valve5.duration =  duration
        elif (zone == 6): self.valve6.duration =  duration
        elif (zone == 7): self.valve7.duration = duration
        elif (zone == 8): self.valve8.duration = duration

    def getZoneBool(self,zone):
        if(zone == 1) : return self.valve1.setOn
        elif(zone == 2) : return self.valve2.setOn
        elif (zone == 3): return self.valve3.setOn
        elif (zone == 4): return self.valve4.setOn
        elif (zone == 5): return self.valve5.setOn
        elif (zone == 6): return self.valve6.setOn
        elif (zone == 7): return self.valve7.setOn
        elif (zone == 8): return self.valve8.setOn

    def setZoneBool(self,zone,bool):
        if (zone == 1):
            if(bool == 1): self.valve1.setOn = True
            else: self.valve1.setOn = False
        elif (zone == 2):
            if (bool == 1):
                self.valve2.setOn = True
            else:
                self.valve2.setOn = False
        elif (zone == 3):
            if (bool == 1):
                self.valve3.setOn = True
            else:
                self.valve3.setOn = False
        elif (zone == 4):
            if (bool == 1):
                self.valve4.setOn = True
            else:
                self.valve4.setOn = False
        elif (zone == 5):
            if (bool == 1):
                self.valve5.setOn = True
            else:
                self.valve5.setOn = False
        elif (zone == 6):
            if (bool == 1):
                self.valve6.setOn = True
            else:
                self.valve6.setOn = False
        elif (zone == 7):
            if (bool == 1):
                self.valve7.setOn = True
            else:
                self.valve7.setOn = False
        elif (zone == 8):
            if (bool == 1):
                self.valve8.setOn = True
            else:
                self.valve8.setOn = False

    def runDaySchedule(self,day):
        if(day == 0 and self.sunday == True):
            self.runSchedule()
        elif(day == 1 and self.monday == True):
            self.runSchedule()
        elif(day == 2 and self.tuesday == True):
            self.runSchedule()
        elif(day == 3 and self.wednesday == True):
            self.runSchedule()
        elif(day == 4 and self.thursday == True):
            self.runSchedule()
        elif(day == 5 and self.friday == True):
            self.runSchedule()
        elif(day == 6 and self.saturday == True):
            self.runSchedule()

    def runSchedule(self):
        if(self.valve1.setOn == True):
            self.valve1.on()
            time.sleep(self.valve1.duration * 60)
            self.valve1.off()
        if (self.valve2.setOn == True):
            self.valve2.on()
            time.sleep(self.valve2.duration * 60)
            self.valve2.off()
        if (self.valve3.setOn == True):
            self.valve3.on()
            time.sleep(self.valve3.duration * 60)
            self.valve3.off()
        if (self.valve4.setOn == True):
            self.valve4.on()
            time.sleep(self.valve4.duration * 60)
            self.valve4.off()
        if(self.valve5.setOn == True):
            self.valve5.on()
            time.sleep(self.valve5.duration * 60)
            self.valve5.off()
        if (self.valve6.setOn == True):
            self.valve6.on()
            time.sleep(self.valve6.duration * 60)
            self.valve6.off()
        if (self.valve7.setOn == True):
            self.valve7.on()
            time.sleep(self.valve7.duration * 60)
            self.valve7.off()
        if (self.valve8.setOn == True):
            self.valve8.on()
            time.sleep(self.valve8.duration * 60)
            self.valve8.off()


