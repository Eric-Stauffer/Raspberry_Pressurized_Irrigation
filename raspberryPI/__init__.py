from flask import Flask, jsonify
from raspberryPI.Valve import Valve



valve1 = Valve(5)
app = Flask(__name__)
from raspberryPI import routes





