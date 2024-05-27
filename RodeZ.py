from flask import Flask, render_template,request

app = Flask(__name__)
# Replace with your OpenCage API key
API_KEY = 'e44f9c9a943e441d85fd678e98afba63'
# ------------------------------------------------------------------------ Important function-------------------------------------------

def coordinateGenrator(location):
        geocoder = OpenCageGeocode(API_KEY)
        results = geocoder.geocode(location)
        if results:
            latitude = results[0]['geometry']['lat']
            longitude = results[0]['geometry']['lng']
            return latitude, longitude
        else:
            return None

    # # Example usage
    # location = 'WM9C+9CJ, Sarjapur Main Rd, Bellandur, Bengaluru, Karnataka 560103'
    # coordinates = get_coordinates(location)

    # if coordinates:
    #     print(f"Location: {location}")
    #     print(f"Coordinates: Latitude = {coordinates[0]}, Longitude = {coordinates[1]}")
    # else:
    #     print("Location not found.")


@app.route('/')
def index():
    if request.method == 'POST':
        submit_name=request.form['submit-btn']
        address=request.form["search-input"]
        print(address)
        # coordinate
        latitude,longitude=coordinateGenrator(address)
        print(latitude,longitude)
        return render_template('home.html',latitude,longitude)
    return render_template("home.html")

if __name__ == '__main__':
    app.run(debug=True)
