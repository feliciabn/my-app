def city_print(mapsize, city):
    count = 0
    for i in map1:
        print(* i, sep = "--")
        count += 1
        if count < mapsize:
            print(* ["|" for j in range(mapsize)], sep = "  ")

user_input = input("Location or Path?: ")

if user_input in "pathPath":
    user_input = 0
else:
    user_input = 1

#keys in the following dictionary follow format [x, y, type of trash accepted (0 = trash, 1 = mixed paper, 2 = plastics)]
disposal = {
"Shopper's Drug Mart": [0,0,["trash", "mixed paper"]],
"Trash Can": [6,5,["trash"]],
"Printing Company": [1,3,["mixed paper"]],
"NoFrill's Supermarket": [8,9,["trash", "plastics"]],
"Park Garbage Bin": [4,7,["mixed paper", "plastics"]]
}

#having mapsize variable allows customizability of map without changing too much
mapsize = 10
map1 = [["~" for i in range(mapsize)] for j in range(mapsize)]
user_path = []
output = set()
city_print(mapsize, map1)


if user_input:
    x, y = map(int, input("Enter your current location (format: x y): ").split())
    map1[y][x] = "#"
    try:
        user_path.append([x,y])
    except:
        pass
else:
    x, y = map(int, input("Enter your current location (format: x y): ").split())
    x1, y1 = map(int, input("Enter your destination's location (format: x y): ").split())
    user_path.append([x, y])
    while x != x1 and y != y1:
        if x != x1:
            map1[y][x] = "#"
            x += [1, -1][x1 < x]
            user_path.append([x,y])
        if y != y1:
            map1[y][x] = "#"
            y += [1, -1][y1 < y]
            user_path.append([x,y])
    user_path.append([x, y])

city_print(mapsize, map1)

dist = int(input("What is the maximum distance you are willing to travel from your path/location?: "))
type = input("What type of trash are you trying to deposit (plastics, mixed paper, trash)?: ")

#checks for locations within the inputted distance
for i in user_path:
    for j in disposal:
        shop = disposal[j]
        temp_x = shop[0]
        temp_y = shop[1]
        if ((temp_x - i[0]) ** 2 + (temp_y - i[1]) ** 2)** 0.5 <= dist and type in shop[2]:
            output.add(j + ", (" + str(temp_x) + ", " + str(temp_y) + ")")
            map1[temp_y][temp_x] = "O"

city_print(mapsize, map1)
if output:
    print(* output, sep = "\n")
else:
    print("Sorry, there are no recorded locations nearby")
