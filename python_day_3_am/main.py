playlist = {
    "Tant Pis": {"artist": "Rim'K", "genre": "French Rap"},
    "Bolide Allemand": {"artist": "SDM", "genre": "French Rap"},
    "Tchikita": {"artist": "Jul", "genre": "French Rap"},
    "Coco": {"artist": "Ninho", "genre": "French Rap"},
    "Autobahn": {"artist": "SCH", "genre": "French Rap"},
    "Normal": {"artist": "Morad", "genre": "Spanish Rap"},
    "Italiano": {"artist": "Baby Gang", "genre": "Italian Rap"},
    "Pure Cocaine": {"artist": "Lil Baby", "genre": "American Rap"},
    "Selfie Noir": {"artist": "Didine Canon 16", "genre": "Algerian Rap"},
    "Casanova": {"artist": "Soolking", "genre": "French Rap"},
}

def add_song(playlist, title, artist, genre):
    try:
        if not isinstance(title, str):
            raise ValueError(f"Invalid data type for song '{title}'. Title must be a string.")
        if not isinstance(artist, str):
            raise ValueError(f"Invalid data type for artist '{artist}'. Artist must be a string.")
        if not isinstance(genre, str):
            raise ValueError(f"Invalid data type for genre '{genre}'. Genre must be a string.")

        playlist[title] = {"artist": artist, "genre": genre}
        print(f"Added song '{title}' to the playlist.")
    except ValueError as e:
        print(str(e))

add_song(playlist, True, 0.1, "Rap")
add_song(playlist, "44", "Niska", "French Rap")
add_song(playlist, "Khabib", "Central Cee", "UK Rap")

def view_playlist(playlist):
    try:
        for title, song_info in playlist.items():
            artist = song_info["artist"]
            genre = song_info["genre"]
            print(f"Title: {title} | Artist: {artist} | Genre: {genre}")
    except KeyError:
        print("Error: Playlist is currently empty or has missing song information.")

view_playlist(playlist)

def update_song(playlist, title, new_artist=None, new_genre=None):
    try:
        if title in playlist:
            if new_artist:
                playlist[title]["artist"] = new_artist
            if new_genre:
                playlist[title]["genre"] = new_genre
        else:
            raise KeyError(f"The song '{title}' does not exist in the playlist.")
    except KeyError as e:
        print(e)

update_song(playlist, "Tant Pis", new_genre="3rb l'Europe")
update_song(playlist, "Coca", new_artist="Ninho ft Niska")

view_playlist(playlist)

def delete_song(playlist, title):
    try:
        if title in playlist:
            del playlist[title]
            print(f"'{title}' has been removed from the playlist.")
        else:
            raise KeyError(f"The song '{title}' is not in the playlist.")
    except KeyError as e:
        print(f"Error: {e}")

delete_song(playlist, "Casanova")
delete_song(playlist, "Sale")

view_playlist(playlist)