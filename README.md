#  Bank Review Sentiment Analysis using NLP

## Overview

This project analyzes customer reviews of three major Ethiopian banks—Commercial Bank of Ethiopia (CBE), Bank of Abyssinia (BOA), and Dashen Bank—collected from the Google Play Store. Using Natural Language Processing (NLP) and Machine Learning techniques, the project identifies customer sentiment and extracts common themes from user feedback.

The goal is to help banks understand customer opinions and identify areas for service improvement.


## Objectives

- Collect customer reviews from Google Play.
- Store and manage review data.
- Clean and preprocess text data.
- Perform Exploratory Data Analysis (EDA).
- Analyze customer sentiment.
- Extract common discussion themes.
- Compare customer feedback across different banks.


## Banks Included

- Commercial Bank of Ethiopia (CBE)
- Bank of Abyssinia (BOA)
- Dashen Bank


## Technologies Used

- Python
- Jupyter Notebook
- Pandas
- NumPy
- NLTK
- Scikit-learn
- Matplotlib
- PostgreSQL
- JavaScript (Google Play Review Scraper)


## Project Structure

```
bank-review-sentiment-analysis/
│
├── notebooks/
│   ├── 01_EDA.ipynb
│   ├── 02_Preprocessing.ipynb
│   ├── 03_Modeling.ipynb
│   ├── 04_Sentiment_Analysis.ipynb
│   └── 05_Theme_Extraction.ipynb
│
├── data/
│   ├── raw_reviews.json
│   └── cleaned_reviews.csv
│
├── scraper/
│   └── scraper.js
│
├── images/
│
└── README.md
```


## Project Workflow

1. Collect reviews from Google Play Store.
2. Store the collected data.
3. Clean and preprocess customer reviews.
4. Perform Exploratory Data Analysis (EDA).
5. Train and evaluate sentiment analysis models.
6. Extract common customer discussion themes.
7. Compare customer experiences across banks.


## Dataset

The dataset contains customer reviews collected from the Google Play Store for:

- Commercial Bank of Ethiopia
- Bank of Abyssinia
- Dashen Bank

The dataset includes review text, ratings, and other metadata used for analysis.


## Results

The project provides:

- Customer sentiment classification
- Theme extraction
- Exploratory data analysis
- Visualizations of customer feedback
- Comparative insights across the three banks


## How to Run

1. Clone this repository.
2. Install the required Python packages.
3. Open the notebooks in Jupyter Notebook or JupyterLab.
4. Run the notebooks in order:

- 01_EDA.ipynb
- 02_Preprocessing.ipynb
- 03_Modeling.ipynb
- 04_Sentiment_Analysis.ipynb
- 05_Theme_Extraction.ipynb


## Future Improvements

- Implement deep learning models (LSTM/BERT)
- Build an interactive dashboard
- Deploy the model using FastAPI
- Automate data collection
- Perform real-time sentiment analysis
