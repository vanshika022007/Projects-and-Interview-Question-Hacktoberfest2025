# /Library/Frameworks/Python.framework/Versions/3.12/bin/python3 rainbow_art.py

# Colorful flower pattern using turtle graphics

# from turtle import *
# import colorsys

# speed(0)
# bgcolor("Black")
# h = 0
# for i in range(16):
#     for j in range(18):
#         c = colorsys.hsv_to_rgb(h, 1, 1)
#         color(c)
#         h += 0.005
#         rt(90)
#         circle(150 - j * 6, 90)
#         lt(90)
#         circle(150 - j * 6, 90)
#         rt(180)
#     circle(40, 24)
# done()


# the code vs the design !!! yayyyyyy 

#  1. Colorful Spiral Heart

# from turtle import *
# import colorsys

# bgcolor("black")
# tracer(10)
# pensize(2)
# h = 0
# for i in range(200):
#     c = colorsys.hsv_to_rgb(h, 1, 1)
#     color(c)
#     h += 0.005
#     begin_fill()
#     circle(100, 60)
#     left(120)
#     circle(100, 60)
#     end_fill()
#     left(5)
# done()

# 🌸 2. Pastel Flower Bloom

# from turtle import *
# import colorsys

# bgcolor("black")
# speed(0)
# pensize(2)
# h = 0
# for i in range(36):
#     for j in range(6):
#         c = colorsys.hsv_to_rgb(h, 0.6, 1)
#         color(c)
#         h += 0.005
#         circle(60)
#         left(60)
#     right(10)
# done()

# 💫 4. Neon Infinity Loops

# from turtle import *
# import colorsys

# bgcolor("black")
# speed(0)
# pensize(2)
# h = 0
# for i in range(100):
#     c = colorsys.hsv_to_rgb(h, 1, 1)
#     color(c)
#     h += 0.01
#     circle(i, 180)
#     left(45)
# done()

# ✨ 5. Galaxy Flower Web

# from turtle import *
# import colorsys

# bgcolor("black")
# speed(0)
# pensize(1)
# h = 0
# for i in range(120):
#     c = colorsys.hsv_to_rgb(h, 1, 1)
#     color(c)
#     h += 0.008
#     circle(150)
#     left(30)
#     circle(150)
#     left(60)
#     circle(150)
#     left(90)
# done()

# 💓 Heart Design with Turtle (Colorful)

# from turtle import *
# import colorsys

# bgcolor("black")
# speed(0)
# h = 0

# for i in range(255):
#     c = colorsys.hsv_to_rgb(h, 1, 1)
#     color(c)
#     h += 0.005

#     begin_fill()
#     left(140)
#     forward(180)
#     circle(-90, 200)
#     left(120)
#     circle(-90, 200)
#     forward(180)
#     end_fill()

#     right(1)
#     penup()
#     goto(0, 0)
#     pendown()

# done()



