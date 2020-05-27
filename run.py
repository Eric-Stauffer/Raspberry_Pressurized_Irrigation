from raspberryPI import app, clock

if __name__ == "__main__":
    clock.start()
    app.run(host='0.0.0.0', port=80, debug=True)
