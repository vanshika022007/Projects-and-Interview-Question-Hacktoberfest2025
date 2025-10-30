n=int(input())
z=n
c=0

s=0
while n>0:
    a=n%10
    f=1
    for i in range(1,a+1):
        f*=i
    s+=f
    n=n//10


if s==z:
    print(1)
else:
    print(0)