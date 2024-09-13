To make an optimal [[Action Policy is a function that returns an action given an state|action policy]], we would need to know the complete [[State Transition Matrix maps states transitions according to actions.|state transition matrix]] and the rewards associated with each state transition. Without these informations, we can't have a value function that tells us what is the value of a certain action.

As we're dealing with incomplete information, we try to approximate the value function. This approximation is called the [[Q-function is a value function approximation|Q-function]].

Q-learning solves the problem of not knowing the/having no:
- [[State Transition Matrix maps states transitions according to actions.|state transition matrix]]
- [[Action Policy is a function that returns an action given an state|action policy]]

Q-learning is a type of [[Reinforcement Learning]].

#mlai #cs 