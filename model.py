import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import numpy as np
import pandas as pd
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification

def build_and_train_integrated_sentiment_model(data_path):
    # Load dataset
    data = pd.read_csv(data_path)  # Ensure the dataset has 'text' and 'label' columns
    texts = data['text'].values
    labels = data['label'].values

    # Preprocess labels
    label_encoder = LabelEncoder()
    labels = label_encoder.fit_transform(labels)

    # Split data
    X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.2, random_state=42)

    # Tokenize and pad sequences for custom model
    tokenizer = Tokenizer(num_words=10000, oov_token='<OOV>')
    tokenizer.fit_on_texts(X_train)
    
    X_train_seq = tokenizer.texts_to_sequences(X_train)
    X_test_seq = tokenizer.texts_to_sequences(X_test)

    max_length = 100
    X_train_pad = pad_sequences(X_train_seq, maxlen=max_length, padding='post', truncating='post')
    X_test_pad = pad_sequences(X_test_seq, maxlen=max_length, padding='post', truncating='post')

    # Build the custom LSTM model
    custom_model = Sequential([
        Embedding(input_dim=10000, output_dim=64, input_length=max_length),
        LSTM(64, return_sequences=True),
        Dropout(0.2),
        LSTM(32),
        Dense(32, activation='relu'),
        Dropout(0.2),
        Dense(1, activation='sigmoid')
    ])

    custom_model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

    # Train the custom model
    custom_model.fit(
        X_train_pad,
        y_train,
        epochs=5,
        batch_size=32,
        validation_data=(X_test_pad, y_test)
    )

    # Load and preprocess data for FinBERT
    finbert_tokenizer = AutoTokenizer.from_pretrained("yiyanghkust/finbert-tone")
    finbert_model = TFAutoModelForSequenceClassification.from_pretrained("yiyanghkust/finbert-tone")

    def preprocess_for_finbert(texts):
        return finbert_tokenizer(texts.tolist(), padding=True, truncation=True, return_tensors="tf")

    test_inputs = preprocess_for_finbert(X_test)

    # FinBERT predictions
    finbert_outputs = finbert_model.predict(test_inputs)
    finbert_predictions = tf.nn.softmax(finbert_outputs.logits, axis=1).numpy()

    # Combine predictions from both models
    custom_predictions = custom_model.predict(X_test_pad).flatten()
    custom_predictions = np.clip(custom_predictions, 0, 1)  # Ensure within probability range

    # Weighted average of predictions
    combined_predictions = 0.5 * custom_predictions + 0.5 * finbert_predictions[:, 1]
    final_predictions = (combined_predictions > 0.5).astype(int)

    # Evaluate combined model
    accuracy = np.mean(final_predictions == y_test)
    print(f"Integrated Model Test Accuracy: {accuracy * 100:.2f}%")

    return custom_model, finbert_model, tokenizer, finbert_tokenizer, label_encoder

# Example usage (Replace 'dataset.csv' with your dataset file path)
# custom_model, finbert_model, tokenizer, finbert_tokenizer, label_encoder = build_and_train_integrated_sentiment_model('dataset.csv')
