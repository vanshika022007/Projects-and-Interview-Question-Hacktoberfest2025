h=int(input())
a=int(input())
if h<120:
    print("Not Allowed")
else:
    if 120<=h<=140:
        if a<5:
            print("Not Allowed")
        else:
            print("Must ride with Adult")
            print("200")
    else:
        if a<5:
            prrint("Not Allowed")
        elif 5<=a<=12:
            print("Must ride with Adult")
            print("200")
        else :
            print("Can ride alone")
            print("300")