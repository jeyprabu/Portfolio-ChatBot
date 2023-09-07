
from flask import Flask, render_template, request, jsonify
import mysql.connector

app = Flask(__name__)

# Configure MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="hari"
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_answer')
def get_answer():
    question = request.args.get('question')

    try:
        cursor = db.cursor()
        query = "SELECT answer FROM chatbot WHERE question LIKE %s"
        cursor.execute(query, ('%' + question + '%',))
        result = cursor.fetchone()

        if result:
            return jsonify({"answer": result[0]})
        else:
            return jsonify({"answer": "I don't know what you are talking about."})
    except Exception as e:
        return jsonify({"answer": "I encountered an error while fetching the answer."})
    finally:
        if cursor:
            cursor.close()

if __name__ == '__main__':
    app.run(debug=True)
