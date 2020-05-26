from flask import Flask, jsonify
from raspberryPI.Schedule import Schedule



mySchedule = Schedule()
app = Flask(__name__)
from raspberryPI import routes





