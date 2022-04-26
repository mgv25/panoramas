import os

path = "/home/sp/Documents/isparta/"
mainfilename = "isparta.xml"

l = []

for file in os.listdir(path):
    if "xml" in file:
        l.append(file)

mainfile = open(path + mainfilename, "r", encoding='utf-8')
mainlines = mainfile.readlines()

table = {}
with open(path + "keys.txt") as f:
    for line in f:
        k, v = line.split()
        table[k] = v

for key in table:
    file = open(path + key + ".xml", "w", encoding='utf-8')
    for line in mainlines:
        if "tour start" in line:
            line = "<tour start=\"%s\">\n" % table[key]
        file.write(line)
    file.close()


# generate html files:
mainfilename = "index.html"
mainfile = open(path + mainfilename, "r", encoding='utf-8')
mainlines = mainfile.readlines()
mainfile.close()

for key in table:
    file = open(path + key + ".html", "w", encoding='utf-8')
    for line in mainlines:
        if "pano.readConfigUrl" in line:
            line = "\t\t\tpano.readConfigUrl(\"%s.xml\");\n" % key
        file.write(line)
    file.close()
