# songScraper

## Description
This script will get u the song data from the wikipedia page
https://en.wikipedia.org/wiki/Lists_of_songs

I have already made a artistNames.txt file after scraping this site.Now when you run yp.py file it generates a artistName and then the method getSongs() in main.py will return the song data if it was able to find it

## Requirements
python3
module:
    bs4

## RUN
either get songs at random or enter a name as a command line argument [allowed with spaces too] or if u don't pass any name it picks a random artist/band from the artistNames.txt file

    $ python3 2p.py [args]

## Warnings
Result data is not formatted 