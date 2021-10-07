from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq
from main import getSongs,soupify
import random
import sys



def link_table_gen():
    page_soup = soupify("https://en.wikipedia.org/wiki/Lists_of_songs")
    data = []
    table = page_soup.find('div', attrs={'class':'div-col'})


    rows = table.find_all('a')
    for row in rows:
        data.append(row.text.replace(' ' ,'_'))
    
    return data


# as name suggests it appends to the artistNames.txt .. this is not needed now as I have used it , after appending some artists that occured more than once were deleted too
def appendNamesToFile(artists):
    for i in range(len(artists)):
        if(artists[i].find("by") >= 0):
            if(len(artists[i].split("by")) > 1):
                artists[i] = artists[i].split("by")[1].replace("_", " ").strip()
    file1 = open("artistNames.txt", "w")
    for artist in artists:
        file1.writelines(artist+"\n")
    file1.close() #always close the file



def chooseRandomArtist():
    line_cnt = 0

    fileName = "artistNames.txt"
    
    with open(fileName , "r") as f:
        for line in f.readlines():
            line_cnt +=1

    f.close()
    line_cnt = random.randint(0, line_cnt) 

    artistName = ""
    cnt = 0
    with open(fileName , "r") as f:
        for line in f.readlines():
            cnt +=1
            if(cnt == line_cnt):
                artistName = line
                break
    
    return artistName

def toPascalCase(artistName : str):
    artistName = artistName.lower()
    
    artistname = artistName[0].upper()

    #after each _ make the next one cap

    for i in range(1, len(artistName)):
        if(artistName[i-1] == '_' and i-1 > 0 ):
            artistname += artistName[i].upper()
        else:
            artistname += artistName[i]

    artistname = artistname.removesuffix("_")

    return artistname

if __name__ == '__main__' :
    if(len(sys.argv) >= 2):
        artistName = ""
        for chunk in sys.argv[1:]:
            artistName += chunk +"_"
        

        artistname = toPascalCase(artistName) 
        
        print(getSongs(artistname))
    else:
        print(getSongs(chooseRandomArtist()))
    