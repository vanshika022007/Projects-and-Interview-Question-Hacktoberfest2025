n=int(input())
l=0
z=n
while z>0:
    a=z%10
    if a>l:
        l=a
    z=z//10

s=n
while n>0:
    d=n%10
    if d<s:
        s=d
    n=n//10

if (s%2==0 and l%2==0):
    print("Yes")
elif l%2!=0 and s%2!=0:
    print("Yes")
else:
    print("No")