# this file gonna have most of the thing for now, like functions and ideas. as i learn more i'm gonna separate the things in a very better way :)
from tkinter import *

root = Tk()
root.title("Computer Friend")

username = input("Hello, how would you like me to call you?")

print("Hello " + username + ", welcome to Computer Friend\nas you can imagine I'm a friend inside your computer")

#labels
l1 = Label(root, text="Welcome!")
placeholder = Label(root, text=" ")

#buttons
helloButton = Button(root, text= "hello!")

#grid
l1.grid(row=0, column=1)
placeholder.grid(row=1, column=0)
helloButton.grid(row=2, column=1, padx=30, pady=15)

root.mainloop()

#functions
def home():
  action = input("What do you want to do, " + username + "?")