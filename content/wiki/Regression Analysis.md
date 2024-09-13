Regression is a way of estimating an outcome (called dependent variables) given its relationship with predictors (called independent variables).

There are two types of regression:
- **Simple regression**: when a single independent variable is used to predict the dependent variable
- **Multiple regression**: when mutiple independent variables are used to predict the dependent variable

Furthermore, regressions can be **linear** or **non-linear** regression depending on the relationship between the dependent and independent variables.

## Linear Regression

The goal of Linear Regression is to ouput an equation of the form:
$$y = \theta_0 + \theta_1x_1 + \theta_2x_2 + ... +\theta_nx_n$$
optimal for a certain quality metric. [[Building a Linear Regression Model]].

The $\theta$s are the coefficients and x is the input, the independent variable. $y$ is the predicted/estimated value.

### Pros
- Very fast
- No parameter tuning necessary
- Easy to understand

### Cons
- Limited scope

#math