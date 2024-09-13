Usually, the input data is divided into sets. These sets prevent our model being [[Overfitting is a failure of model training|overfitted]] by "memorizing" every item in the data fed into the training process.

To do that, a simple division can be used, by having a training set and a validation set. The training set is the data used for adjusting the parameters of our model, and the validation set is used to validate the performance of the adjustments.

An usual practive is to divide your data input into 80/20% for the training/validation sets.

Additionally, another set can be introduced: a test set. The test set cannot be used to improve the model, it can only be used to evaluate the performance of the model.

It is of upmost importance that the validation and test sets are representative of the data the it is going to be used in the future.

#mlai