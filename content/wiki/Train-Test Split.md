In the construction and evaluation of models, we have approaches on how we can segment our available dataset to be used:

- **Train/test on the same dataset**: we both train/fit our model using all of the data in our dataset, and the validate our model using a portion of our dataset.
	- This will give us low out-of-sample accuracy, as it rewards [[Overfitting is a failure of model training|overfitting]].
- **Train/test split**: divide the dataset into one that is going to be used for the model training and into another that is only going to be used in the test phase.
	- This will give us a more accurate out-of-sample accuracy.
	- Careful on how the division is done. The results are highly dependent on the dataset.
- **K-fold cross-validation**: This is train/test split but done in K-iterations, and at each iteration, 1/K part of the dataset is chosen as the test set.

## On Train/Dev/Test split

It is also possible to split the dataset three ways:
- Train: uset to train parameters
- Dev/Validation: used to train hyper parameters such as neurons length
- Test: only used at the end to validate the neural network