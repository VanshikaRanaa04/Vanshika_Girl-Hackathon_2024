#!/usr/bin/env python
# coding: utf-8

# In[1]:


from io import BytesIO
from PIL import Image
import streamlit as st
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Load the trained model
model_path = r"C:\Users\Vanshika Rana\Downloads\first_model (1).hdf5"
sec_model = load_model(model_path)

# Define function to preprocess image
def preprocess_image(img):
    img = img.resize((350, 350))  # Resize image
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img /= 255.0  # Rescale to match the training data
    return img

# Define function to predict class
def predict_class(img_bytes):
    # Convert image bytes to PIL Image
    img = Image.open(BytesIO(img_bytes))
    
    # Preprocess the image
    img = preprocess_image(img)
    
    # Predict the class probabilities
    probabilities = sec_model.predict(img)[0]
    
    # Get the predicted class index
    predicted_class_index = np.argmax(probabilities)
    
    return predicted_class_index, probabilities

# Streamlit app
def main():
    st.title('Wildfire Prediction')
    
    # File uploader
    uploaded_file = st.file_uploader("Upload Image", type=["jpg", "jpeg", "png"])
    
    if uploaded_file is not None:
        # Display the uploaded image
        st.image(uploaded_file, caption='Uploaded Image', use_column_width=True)
        
        # Predict the class for the uploaded image
        predicted_class_index, probabilities = predict_class(uploaded_file.read())  # Read image bytes
        uploaded_file.seek(0)  # Reset file pointer after reading
        
        # Display prediction results
        st.write('Class Index:', predicted_class_index)
        st.write('Class Probabilities:', probabilities.tolist())

if __name__ == '__main__':
    main()


# In[ ]:




