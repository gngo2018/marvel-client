import axios from 'axios'

const url = process.env.NEXT_PUBLIC_marvel_url + 'public/characters?apikey='
const key = process.env.NEXT_PUBLIC_marvel_public_key

const requestUrl = url + key

export function IronManData() {
    var data = {
        "code": 200,
        "status": "Ok",
        "copyright": "© 2021 MARVEL",
        "attributionText": "Data provided by Marvel. © 2021 MARVEL",
        "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2021 MARVEL</a>",
        "etag": "590f033838db6f849f845432b32964b85e5a5ef2",
        "data": {
            "offset": 0,
            "limit": 20,
            "total": 1,
            "count": 1,
            "results": [
                {
                    "id": 1009368,
                    "name": "Iron Man",
                    "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
                    "modified": "2016-09-28T12:08:19-0400",
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
                        "extension": "jpg"
                    },
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "comics": {
                        "available": 2580,
                        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/comics",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/comics/43495",
                                "name": "A+X (2012) #2"
                            },
                        ]
                    },
                    "series": {
                        "available": 631,
                        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/series",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
                                "name": "A+X (2012 - 2014)"
                            },
                        ]
                    },
                    "events": {
                        "available": 31,
                        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/events",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                                "name": "Acts of Vengeance!"
                            },
                        ]
                    }
                }
            ]
        }
    }

    return data;
}

export function GetMarvelHeroByName(props: string){
    try{
        var response = axios.get(requestUrl);
        
        return response;
    }
    catch(e){
        return(e);
    }
}