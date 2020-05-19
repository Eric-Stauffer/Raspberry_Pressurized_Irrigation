from raspberryPI import app
from flask import render_template, url_for
from raspberryPI import Valve
from raspberryPI import valve1

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/turn_on/')
def turnOn():
    valve1.on()
    return render_template('home.html')

@app.route('/turn_off/')
def turnOff():
    valve1.off()
    return render_template('home.html')