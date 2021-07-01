const sampleMovies = [
    {
        "title": "Blazing Saddles",
        "releaseYear": new Date(1974, 1),
        "format": "VHS",
        "stars": ["Mel Brooks", "Clevon Little", "Harvey Korman", "Gene Wilder", "Slim Pickens", "Madeline Kahn"]
    },
    {
        "title": "Casablanca",
        "releaseYear": new Date(1942, 1),
        "format": "DVD",
        "stars": ["Humphrey Bogart", "Ingrid Bergman", "Claude Rains", "Peter Lorre"]
    },
    {
        "title": "Charade",
        "releaseYear": new Date(1953, 1),
        "format": "DVD",
        "stars": ["Audrey Hepburn", "Cary Grant", "Walter Matthau", "James Coburn", "George Kennedy"]
    },
    {
        "title": "Cool Hand Luke",
        "releaseYear": new Date(1967, 1),
        "format": "VHS",
        "stars": ["Paul Newman", "George Kennedy", "Strother Martin"]
    },
    {
        "title": "Butch Cassidy and the Sundance Kid",
        "releaseYear": new Date(1969, 1),
        "format": "VHS",
        "stars": ["Paul Newman", "Robert Redford", "Katherine Ross"]
    },
    {
        "title": "The Sting",
        "releaseYear": new Date(1973, 1),
        "format": "DVD",
        "stars": ["Robert Redford", "Paul Newman", "Robert Shaw", "Charles Durning"]
    },
    {
        "title": "The Muppet Movie",
        "releaseYear": new Date(1979, 1),
        "format": "DVD",
        "stars": ["Jim Henson", "Frank Oz", "Dave Geolz", "Mel Brooks", "James Coburn", "Charles Durning", "Austin Pendleton"]
    },
    {
        "title": "Get Shorty",
        "releaseYear": new Date(1995, 1),
        "format": "DVD",
        "stars": ["John Travolta", "Danny DeVito", "Renne Russo", "Gene Hackman", "Dennis Farina"]
    },
    {
        "title": "My Cousin Vinny",
        "releaseYear": new Date(1992, 1),
        "format": "DVD",
        "stars": ["Joe Pesci", "Marrisa Tomei", "Fred Gwynne", "Austin Pendleton", "Lane Smith", "Ralph Macchio"]
    },
    {
        "title": "Gladiator",
        "releaseYear": new Date(2000, 1),
        "format": "Blu - Ray",
        "stars": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielson"]
    },
    {
        "title": "Star Wars",
        "releaseYear": new Date(1977, 1),
        "format": "Blu - Ray",
        "stars": ["Harrison Ford", "Mark Hamill", "Carrie Fisher", "Alec Guinness", "James Earl Jones"]
    },
    {
        "title": "Raiders of the Lost Ark",
        "releaseYear": new Date(1981, 1),
        "format": "DVD",
        "stars": ["Harrison Ford", "Karen Allen"]
    },
    {
        "title": "Serenity",
        "releaseYear": new Date(2005, 1),
        "format": "Blu - Ray",
        "stars": ["Nathan Fillion", "Alan Tudyk", "Adam Baldwin", "Ron Glass", "Jewel Staite", "Gina Torres", "Morena Baccarin", "Sean Maher", "Summer Glau", "Chiwetel Ejiofor"]
    },
    {
        "title": "Hooisers",
        "releaseYear": new Date(1986, 1),
        "format": "VHS",
        "stars": ["Gene Hackman", "Barbara Hershey", "Dennis Hopper"]
    },
    {
        "title": "WarGames",
        "releaseYear": new Date(1983, 1),
        "format": "VHS",
        "stars": ["Matthew Broderick", "Ally Sheedy", "Dabney Coleman", "John Wood", "Barry Corbin"]
    },
    {
        "title": "Spaceballs",
        "releaseYear": new Date(1987, 1),
        "format": "DVD",
        "stars": ["Bill Pullman", "John Candy", "Mel Brooks", "Rick Moranis", "Daphne Zuniga", "Joan Rivers"]
    },
    {
        "title": "Young Frankenstein",
        "releaseYear": new Date(1974, 1),
        "format": "VHS",
        "stars": ["Gene Wilder", "Kenneth Mars", "Terri Garr", "Gene Hackman", "Peter Boyle"]
    },
    {
        "title": "Real Genius",
        "releaseYear": new Date(1985, 1),
        "format": "VHS",
        "stars": ["Val Kilmer", "Gabe Jarret", "Michelle Meyrink", "William Atherton"]
    },
    {
        "title": "Top Gun",
        "releaseYear": new Date(1986, 1),
        "format": "DVD",
        "stars": ["Tom Cruise", "Kelly McGillis", "Val Kilmer", "Anthony Edwards", "Tom Skerritt"]
    },
    {
        "title": "MASH",
        "releaseYear": new Date(1970, 1),
        "format": "DVD",
        "stars": ["Donald Sutherland", "Elliot Gould", "Tom Skerritt", "Sally Kellerman", "Robert Duvall"]

    },
    {
        "title": "The Russians Are Coming, The Russians Are Coming",
        "releaseYear": new Date(1966, 0, 1),
        "format": "VHS",
        "stars": ["Carl Reiner", "Eva Marie Saint", "Alan Arkin", "Brian Keith"]
    },
    {
        "title": "Jaws",
        "releaseYear": new Date(1975, 0, 1),
        "format": "DVD",
        "stars": ["Roy Scheider", "Robert Shaw", "Richard Dreyfuss", "Lorraine Gary"]
    },
    {
        "title": "2001: A Space Odyssey",
        "releaseYear": new Date(1968, 0, 1),
        "format": "DVD",
        "stars": ["Keir Dullea", "Gary Lockwood", "William Sylvester", "Douglas Rain"]
    },
    {
        "title": "Harvey",
        "releaseYear": new Date(1950, 0, 1),
        "format": "DVD",
        "stars": ["James Stewart", "Josephine Hull", "Peggy Dow", "Charles Drake"]
    },
    {
        "title": "Knocked Up",
        "releaseYear": new Date(2007, 0, 1),
        "format": "Blu - Ray",
        "stars": ["Seth Rogen", "Katherine Heigl", "Paul Rudd", "Leslie Mann"]
    }
]

export default sampleMovies;