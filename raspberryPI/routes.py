from raspberryPI import app
from flask import render_template, url_for, jsonify
from raspberryPI import Valve
from raspberryPI import mySchedule

@app.route('/home/')
@app.route('/')
def home():
    return render_template('home.html',title="home")

@app.route('/zones/')
def zones():
    return render_template('zones.html', title="zones")

@app.route('/toggle/<int:zone>')
def turnOn(zone):
    if (zone == 1):
        mySchedule.valve1.toggle()
        mySchedule.valve2.off()
        mySchedule.valve3.off()
        mySchedule.valve4.off()
        mySchedule.valve5.off()
        mySchedule.valve6.off()
        mySchedule.valve7.off()
        mySchedule.valve8.off()
    elif (zone == 2):
        mySchedule.valve2.toggle()
        mySchedule.valve1.off()
        mySchedule.valve3.off()
        mySchedule.valve4.off()
        mySchedule.valve5.off()
        mySchedule.valve6.off()
        mySchedule.valve7.off()
        mySchedule.valve8.off()
    elif (zone == 3):
        mySchedule.valve3.toggle()
        mySchedule.valve1.off()
        mySchedule.valve2.off()
        mySchedule.valve4.off()
        mySchedule.valve5.off()
        mySchedule.valve6.off()
        mySchedule.valve7.off()
        mySchedule.valve8.off()
    elif (zone == 4):
        mySchedule.valve4.toggle()
        mySchedule.valve1.off()
        mySchedule.valve2.off()
        mySchedule.valve3.off()
        mySchedule.valve5.off()
        mySchedule.valve6.off()
        mySchedule.valve7.off()
        mySchedule.valve8.off()
    elif (zone == 5):
        mySchedule.valve5.toggle()
        mySchedule.valve1.off()
        mySchedule.valve2.off()
        mySchedule.valve3.off()
        mySchedule.valve4.off()
        mySchedule.valve6.off()
        mySchedule.valve7.off()
        mySchedule.valve8.off()
    elif (zone == 6):
        mySchedule.valve6.toggle()
        mySchedule.valve1.off()
        mySchedule.valve2.off()
        mySchedule.valve3.off()
        mySchedule.valve4.off()
        mySchedule.valve5.off()
        mySchedule.valve7.off()
        mySchedule.valve8.off()
    elif (zone == 7):
        mySchedule.valve7.toggle()
        mySchedule.valve1.off()
        mySchedule.valve2.off()
        mySchedule.valve3.off()
        mySchedule.valve4.off()
        mySchedule.valve5.off()
        mySchedule.valve6.off()
        mySchedule.valve8.off()
    elif (zone == 8):
        mySchedule.valve8.toggle()
        mySchedule.valve1.off()
        mySchedule.valve2.off()
        mySchedule.valve3.off()
        mySchedule.valve4.off()
        mySchedule.valve5.off()
        mySchedule.valve6.off()
        mySchedule.valve7.off()
    return ''

@app.route('/is_day_on/<int:dayOfWeek>')
def isDayOn(dayOfWeek):
    return jsonify(isValveOn=mySchedule.isDayOn(dayOfWeek))
@app.route('/isValveOn/')
def isValveOn():
    return jsonify(valve1=mySchedule.valve1.is_lit,
                   valve2=mySchedule.valve2.is_lit,
                   valve3=mySchedule.valve3.is_lit,
                   valve4=mySchedule.valve4.is_lit,
                   valve5=mySchedule.valve5.is_lit,
                   valve6=mySchedule.valve6.is_lit,
                   valve7=mySchedule.valve7.is_lit,
                   valve8=mySchedule.valve8.is_lit,
                   )