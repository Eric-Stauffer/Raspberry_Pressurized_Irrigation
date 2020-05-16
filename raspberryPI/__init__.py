from flask import Flask
from raspberryPI.Valve import Valve



valve1 = Valve(5)
app = Flask(__name__)
from raspberryPI import routes





