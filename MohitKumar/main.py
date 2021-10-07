from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq

CELL_LEN = 2
link_prehead = "https://en.wikipedia.org/wiki/List_of_songs_recorded_by_"

def soupify(url):
    my_url=url
    try:
        uClient=uReq(my_url)
    except:
        print("did not find it")
        exit(0)
    page_html=uClient.read()
    uClient.close()
    page_soup=soup(page_html,"html.parser")
    return page_soup

def getSongs(artist):
    
    url = link_prehead + artist
    
    page_soup = soupify(url)
    data = []
    tables = page_soup.find_all('table', attrs={'class':'wikitable'})

    for table in tables:
        table_body = table.find('tbody')

        rows = table_body.find_all('tr')

        filmName = "" # for some artists the first cell is a filmName which needs to be distributed to all right cells
        i = 0
        for row in rows:
            if(i == 0): # Always Skip the first row
                i+=1
                continue
            
            tHead = filmName
            
            if(row.find('th')):
                if(row.find('th').find('a')):
                    tHead = row.find('th').find('a').text
                else:
                    tHead = row.find('th').text

            if(tHead):
                filmName = tHead
            z = row.find_all('td')

            if(len(z)):
                z.pop() #always remove the last cell may contain info of Producers or some weird reference links or notes 
            
            z= [ele.text.strip() for ele in z]

            if(tHead):
                z.insert(0, tHead.strip())
            if(len(z) >= CELL_LEN):
                data.append([ele for ele in z if ele]) 

    return data
