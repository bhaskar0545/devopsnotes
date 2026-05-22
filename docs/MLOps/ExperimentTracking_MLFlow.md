# Experiment Tracking
**Experiment tracking** is the process of:

> Recording everything a data scientist does while training and evaluating machine learning models.

**Why is it important?**
- Multiple experiments are performed to improve model accuracy
- Without tracking:
    - You **cannot reproduce results**
    - You may **lose the best-performing model**
- Helps identify:
    - Which experiment performed best
    - What combination led to that result

👉 Example insight:  
Even if you achieved **87% accuracy**, you won’t be able to reuse it if you didn’t track:

- algorithm
- dataset version
- environment

 **Typical Experiment Flow**

- Run multiple experiments by changing:
    - Algorithm (Random Forest → Logistic Regression → XGBoost)
    - Dataset (raw → cleaned)
    - Parameters
    - Environment (Windows → Linux with high compute)

Goal: improve model performance (e.g., reach 85%+ accuracy)

## What to Track (VERY IMPORTANT)

These are the **core components of experiment tracking**:

1. **Parameters (Hyperparameters)**
- Learning rate
- Batch size
- Model-specific configurations

2. **Code Version**
- Git commit ID
- Script version used

👉 *Ensures reproducibility*

3. **Dataset Version**
- Changes in dataset:
    - Added/removed records
    - Cleaning/processing steps

👉 *Tools like **DVC** can help manage this*

4. **Metrics**
- Accuracy
- Precision / Recall / F1
- Any evaluation metrics

👉 *Not just final accuracy — track all metrics*

5. **Artifacts**
- Saved model files
- Output files
- Logs

👉 *Important to reuse trained models later*

6. **System Information**
- OS (Windows / Linux)
- CPU / Memory
- Hardware configuration

👉 *Even small environment differences affect results.*

