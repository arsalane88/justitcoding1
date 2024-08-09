weather_data = {
    "London": {"temperature": "15°C", "conditions": "Cloudy", "wind_speed": "5 km/h", "humidity": "80%"},
    "New York": {"temperature": "20°C", "conditions": "Sunny", "wind_speed": "10 km/h", "humidity": "50%"},
    "Tokyo": {"temperature": "18°C", "conditions": "Rainy", "wind_speed": "7 km/h", "humidity": "90%"},
    "Sydney": {"temperature": "22°C", "conditions": "Windy", "wind_speed": "15 km/h", "humidity": "60%"},
    "Paris": {"temperature": "17°C", "conditions": "Foggy", "wind_speed": "3 km/h", "humidity": "85%"},
    "Algiers": {"temperature": "28°C", "conditions": "Warm", "wind_speed": "4 km/h", "humidity": "75%"},
    "Caracas": {"temperature": "23°C", "conditions": "Mild", "wind_speed": "9 km/h", "humidity": "70%"},
    "Jakarta": {"temperature": "31°C", "conditions": "Hot", "wind_speed": "6 km/h", "humidity": "80%"},
    "Moscow": {"temperature": "9°C", "conditions": "Cold", "wind_speed": "18 km/h", "humidity": "65%"},
    "Nairobi": {"temperature": "34°C", "conditions": "Hot", "wind_speed": "5 km/h", "humidity": "80%"}
}

def forecast_app():
    print("Welcome to The Weather Forecast App!")
    while True:
        try:
            city = input("Enter one of the following 10 city names please. \nLondon, New York, Tokyo, Sydney, Paris, Algiers, Caracas, Jakarta, Moscow or Nairobi: ").capitalize()
            if city in weather_data:
                print(f"Weather forecast for {city}:")
                print(f"Temperature: {weather_data[city]['temperature']}")
                print(f"Conditions: {weather_data[city]['conditions']}")
                print(f"Wind speed: {weather_data[city]['wind_speed']}")
                print(f"Humidity: {weather_data[city]['humidity']}")
                break
            else:
                print(f"Sorry, '{city}' is not in The Weather Forecast App.")
        except KeyboardInterrupt:
            print("\nGoodbye!")
            break
        except Exception as e:
            print(f"An error occurred: {e}")

    print("Thank you for using The Weather Forecast App!")

forecast_app()