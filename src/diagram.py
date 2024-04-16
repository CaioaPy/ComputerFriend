# this file gonna have most of the thing for now, like functions and ideas. as i learn more i'm gonna separate the things in a very better way :)
from tkinter import *

root = Tk()
root.title("Computer Friend")

e = Entry(root, width=40, borderwidth=3)

usernamen = 0
while usernamen == 0:
  username = input("Hello, how would you like me to call you?")
  usernamen + 1

print("Hello " + username + ", welcome to Computer Friend\nas you can imagine I'm a friend inside your computer")

#labels
l1 = Label(root, text=f"Welcome, {username}!")
placeholder = Label(root, text=" ")

#buttons
ConfirmButton = Button(root, text= "Confirm")

#grid
l1.grid(row=0, column=1)
e.grid(row=1, column=1)
placeholder.grid(row=1, column=0)
ConfirmButton.grid(row=2, column=1, padx=30, pady=15)

root.mainloop()

#functions
def home():
  e.insert("What do you want talk about, " + username + "?")