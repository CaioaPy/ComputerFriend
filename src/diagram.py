# this file gonna have most of the thing for now, like functions and ideas. as i learn more i'm gonna separate the things in a very better way :)
from tkinter import *
def home():
  action = input("What do you want to do, " + username + "?")
username = input("Hello, how would you like me to call you?")

print("Hello " + username + ", welcome to Computer Friend\nas you can imagine I'm a friend inside your computer")

root = Tk()
root.title("Computer Friend")

#labels
l1 = Label(root, text="Welcome!")

#buttons
helloButton = Button(root, text= "hello!")


#grid
l1.grid(row=0, column=1)

root.mainloop()