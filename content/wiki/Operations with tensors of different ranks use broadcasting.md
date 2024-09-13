When doing operations with [[Pytorch tensor is a fast array for GPUs|Pytorch tensors]] that have different *ranks*, ***broadcasting*** is used.

Pytorch will scale up the lowest-rank tensor making copies of its value in the other dimensions.

From Deep Learning for Coders, Chapter 4:
-   PyTorch doesn't _actually_ copy `mean3` 1,010 times. It _pretends_ it were a tensor of that shape, but doesn't actually allocate any additional memory
-   It does the whole calculation in C (or, if you're using a GPU, in CUDA, the equivalent of C on the GPU), tens of thousands of times faster than pure Python (up to millions of times faster on a GPU!).

#mlai 