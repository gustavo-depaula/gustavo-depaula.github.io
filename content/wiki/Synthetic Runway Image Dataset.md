
# Introduction

The template I chose for this project is "Gather your own dataset". 

This project intends to use state-of-the-art image generation models such as Latent Diffusion Models popularized by Stable Diffusion to generate a synthetic aircraft runway image dataset to be used in vision-based landing tasks. This approach can greatly increase the availability of runway images to be used in other research projects, and, by sharing the models weights freely, allow other researchers to generate their own synthetic dataset with their own desired charactheristics.
# Motivation

Currently, there is an increasing interest in autonomous systems in the aerospace field. Commercial airplanes already have autopilot when the aircraft is in cruise mode, but takeoff and landing are still heavily in the pilots' hands. Machine learning models are a promising approach to help in vision-based landing, specially in the runway detection component.

But, contemporary machine learning techniques usually require 10s or 100s of thousands of items in a dataset. But there is a lack of open-source datasets of aerial images that can be used in the task of runway detection.

Synthetic image dataset generation can be a viable strategy to bridge this gap of data availability.
# Literature Review


## LARD 
https://arxiv.org/pdf/2304.09938

## FS2020
https://www.researchgate.net/publication/379082680_An_image-based_runway_detection_method_for_fixed-wing_aircraft_based_on_deep_neural_network

## Runway Detection and Localization in Aerial Images Using Deep Learning

two-stage detection: fine-tune resnet to find if there's runway in image
https://ieeexplore.ieee.org/document/8945889
https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8945889

## Valnet
(RLD)
https://www.mdpi.com/2072-4292/16/12/2161

## BARS

https://arxiv.org/abs/2210.12922


## Stable Diffusion

https://arxiv.org/abs/2112.10752
https://arxiv.org/abs/2302.05543
https://arxiv.org/abs/2307.01952

tutorial / library: https://huggingface.co/docs/diffusers/en/index

