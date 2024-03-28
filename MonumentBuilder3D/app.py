from flask import Flask, render_template, Request, redirect, url_for
from keys import check_key

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('key_input.html')

@app.route('/check_key', methods=['POST'])
def check_key_route():
    key = request.form['key']
    result = check_key(key)
    return result

@app.route('/scene')
def scene():
    return render_template('scene.html')

if __name__ == '__main__':
    app.run(debug=True)
