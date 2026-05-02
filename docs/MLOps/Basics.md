## What is Machine Learning?
**Machine Learning (ML)** is a branch of **Artificial Intelligence (AI)** that enables computers to **learn from data and improve their performance without being explicitly programmed for every task**.

With normal programming, you write rules yourself. With machine learning, you give the computer examples, and it figures out the rules.

**Example:**
Think about **email spam detection**:
- You don’t manually tell the computer every spam rule
- The system learns from thousands of emails labeled _spam_ or _not spam_
- Over time, it gets better at identifying spam automatically
That learning process is **machine learning**.

## What is a Model?
A model is the final output of machine learning.
It is not the data. It is not the algorithm. It is the pattern the algorithm learned from the data.

Think of the model as:
A mathematical function the computer created 
- It takes inputs
- It outputs predictions (spam mail)

## Steps to create a Model
*How Data Scientists Create a Simple Model.*

Think of this as the “hello world” of ML.
### Start with a Small Dataset
Every model begins with data.
Example: You want to predict a spam mail based on data like:
- Set of spam mails.
- Set of not spam mails.
This dataset will have:
Inputs (features): the spam mails with spam data
Output (label): the spam mails
### Split the Data: Train vs Test
Before training, data scientists split the dataset into:
- Training data (usually ~80%) The part the model learns from.
- Testing data (usually ~20%) The part used later to check if the model learned properly.

Why? Because you should never test a student with questions they already memorized.
### Choose a Simple Model
For beginners, data scientists usually start with a simple algorithm, like:
- Logistic Regression (for classification)
- Decision Tree
- k-Nearest Neighbors (KNN)

For the spam mail example, Logistic Regression or Decision Tree works great.
### Train the Model
Training means:
- Give the model training data
- Let it “learn” patterns between measurements and flower species
- Internally, the model adjusts itself to reduce mistakes

You don’t manually code patterns. The model learns them automatically.

### Test the Model
Now, evaluate it using the test data.

The goal is to see:
- How many predictions are correct?
- Where is the model making mistakes?
This step tells you if the model is ready or needs improvement.
### Improve (If Needed)
Beginners usually follow simple improvement steps:
- Remove noisy or incorrect data
- Try a different model
- Tune settings (called hyperparameters)
- Add more training samples

Even small changes can boost accuracy.
### Save the Model
Once the model performs well, you save it as a file. 
Example formats:
- .pkl
- .joblib
- .onnx

This saved model can now be used by:
- Apps
- Websites
- Backend microservices
- MLOps pipelines
and This is what gets deployed.