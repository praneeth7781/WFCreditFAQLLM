# Fine-Tuning and Adapting Pretrained LLM for Credit Card Information Retrieval

This project demonstrates the process of fine-tuning a pretrained language model (LLM) to handle credit card-related data. The approach focuses on extracting accurate answers from structured data scraped from websites. Below is a step-by-step explanation of our workflow and findings.

---

## Workflow

### 1. **Initial Fine-Tuning of BERT**
- We started with the `bert-base-cased` model.
- Fine-tuned the model on the SQuAD dataset to adapt it for question-answering tasks.
- While effective for straightforward datasets, the model struggled with the diverse and overlapping context in the scraped data.

### 2. **Implementing Retrieval-Augmented Generation (RAG)**
- To address context diversity, we implemented RAG, combining retrieval with generative models.
- Challenges:
  - Credit card data often overlaps, making context retrieval less precise.
  - This necessitated tagging data with card-specific identifiers to improve context selection.

### 3. **Data Preparation**
- Structured the scraped data into a well-defined JSON format (`y.json`), with fields tagged to specific cards.
- This structured data enabled efficient retrieval for RAG.

### 4. **Fine-Tuning GPT-Neo**
- Experimented with fine-tuning `gpt-neo-1.3B` on our structured dataset.
- Faced overfitting issues due to the limited size of our dataset.

### 5. **Adopting LoRA**
- To mitigate overfitting, we shifted to **Low-Rank Adaptation (LoRA)** for model fine-tuning.
- Created **question-context-answer** pairs but still encountered limitations due to insufficient data.

### 6. **Data Augmentation**
- Used LangChain to paraphrase questions and augment the dataset.
- Even with augmented data (e.g., 300 questions), the dataset was still too small for GPT-Neo to generalize effectively.

### 7. **Reverting to BERT**
- Based on the constraints, we reverted to the fine-tuned `bert-base-cased` model, initially adapted for SQuAD.
- This model performed reliably on our structured dataset with tagged data.

---

## Key Components

### **Data**
- A structured JSON file (`y.json`) containing credit card details tagged with card-specific identifiers.

### **Models**
- `bert-base-cased` (fine-tuned on SQuAD).
- `gpt-neo-1.3B` (attempted fine-tuning but reverted due to data constraints).

### **Techniques**
- **Fine-Tuning**: Adapting pretrained models for specific tasks.
- **LoRA**: Mitigating overfitting by adapting only a subset of model weights.
- **Data Augmentation**: Enhancing dataset size with paraphrased question-context-answer pairs.
- **RAG**: Combining retrieval with generation for diverse contexts.

---

## Results
- The fine-tuned `bert-base-cased` model provided the best trade-off between performance and complexity.
- Structured and tagged data proved critical for accurate context retrieval.