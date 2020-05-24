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

@app.route('/turn_on/')
def turnOn():
    mySchedule.valve1.on()
    return ''

@app.route('/turn_off/')
def turnOff():
    mySchedule.valve1.off()
    return ''

@app.route('/is_day_on/<int:dayOfWeek>')
def isDayOn(dayOfWeek):
    return jsonify(isValveOn=mySchedule.isDayOn(dayOfWeek))
