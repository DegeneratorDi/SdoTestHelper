import json
import urllib.request

inF = urllib.request.urlopen('https://obscure-hollows.herokuapp.com/dump.json')
outF = open("base.js", "w")
data = json.loads(inF.read().decode('utf8'))

outF.write("var db = {\n")
for i in data["quests"]:
    st = "'{0}':'{1}',\n".format(i["quest"].replace('\n', '\\n').replace("\xa0", '\\xa0'),
                                 i["corr_answer"].replace('\n', '\\n').replace("\xa0", '\\xa0'))
    print(st)
    outF.write(st)
outF.write("}\n")
outF.close()
inF.close()
