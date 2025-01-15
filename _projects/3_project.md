---
layout: page
title: Convolutional Wasserstein Distances
description: We investigate and implement some features of an article of Convolutional Wasserstein Distances
img: assets/img/diffuse3D.png
importance: 3
category: Course Projects
---

# Convolutional Wassertein Distances

This is the repository containing the work done for the final project of the *Geometric Data Analysis* course given by Prof. Feydy at the MVA Master (ENS Paris-Saclay).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Graph_Inter.png" title="graph inter" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/barycenter_images.png" title="barycenters" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/diffuse3D.png" title="diffuse3D" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Abstract of the project 

We analyze and run additional experiments to the article of Solomon et al. *Wasserstein Distances: Efficient Optimal Transportation on Geometric Domains*, that proposes a computationally efficient method based on Wasserstein distances and diffusion to tackle tasks on 3D meshes or images. In addition to try the method on connected graphs, we quantify the error brought by approximating the true kernel with the heat kernel and highlight the effect of several parameters such as the diffusion time and the regularization value. This led us to eventually identify issues to be addressed in future work to improve on the results obtained by Solomon et al.

### Practical Information

The repository contains the following material:
- The final report
- an explanatory video recorded by the original authors of the article
- Useful references for the project
- Images of different formats in the *data* folder
- *Code* folder that contains all the utils for thz projects, as well as jupyter notebooks to reproduce the experiments that we done during the project

To run it, download the *Code* and the *data* folder in the same directory, and make sure to install the required libraries (almost all are classical (scipy, matplotlib), except visualization libraries for graphs `networkX` and 3D meshes `meshplot`).

### Authors

[Hippolyte Pilchen](https://github.com/HipPilchen) - ENS Paris Saclay and [Victor Barberteguy](https://github.com/VictorBbt) - Institut Polytechnique de Paris

Feel free to reach us if you have any questions! (mail addresses are indicated in the report)
