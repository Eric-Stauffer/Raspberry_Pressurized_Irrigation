from raspberryPI import app
from flask import render_template, url_for, jsonify
from raspberryPI import Valve
from raspberryPI import valve1

@app.route('/')
def home():
    return render_template('home.html',title="home")

@app.route('/turn_on/')
def turnOn():
    valve1.on()
    return ''

@app.route('/turn_off/')
def turnOff():
    valve1.off()
    return ''

@app.route('/is_day_on/<int:dayOfWeek>')
def isDayOn(dayOfWeek):
    return jsonify(isValveOn=valve1.getDayBoolean(dayOfWeek))
