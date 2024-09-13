Fine-tuning is a [[Transfer learning|transfer learning]] technique to update the parameters of a pre-trained model for a specific use-case.

In fine-tuning, one [[Epoch is a training cycle in model training|epoch]] is used to train a new [[The head is the top of the neural network|head]] on top of the pre-trained model, so the neural network works for the desired use-case.

Then, it uses an specified number of epochs to train the entire network, more quickly updating the last layers (specially the head) and then the earlier layers ([[Why the earlier layers don't require many changes in fine-tuning?|which usually don't require many changes]]).

#mlai