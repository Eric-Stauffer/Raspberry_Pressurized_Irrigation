

from guizero import App, Text, TextBox, PushButton, Slider

def say_my_name():
    welcomeMessage.value = myName.value

def change_text_size(slider_value):
    welcomeMessage.size = slider_value

app = App(title="Raspberry Pressurized Irrigation")

welcomeMessage = Text(app,text="Change the way you water",size=40,font="Times New Roman", color= "#259B39" )
myName = TextBox(app)
updateText = PushButton(app, command=say_my_name, text="Display my Name")
text_size = Slider(app, command=change_text_size, start=10, end=80)


app.display()